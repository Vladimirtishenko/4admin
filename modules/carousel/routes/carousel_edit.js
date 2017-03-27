var Carousel = require('../carousel.js');
var mainModule = require('../../main/main.js');
var async = require('async');
var urlHelper = require('../../../helper/urlHelper.js');


module.exports.get = function(req, res, next) {

    if (!req.params.id) {
        next();
    }

    async.parallel({
            modules: function(callback) {
                mainModule.getModules(req.i18n_lang, req.session.user, function(err, data) {
                    if (err) next(err);
                    callback(null, data);
                })
            },
            carousel: function(callback) {
                Carousel.getByNumber(req.params.id, req.params.number, function(err, data) {
                	if (err) next(err);
                    callback(null, data);
                })
            }
        },
        function(err, results) {

            var module = urlHelper(results.modules.modules, req.originalUrl);

            res.render('view/tables_view_carousel_this_one', {
                title: module.title,
                data: results.modules,
				carousel: results.carousel,
				number: req.params.number,
                link: String(module.url)
            })

        });

}

module.exports.post = function(req, res, next) {

	if(!req.params.id) {
        res.json({
            status: 500,
            message: req.i18n_texts.ERROR.CATEGORY_IS_NOT_DEFINED
        });
        res.end();
        return;
    }

    
   Carousel.uploadImage(req, res, function(err, data){
        if(err){
            res.json({
                status: 500,
                message: req.i18n_texts.ERROR.CATEGORY_IS_NOT_DEFINED
            });
            res.end();
        }
        res.json({
            status: 202,
            message: req.i18n_texts.SUCCESS.UPDATE_SUCCESS
        });

   })

}
