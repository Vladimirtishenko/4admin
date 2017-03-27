var Carousel = require('../carousel.js');
var mainModule = require('../../main/main.js');
var async =  require('async');
var urlHelper = require('../../../helper/urlHelper.js');

module.exports.get = function(req, res, next){

	if(!req.params.id){
		next();
	}

	async.parallel({
        modules: function(callback) {
            mainModule.getModules(req.i18n_lang, req.session.user, function(err, data) {
                if (err) next(err);
                callback(null, data);
            })
        },
        carousel: function(callback){
              Carousel.getAllItems(req.params.id, req.i18n_lang, function(err, data){
                    if (err) next(err);
                    callback(null, data);
              })  
        }
    }, function(err, results) {

        var module = urlHelper(results.modules.modules, req.originalUrl);

        res.render('view/tables_view_carousel_category_images', {
        	title: module.title,
        	data: results.modules,
            carousel: results.carousel,
            count: results.carousel.items && results.carousel.items.length || 0,
            translation: results.carousel.translation && results.carousel.translation.value || {},
            _id: req.params.id,
			linkToDelete: 'carousel/item_delete',
			link: String(module.url)
		})

    });

	

}