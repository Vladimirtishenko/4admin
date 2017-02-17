var mainModule = require('../../main/main.js');
var pageModule = require('../page.js');
var urlHelper = require('../../../helper/urlHelper.js');
var async = require('async');

module.exports.get = function(req, res, next) {

	 	async.parallel({
	        modules: function(callback) {
	            mainModule.getModules(req.i18n_lang, req.session.user, function(err, data) {
	                if (err) next(err);
	                callback(null, data);
	            })
	        },
	        pages: function(callback) {
	        	if(req.query._id){
	        		 pageModule.getPageId(req.query._id, function(err, data) {
		                if (err) next(err);
		                callback(null, data);
		            })
	        	} else {
	        		callback(null, {});
	        	}
	        }
	    }, function(err, results) {
	        res.render('view/page_single', {
	            title: 'Page',
	            modules: results.modules,
	            pages: results.pages,
	            linksToAdd: 'page/show',
	            link: String(urlHelper(req.originalUrl))
	        });
	    });

}


module.exports.post = function(req, res, next) {

	if(!req.body) return;

	pageModule.createOrUpdatePage(req.body, function (err, data) {
		if(err) next(err);
		res.json({
			status: 200, 
			message: data,
			module: 'Page'
		})	
	});


}
