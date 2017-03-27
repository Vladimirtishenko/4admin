var Model = require('./model/index.js');
var ModelPageItem = require('./model/page_menu_item.js');
var mongoose = require('../../lib/mongoose.js');
var Translation = require('../translations/translation.js');
var async = require('async');

function Page() {
    this.schema = Model.schema.obj;
    this.collection = Model.collection.name;
    this.schemaItem = ModelPageItem.schema.obj;
    this.collectionItem = ModelPageItem.collection.name;
}

Page.prototype.getAllpage = function(lang, callback) {

    Model.aggregate([{
        $lookup: {
            from: 'translations',
            localField: '_id',
            foreignField: 'item_id',
            as: 'items'
        },
    }, {
        $project: {
            "items": {
                "$filter": {
                    "input": "$items",
                    "as": "page",
                    "cond": {
                        "$eq": ["$$page.lang_key", lang],
                    }
                }
            }
        }
    }], function(err, data) {
        callback(err, data)
    })
}


Page.prototype.getPageId = function(id, callback) {

    Translation.getByParams({ "item_id": id, table_name: this.collection }, function(err, data) {
        callback(err, data);
    })
}

Page.prototype.getPageIdByFE = function(lang, id, callback){
        
    var self = this;

    Model.aggregate([{
        $lookup: {
            from: 'translations',
            localField: '_id',
            foreignField: 'item_id',
            as: 'translation'
        },
    }, 
    {
        $match: {
            "_id" : self.getId(id)
        }
    },
    {
        $project: {
            "translation": {
                "$arrayElemAt": [
                    {
                        "$filter": {
                            "input": "$translation",
                            "as": "page",
                            "cond": { "$eq": ["$$page.lang_key", lang] }
                        }
                    },
                    0
                ]
            }
        }
    }], function(err, data) {
        callback(err, data)
    })
}

Page.prototype.getItemById = function(_id, callback){
    Translation.getByParams({ "item_id": _id}, function(err, data) {
        callback(err, data);
    })
}

Page.prototype.createOrUpdatePage = function(variables, cb) {

    var _id = this.getId(),
        argument = Translation.generateVariables(variables, this.schema),
        self = this;


    if (variables._id) {
        _id = variables._id
        delete variables._id;
    }
    async.waterfall([
        function(callback) {
            Model.findOneAndUpdate({
                    _id: _id
                },
                argument, {
                    upsert: true,
                    new: true
                },
                function(err, data) {
                    callback(err, data)
                })
        },
        function(page, callback) {

            Translation.updateTranslations(variables, self.collection, page._id, function(err, data) {
                callback(err, data);
            })

        }
    ], function(err, result) {

        cb(err, result);

    });
}

Page.prototype.createOrUpdatePageEntity = function(variables, cb) {

    var _id = this.getId(),
        argument = Translation.generateVariables(variables, this.schemaItem),
        self = this;

    if (variables._id != 'null' && variables._id) {
        _id = variables._id

    }

    try {
        delete variables._id;
    } catch (e) {}

    async.waterfall([
        function(callback) {
            ModelPageItem.findOneAndUpdate({
                    _id: _id
                },
                argument, {
                    upsert: true,
                    new: true
                },
                function(err, data) {
                    callback(err, data)
                })
        },
        function(page, callback) {

            Translation.updateTranslations(variables, self.collectionItem, page._id, function(err, data) {
                callback(err, data);
            })

        }
    ], function(err, result) {

        cb(err, result);

    });
}

Page.prototype.filterLang = function(obj, lang){
    for(var i = 0; i < obj.length; i++){
        if(obj[i].lang_key == lang){
            return obj[i];
            break;
        }
    }
}

Page.prototype.getPageItems = function(lang, _id, callback) {

    var dataArray = [];
    var id = this.getId(_id);

    ModelPageItem.aggregate([
    {
        $lookup: {
            from: 'translations',
            localField: '_id',
            foreignField: 'item_id',
            as: 'items'
        },
    },
    {
    	$match: {
    		"page_id": id
    	}
    },
    {
        $project: {
        	"page_id": "$page_id",
            "items": {
                "$arrayElemAt": [
                    {
                        "$filter": {
                            "input": "$items",
                            "as": "page",
                            "cond": { "$eq": ["$$page.lang_key", lang] }
                        }
                    },
                    0
                ]
            }
        }
    }], function(err, data) {
        callback(err, data)
    })
}

Page.prototype.getId = function(id) {
    return (id) ? mongoose.Types.ObjectId(id) : mongoose.Types.ObjectId();
}

Page.prototype.delete = function(_id, cb) {

    async.waterfall([
        function(callback) {
            Model.findOneAndRemove({ _id: _id }, function(err, data) {
                callback(err, data);
            })
        },
        function(page, callback) {
            ModelPageItem.findOneAndRemove({ page_id: page._id }, function(err, data) {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, data, page);
                    }
                })

        },
        function(pageItem, page, callback) { 
            Translation.deleteItemsByMultiply([pageItem._id, page._id], function(err, data) {
                callback(err, page);
            })
        }
    ], function(err, result) {

        cb(err, result);

    });


}

Page.prototype.deleteItem = function(_id, cb) {

    async.waterfall([
        function(callback) {
            ModelPageItem.findOneAndRemove({ _id: _id }, function(err, data) {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, data);
                }
            })
        },
        function(page, callback) {

            Translation.deleteItems(page._id, function(err, data) {
                callback(err, page);
            })

        }
    ], function(err, result) {

        cb(err, result);

    });

}

Page.prototype.deleteItemRecurcive = function(page_id, callback) {
    ModelPageItem.remove({ page_id: { $in: page_id } }, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    })
}

module.exports = new Page();
