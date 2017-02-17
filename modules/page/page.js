var Model = require('./model/index.js');
var mongoose = require('../../lib/mongoose.js');
var Translation = require('../translations/translation.js');
var async = require('async');

function Page() {
    this.schema = Model.schema.obj;
    this.collection = Model.collection.name;
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
                        "$eq": ["$$page.table_name", this.collection]
                    }
                }
            }
        }
    }], function(err, data) {
        callback(err, data)
    })
}


Page.prototype.getPageId = function(id, callback) {

    Translation.getById(id, function (err, data) {
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

Page.prototype.getId = function() {
    return mongoose.Types.ObjectId();
}

Page.prototype.delete = function(_id, callback) {

    async.waterfall([
        function(cb) {
            Model.findOneAndRemove({ _id: _id }, function (err, doc) {
                cb(null, doc);
            })
        },
        function(data, cb) {
            Translation.deleteItems(data._id, function (err, multiply) {
                cb(null, multiply);
            })
        }
    ], function (err, result) {
        callback(err, result);
    });


}

module.exports = new Page();
