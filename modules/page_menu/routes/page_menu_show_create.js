var Page = require('../page_menu.js');
var mainModule = require('../../main/main.js');
var urlHelper = require('../../../helper/urlHelper.js');
var async = require('async');

module.exports.get = function (req,res,next) {
    async.parallel({
        modules: function(callback) {
            mainModule.getModules(req.i18n_lang, req.session.user, function(err, data) {
                if (err) next(err);
                callback(null, data);
            })
        },
        pages: function(callback) {
            if(req.query._id){
        		 Page.getPageId(req.query._id, function(err, data) {
	                if (err) next(err);
	                callback(null, data);
	            })
        	} else {
        		callback(null, {});
        	}
        }
    }, function(err, results) {

        var module = urlHelper(results.modules.modules, req.originalUrl);

        res.render('view/page_menu_single', {
            title: module.title,
            data: results.modules,
            pages: results.pages,
            link: String(module.url)
        });
    });

}

module.exports.post = function (req,res,next) {

	if(!req.body){
		next();
	} else {
		Page.createOrUpdatePage(req.body, function (err, data) {
			if(err){
				res.json({
					status: 500,
					message: err
				})
			} else {
				res.json({
					status: 201,
					message: "Page with menu created successfully! <a href='/4admin/page_designer'>Show Page Menu</a>"
				})
			}
		})
	}

}