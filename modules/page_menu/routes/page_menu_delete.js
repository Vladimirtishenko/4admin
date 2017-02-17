var pageMenuModule = require('../page_menu.js');
var async = require('async');

module.exports.delete = function(req,res,next){

	pageMenuModule.delete(req.query._id, function(err, data){
		if(err){
    		res.json({status: 0})
    	} else {
    		res.json({status: 1})
    	} 
	}) 
}