var mainModule = require('../../main/main.js');
var textModule = require('../text.js');
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
	        textPage: function(callback) {
	        	if(req.query._id){
	        		 textModule.getPageId(req.query._id, req.i18n_lang, function(err, data) {
		                if (err) next(err);
		                callback(null, data);
		            })
	        	} else {
	        		textModule.getEmptyVariablesByLang(function(err, data) {
		                if (err) next(err);
		                callback(null, data);
		            })
	        	}
	        }
	    }, function(err, results) {

	    	var module = urlHelper(results.modules.modules, req.originalUrl);

	        res.render('view/text_single', {
	            title: module.title,
	            data: results.modules,
	            textPage: results.textPage[0],
	            linksToAdd: 'page/show',
	            link: String(module.url)
	        });
	    });


}

module.exports.post = function(req, res, next) {

	if(!req.body) return;

	textModule.createOrUpdatePage(req.body, function (err, data) {
		if(err) next(err);
		res.json({
			status: 200, 
			message: data,
			module: 'Text'
		})	
	});


}
