var pageModuleMenu = require('../page_menu.js');
var mainModule = require('../../main/main.js');
var urlHelper = require('../../../helper/urlHelper.js');
var async = require('async');

module.exports.get = function (req,res,next) {
	
	if(!req.params.id){
		next();
		res.end();
		return;
	}

	async.parallel({
        modules: function(callback) {
            mainModule.getModules(req.i18n_lang, req.session.user, function(err, data) {
                if (err) next(err);
                callback(null, data);
            })
        },
        inners: function(callback) {
            pageModuleMenu.getPageItems(req.i18n_lang ,req.params.id, function(err, data) {
                if (err) next(err);
                callback(null, data);
            })
        }
    }, function(err, results) {

        var module = urlHelper(results.modules.modules, req.originalUrl);
        
        res.render('view/page_menu_single_content', {
            title: module.title,
            data: results.modules,
            inners: results.inners,
            _id: req.params.id,
            link: String(module.url)
        });
    });

}

module.exports.post = function (req, res, next) {

    pageModuleMenu.createOrUpdatePageEntity(req.body, function (err, data) {
        if(err){
            res.json({
                status: 500,
                message: err
            })
        } else {

            var dataItemLang = pageModuleMenu.filterLang(data, req.i18n_lang);

            res.json({
                status: 200,
                path: 'Accordeon',
                model: 'Accordeon__model.js',
                data: dataItemLang,
                message: req.i18n_texts.SUCCESS.CONTENT_UPDATE
            })
        }
    })
}