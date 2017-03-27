var Model = require('./model/category.js');
var mongoose = require('../../lib/mongoose.js');
var Translation = require('../translations/translation.js');
var async = require('async');
var multer = require('multer');
var fs = require('fs');

function Carousel() {
    this.collection = Model.collection.name;
}

Carousel.prototype.getAllCategory = function(callback) {
    Model.find({}, function(err, data) {
        callback(err, data);
    })
}

Carousel.prototype.addCategory = function(req, callback) {
    Model.update({ _id: mongoose.Types.ObjectId() }, { $set: { label: req.body.label } }, { upsert: true, new: true, setDefaultsOnInsert: true },
        function(err, data) {
            if (err) {
                callback(req.i18n_texts.ERROR.NAME_ARE_BUSY, null);
            } else {
                callback(null, data)
            }
        })
}

Carousel.prototype.getAllItems = function(id, lang, callback) {

    var self = this;

    Model.aggregateOne([{
        $lookup: {
            from: 'translations',
            localField: '_id',
            foreignField: 'item_id',
            as: 'translation'
        },
    }, {
        $match: {
            "_id": self.getId(id)
        }
    }, {
        $project: {
            "label": 1,
            "items": 1,
            "translation": {
                "$arrayElemAt": [{
                        "$filter": {
                            "input": "$translation",
                            "as": "page",
                            "cond": { "$eq": ["$$page.lang_key", lang] }
                        }
                    },
                    0
                ]
            }
        }
    }], function(err, data) {
        callback(err, data);
    })

}

Carousel.prototype.getByNumber = function(id, number, callback) {

    Model.aggregateOne([{
        $lookup: {
            from: 'translations',
            localField: '_id',
            foreignField: 'item_id',
            as: 'translation'
        },
    }, {
        $project: {
            "label": 1,
            "item": {
                "$arrayElemAt": ["$items", +number]
            },
            "translation": 1
        }
    }], function(err, data) {
        if (err) {
            callback(null, err);
        }

        var tr = Translation.structurizeObjectMultilang(data.translation || []);

        Translation.verifyTranslationValue(tr, function(err, translation) {
            data.translation = translation;
            data.item = data.item ? data.item : {};
            callback(err, data);
        });

    })

}


Carousel.prototype.uploadImage = function(req, res, callback) {
    var self = this,
        filename = '',
        storage = multer.diskStorage({
            destination: function(req, file, callback) {
                callback(null, __approot + '/public/uploads/carousel/');
            },
            filename: function(req, file, callback) {
                filename = self.getId() + '-' + file.originalname;
                callback(null, filename);
            }
        }),
        upload = multer({
            storage: storage
        }).any();


    upload(req, res, function(err) {
        if (err) {
            callback(err, null)
        }
        var filepath = filename ? '/uploads/carousel/' + filename : '';

        self.updateItems(req, filepath, callback)

    })
}

Carousel.prototype.updateItems = function(req, filepath, callback) {

    var _label = req.body.label ? req.body.label : this.getId(),
        self = this;

    async.parallel({
            carousel: function(cb) {

                Model.findOne({ _id: req.body._id }, function(err, data) {
                    if (err || !data._id) {
                        cb(err);
                    }

                    var dataItems = data.items,
                        updated = dataItems[+req.params.number];

                    if (!updated) {
                        dataItems.unshift({ label: _label, src: filepath })
                    } else {
                        updated.src = filepath ? filepath : updated.src;
                        dataItems.splice(+req.params.number, 1, updated);
                    }

                    data.items = dataItems;

                    data.save(function(err, data) {
                        cb(err, data);
                    })

                })

            },
            translation: function(cb) {

                var tr = Translation.generateTranslateVariables(req.body);

                async.waterfall([
                        function(clb) {
                            Translation.getById(req.body._id, function(err, data) {
                                clb(err, data);
                            })
                        },
                        function(arg, clb) {

                            async.forEachOf(tr, function(value, key, next) {

                                    if (arg[key]) {
                                        arg[key].value[_label] = value;
                                    } else {
                                        arg[key] = {}
                                        arg[key].lang_key = key;
                                        arg[key].item_id = self.getId(req.body._id);
                                        arg[key].table_name = 'Carousel';
                                        arg[key].value = {}
                                        arg[key].value[_label] = value;
                                    }

                                    Translation.updateById(req.body._id, arg[key], function(err, data) {
                                        if (err) {
                                            next(err);
                                        } else {
                                            next();
                                        }
                                    })

                                },
                                function(err) {
                                    if (err) {
                                        clb(err, null)
                                    } else {
                                        clb(null, {})
                                    }
                                })
                        }
                    ],
                    function(err, result) {
                        cb(err, result);
                    })
            }
        },
        function(err, data) {
            callback(err, data);
        })
}

Carousel.prototype.removeItem = function(params, callback) {

    var self = this;

    async.waterfall([
        function(cb) {
            Model.findOne({ _id: params._id }, function(err, data) {
                if (err || !data._id) {
                    callback(err);
                }

                var dataItems = data.items,
                    src = '';

                for (var i = 0; i < dataItems.length; i++) {
                    if (dataItems[i].label == params._label) {
                        src = dataItems[i].src;
                        dataItems.splice(i, 1);
                    }
                }

                data.items = dataItems;

                data.save(function(err, data) {
                    cb(err, src);
                })

            })
        },
        function(arg, cb) {

            fs.unlink(__approot + '/public' + arg, function(err) {
                cb(err, {});
            })

        },
        function(arg, cb) {
            Translation.removeValue(params._id, params._label, function(err, data) {
                cb(err, data);
            })
        }

    ], function(err, data) {
        callback(err, data);
    })
}

Carousel.prototype.delete = function(id, callback) {

    async.waterfall([
        function(cb) {
            Model.findOneAndRemove({ _id: id }, function(err, doc) {

                async.each(doc.items, function(val, next){

                    fs.unlink(__approot + '/public' + val.src, function(err) {
                        if(err){
                            next(err);
                        } else {
                            next();
                        }
                    }) 

                }, function(err){
                    cb(err, doc);
                })

            })
        },
        function(data, cb) {
            Translation.deleteItems(data._id, function(err, multiply) {
                cb(err, {});
            })
        }

    ], function(err, result) {
        callback(err, result);
    });

}

Carousel.prototype.getId = function(id) {
    return id ? mongoose.Types.ObjectId(id) : mongoose.Types.ObjectId();
}

Carousel.prototype.getAllForFE = function(lang, label, callback){
    
    Model.aggregateOne([{
        $lookup: {
            from: 'translations',
            localField: '_id',
            foreignField: 'item_id',
            as: 'translation'
        },
    }, {
        $match: {
            "label": {$in: label}
        }
    }, {
        $project: {
            "label": 1,
            "items": 1,
            "translation": {
                "$arrayElemAt": [{
                        "$filter": {
                            "input": "$translation",
                            "as": "page",
                            "cond": { "$eq": ["$$page.lang_key", lang] }
                        }
                    },
                    0
                ]
            }
        }
    }], function(err, data) {
        callback(err, data);
    })
}

module.exports = new Carousel();
