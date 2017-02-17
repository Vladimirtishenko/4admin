var Model = require('./model/index.js');
var mongoose = require('../../lib/mongoose.js');
var Translation = require('../translations/translation.js');
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

Text.prototype.getPageId = function(id, callback){

	 Translation.getById(id, function (err, data) {
        callback(err, data);
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

Text.prototype.getId = function () {
	 return mongoose.Types.ObjectId();
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