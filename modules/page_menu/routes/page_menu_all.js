var mainModule = require('../../main/main.js');
var pageModuleMenu = require('../page_menu.js');
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
            pageModuleMenu.getAllpage(req.i18n_lang, function(err, data) {
                if (err) next(err);
                callback(null, data);
            })
        }
    }, function(err, results) {

        var module = urlHelper(results.modules.modules, req.originalUrl);

        res.render('view/tables_view_menu', {
            title: module.title,
            data: results.modules,
            pages: results.pages,
            linksToAdd: 'page_designer/add',
            linkToDelete: 'page_designer/delete',
            linkToEdit: 'page_designer/edit',
            link: String(module.url)
        });
    });

}