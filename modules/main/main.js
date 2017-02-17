var Model = require('./model/index.js');
var async = require('async');
var langModule = require('../language/language.js');

function Main() {}

Main.prototype.getModules = function(lang, user, cb){

	async.waterfall([
        function(callback) {

        Model.aggregate([{
                $lookup: {
                    from: 'translations',
                    localField: '_id',
                    foreignField: 'item_id',
                    as: 'item_module'
                },
            }, {
                $project: {
                    "link": "$link",
                    "status": "$status",
                    "item_module": {
                        "$filter": {
                            "input": "$item_module",
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
        },
        function(module, callback) {
        	langModule.getLangDescription(function(err, data){
        		callback(err, {modules: module, language_keys: data, user: user})
        	})
        }
    ], function(err, result) {
        cb(err, result);
    });
}

module.exports = new Main();