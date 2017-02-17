var mainModule = require('../../main/main.js');
var carouselModule = require('../carousel.js');
var urlHelper = require('../../../helper/urlHelper.js');
var async = require('async');
var multer  = require('multer');
var fs  = require('fs');

module.exports.get = function (req,res,next) {
	
	async.parallel({
        modules: function(callback) {
            mainModule.getModules(req.i18n_lang, req.session.user, function(err, data) {
                if (err) next(err);
                callback(null, data);
            })
        },
        entity: function(callback) {
            carouselModule.getAllImagesFromCategory(req.params.id, req.i18n_lang, function (err, data) {
                if (err) next(err);
                callback(null, data);
            })
        }
    }, function(err, results) {
        var module = urlHelper(results.modules.modules, req.originalUrl);
        res.render('view/tables_view_carousel_category_images', {
            title: module.title,
            data: results.modules,
            entity: results.entity,
            category_id: req.params.id,
            linkToDelete: 'carousel/item_delete',
            link: String(module.url)
        });
    });

}

module.exports.post = function (req, res, next) {

    if(!req.params.id) {
        res.json({
            status: 500,
            message: req.i18n_texts.ERROR.CATEGORY_IS_NOT_DEFINED
        });
        res.end();
        return;
    }

    var storage = multer.diskStorage({
        destination: function(req, file, callback) {
            callback(null, __approot + '/public/uploads/carousel/');
        },
        filename: function(req, file, callback) {
            var filename = Date.now() + '-' + file.originalname;
            callback(null, filename);
        }
    });
    var upload = multer({
        storage: storage
    }).single('image');


    upload(req, res, function (err) {
        if(err){
            res.json({
                status: 500,
                message: err
            })
        }
        let filepath = '/uploads/carousel/' + req.file.filename;

        async.waterfall([
            function(callback) {
                carouselModule.uploadOnlyImages(filepath, req.params.id, req.query._id, function(err, data){
                   callback(err, data);
                }) 
            },
            function(data, callback) {
                if(req.query._src){
                    fs.unlink(__approot + '/public' + req.query._src, function(err) {
                         callback(err, data);
                    })
                } else {
                    callback(null, data)
                }
               
            }
        ], function (err, result) {
            if(err){
                res.json({
                    status: 500,
                    message: err
                })
            } else {
                res.json({
                    status: 200,
                    doc: result
                })
            }
        });


        

    })

}