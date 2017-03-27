var mainModule = require('../../main/main.js');
var pageModule = require('../page.js');
var urlHelper = require('../../../helper/urlHelper.js');
var Settings = require('../../settings/settings.js');
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
	        		pageModule.getEmptyVariablesByLang(function(err, data) {
		                if (err) next(err);
		                callback(null, data);
		            })
	        	}
	        },
	        settings: function(callback){
	        	Settings.getParams('menu', function(err, data){
	        		if (err) next(err);
		            callback(null, data);
	        	})
	        }
	    }, function(err, results) {
	    	var module = urlHelper(results.modules.modules, req.originalUrl);

	        res.render('view/page_single', {
	            title: module.title,
	            data: results.modules,
	            pages: results.pages,
	            menu: results.settings,
	            linksToAdd: 'page/show',
	            link: String(module.url)
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
