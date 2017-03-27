var Model = require('./model/index.js');
var mongoose = require('../../lib/mongoose.js');
var Translation = require('../translations/translation.js');
var Language = require('../language/language.js');
var async = require('async');

function Text() {
	this.schema = Model.schema.obj;
    this.collection = Model.collection.name;
}

Text.prototype.getAllpage = function(lang,callback){

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
                    "cond": { "$eq": ["$$page.lang_key", lang] }
                }
            }
        }
    }], function(err, data) {
        callback(err, data)
    })
}

Text.prototype.getAllForFE = function(lang, label, callback){

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
            'label': {$in: label}
        }
    },
    {
        $project: {
            "label": 1,
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
        var obj = self.sort(data);
        callback(err, obj)
    })
}

Text.prototype.sort = function(data){
    var dataObj = {};

    for (var i = 0; i < data.length; i++) {
        dataObj[data[i].label] = data[i].translation
    }

    return dataObj;

}

Text.prototype.getPageId = function(id, lang, callback){

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
            '_id': self.getId(id)
        }
    }], function(err, data) {
        callback(err, data)
    })

}

Text.prototype.createOrUpdatePage = function(variables, callback){
	
	var _id = variables._id || this.getId(),
        argument = Translation.generateVariables(variables, this.schema),
        self = this;

    async.waterfall([
        function(cb) {
            Model.findOneAndUpdate({
                    _id: _id
                },
                argument, {
                    upsert: true,
                    new: true
                },
                function(err, data) {
                    cb(err, data)
                })
        },
        function(page, cb) {

            Translation.updateTranslations(variables, self.collection, page._id, function(err, data) {
                cb(err, data);
            })

        }
    ], function(err, result) {
        callback(err, result);
    });


}

Text.prototype.getEmptyVariablesByLang = function(callback){
    Language.getLangDescription(function(err, data){
        if(err){
            callback(err, null);
            return;
        } 

        var schemaKeys = Object.keys(this.schema),
            dataObj = {
                translation: []
            };

        for (var i = 0; i < schemaKeys.length; i++) {
            dataObj[schemaKeys[i]] = ''
        }

        for (var mark in data) {
            dataObj.translation.push({lang_key: mark})
        }

        callback(null, [dataObj])

    }.bind(this))
}

Text.prototype.getId = function(id) {
    return id ? mongoose.Types.ObjectId(id) : mongoose.Types.ObjectId();
}

Text.prototype.delete = function (_id, callback) {
	Model.remove({_id: _id}, function(err, data){
		if(err) {
			callback(err, null);
		} else {
			callback(null, data);
		}
	})
}

module.exports = new Text();