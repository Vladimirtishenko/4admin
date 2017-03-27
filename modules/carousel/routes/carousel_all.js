var mainModule = require('../../main/main.js');
var carouselModule = require('../carousel.js');
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
        carouselCategory: function(callback) {
            carouselModule.getAllCategory(function(err, data) {
                if (err) next(err);
                callback(null, data);
            })
        }
    }, function(err, results) {

        var module = urlHelper(results.modules.modules, req.originalUrl);

        res.render('view/tables_view_carousel_category', {
            title: module.title,
            data: results.modules,
            general: results.carouselCategory,
            linksToAdd: 'carousel/add',
            linksToEdit: 'carousel/show',
            linkToDelete: 'carousel/delete',
            link: String(module.url)
        });
    });
}