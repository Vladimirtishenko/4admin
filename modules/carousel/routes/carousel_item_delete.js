var ModuleCarouserItem = require('../carousel.js');
var async = require('async');
var fs = require('fs');

module.exports.delete = function (req,res,next) {

	async.waterfall([
        function(callback) {
        	ModuleCarouserItem.deleteEntityFromCategory(req.query._id, function (err, data) {
		    	callback(err, data);
		    })
        },
        function(data, callback) {
        	if(data.src){
        		fs.unlink(__approot + '/public' + data.src, function(err) {
	                 callback(err, data);
	            })
        	} else {
        		callback(req.i18n_texts.ERROR.FIELD_IS_NOT_REMOVED, null) 
        	} 
        }
    ], function (err, result) {
        if(err){
    		res.json({status: 0})
    	} else {
    		res.json({status: 1})
    	}
    });

}
