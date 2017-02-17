var textModule = require('../text.js');
var async = require('async');

module.exports.delete = function(req, res, next) {

    textModule.delete(req.query._id, function (err, data) {
    	if(err){
    		res.json({status: 0})
    	} else {
    		res.json({status: data.result.ok})
    	}
    })
}
