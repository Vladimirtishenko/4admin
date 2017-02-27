var Menu = require('../menu.js');
var mainModule = require('../../main/main.js');
var urlHelper = require('../../../helper/urlHelper.js');
var async = require('async');

module.exports.get = function(req, res, next){
	
    if(!req.params.id){
        next();
        res.end();
    }

	async.parallel({
        modules: function(callback) {
            mainModule.getModules(req.i18n_lang, req.session.user, function(err, data) {
                if (err) next(err);
                callback(null, data);
            })
        },
        menu: function(callback){
            Menu.getMenuById(req.params.id, function(err, data){
                if (err) next(err);
                callback(null, data);
            }) 
        },
        page: function(callback){
            Menu.findAllPage(req.i18n_lang, function(err, data){
                if (err) next(err);
                callback(null, data);
            })
        }
    }, function(err, results) {
   
        var module = urlHelper(results.modules.modules, req.originalUrl);

        res.render('view/menu.jade', {
            title: module.title,
            data: results.modules,
            menu: results.menu,
            page: results.page,
            link: String(module.url)
        });
    });

}