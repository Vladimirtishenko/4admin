var Menu = require('../menu.js');
var mainModule = require('../../main/main.js');
var urlHelper = require('../../../helper/urlHelper.js');
var async = require('async');

module.exports.get = function(req, res, next){
	
	async.parallel({
        modules: function(callback) {
            mainModule.getModules(req.i18n_lang, req.session.user, function(err, data) {
                if (err) next(err);
                callback(null, data);
            })
        },
        menu: function(callback) {
            Menu.getAllMenu(function(err, data) {
                if (err) next(err);
                callback(null, data);
            })
        }
    }, function(err, results) {
   
        var module = urlHelper(results.modules.modules, req.originalUrl);

        res.render('view/tables_view_carousel_category.jade', {
            title: module.title,
            data: results.modules,
            general: results.menu,
            linksToAdd: 'menu/add',
            linksToEdit: 'menu/edit',
            linkToDelete: 'menu/delete',
            link: String(module.url)
        });
    });

}