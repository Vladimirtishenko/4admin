var Model = require('./model/index.js');
var async = require('async');
var mongoose = require('../../lib/mongoose.js');
var Page = require('../page/page.js');
var PageMenu = require('../page_menu/page_menu.js');
var Translation = require('../translations/translation.js');
var Language = require('../language/language.js');

function Menu() {
    this.schema = Model.schema.obj;
    this.collection = Model.collection.name;
}

Menu.prototype.getAllMenu = function(callback) {
    Model.find({}, function(err, data) {
        callback(err, data);
    })
}

Menu.prototype.addMenu = function(req, callback) {
    Model.update({ label: req.body.label }, req.body, { upsert: true, new: true, setDefaultsOnInsert: true }, function(err, data) {
        
        console.log(req.body);
        console.log(err);
        callback(err, data);
    })
}

Menu.prototype.editMenuAndTranslation = function(req, callback){

    var self = this;

    async.parallel({
        menu: function(cb) {
            Model.update({ label: req.body.menu.label }, {$set: req.body.menu}, { upsert: true, new: true, setDefaultsOnInsert: true }, function(err, data) {
                cb(err, data);
            })
        },
        translations: function(cb) {
           Translation.addTranslationWithValue(req.body.menu._id, req.body.translate, function(err){
                cb(err, {})
           })
        }
    }, function(err, results) {

        if (err) {
            callback(err, null);
            return;
        }

        callback(err, results)

    });

}

Menu.prototype.getMenuById = function(id, callback) {
    Model.findOne({ _id: id }, function(err, data) {
        callback(err, data);
    })
}

Menu.prototype.getMenuXHRById = function(id, callback) {

    async.parallel({
        menu: function(callback) {
            Model.findOne({ _id: id }, function(err, data) {
                if (err) {
                    callback(err, null);
                }
                callback(null, data);
            })
        },
        translations: function(callback) {
            Translation.getById(id, function(err, data) {
                if (err) {
                    callback(err, null);
                }
                callback(null, data);
            })
        }
    }, function(err, results) {

        if (err) {
            callback(err, null);
            return;
        }

        Translation.verifyTranslationValue(results.translations, function(err, data) {
            callback(err, { menu: results.menu, translate: data });
        });

    });
}

Menu.prototype.getId = function(id) {
    return id ? mongoose.Types.ObjectId(id) : mongoose.Types.ObjectId();
}

Menu.prototype.removeMenu = function(id, callback) {
    
    async.parallel({
        menu: function(callback) {
           Model.remove({_id: id}, function(err, data){
                if (err) {
                    callback(err, null);
                }
                callback(null, data);
           })
        },
        translation: function(callback) {
            Translation.deleteItems(id, function(err, data){
                if (err) {
                    callback(err, null);
                }
                callback(null, data);
            })
        }
    }, function(err, results) {

        if (err) {
            callback(err, null);
            return;
        }
        callback(null, {});

    });

}

Menu.prototype.removeItems = function() {

}


Menu.prototype.findAllPage = function(lang, callback) {

    async.parallel({
        page: function(callback) {
            Page.getAllpage(lang, function(err, data) {
                if (err) {
                    callback(err, null);
                }
                callback(null, data);
            })
        },
        page_menu: function(callback) {
            PageMenu.getAllpage(lang, function(err, data) {
                if (err) {
                    callback(err, null);
                }
                callback(null, data);
            })
        }
    }, function(err, results) {

        if (err) {
            callback(err, null);
            return;
        }

        var concatArray = results.page.concat(results.page_menu);
        callback(null, concatArray);

    });
}

module.exports = new Menu();
