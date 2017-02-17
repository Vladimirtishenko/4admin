var carouselModule = require('../carousel.js');
var async = require('async');
var fs = require('fs');

module.exports.delete = function(req, res, next) {

    if (!req.query._id) {
        res.send({});
    }
    async.waterfall([
        function(callback) {
            carouselModule.deleteCategory(req.query._id, function(err, data) {
                callback(err, data);
            })
        },
        function(data, callback) {
            carouselModule.getAllImagesFromCategory(data._id, req.i18n_lang, function(err, data) {
                callback(err, data);
            })
        },
        function(data, callback) {
            async.each(data, function(file, cb) {
                var src = file.src,
                    _id = file._id;

                carouselModule.deleteEntityFromCategory(_id, function(err, data) {
                    if (err) {
                        cb(err);
                    } else {
                        fs.unlink(__approot + '/public' + src, function(err) {
                            if(err){
                            	cb(err);
                            } else {
                            	cb();
                            }
                        })
                    }
                })

            }, function(err) {
                if (err) {
                    callback(req.i18n_texts.ERROR.NOT_DELETED + req.query._id, null)
                } else {
                    callback(null, {})
                }
            });
        }
    ], function(err, result) {
        if (err) {
            res.json({ status: 0, message: err })
        } else {
            res.json({ status: 1 })
        }
    });
}
