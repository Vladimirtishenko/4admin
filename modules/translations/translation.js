var TranslationModel = require('./model/translation.js');
var Language = require('../language/language.js');
var async = require('async');

function Translation (){
    this.schema = TranslationModel.schema.obj;
    this.lang = ['ru', 'en'];
}

Translation.prototype.generateVariables = function(argument, schema) {

    var objToUpdate = {};

    for (var key in schema) {
        if (argument[key]) {
            objToUpdate[key] = argument[key];
        }
    }

    return objToUpdate;

}

Translation.prototype.deNormalizeVariables = function(argument) {

    var objToUpdate = {},
        idObject = {};
        
    idObject[argument['_id']] = {};

    for (var key in argument) {

        if(typeof argument[key] == 'object' && this.lang.indexOf(key) > -1){

            idObject[argument['_id']][key] = argument[key];

        }

    }

    return idObject;

}

Translation.prototype.generateTranslateVariables = function(argument) {

    var translations = {};

    for (var key in argument) {

        if (key.lastIndexOf('_') != -1) {

            var arr = key.split('_'),
                keys = arr[0],
                lang = arr[1];

            if(lang == "ru" || lang == "en"){
                try {
                translations[lang][keys] = argument[key];
                } catch (e) {
                    translations[lang] = {};
                    translations[lang][keys] = argument[key];
                } 
            }
        }
    }

    return translations;

}


Translation.prototype.structurizeObjectMultilang = function (data) {
    
    var objStructurize = {};

    for (var i = data.length - 1; i >= 0; i--) {
        
        var langKey = data[i].lang_key,
            itemId = data[i].item_id,
            dataObj = data[i];

        objStructurize['_id'] = itemId;
        objStructurize[langKey] = dataObj;
       
    }

    return objStructurize;


}


Translation.prototype.updateTranslations = function (argument, collection, id, callback) {

	var objToInsert = this.generateTranslateVariables(argument);
    	upsertedArray = [];

    async.forEachOf(objToInsert, function(value, key, cb) {

        value['item_id'] = id;
        value['lang_key'] = key;
        value['table_name'] = collection;

        TranslationModel.findOneAndUpdate({
                item_id: id,
                lang_key: key
            },
            value, {
                upsert: true,
                new: true
            },
            function(err, data) {
                if (err) {
                    cb(err);
                } else {
                	upsertedArray.push(data);
                    cb();
                }
            })

    }, function(err) {
    	if(err){
    		callback(err, null)
    	} else {
    		callback(null, upsertedArray)
    	}
    });
}


Translation.prototype.getById = function (id, callback) {
    TranslationModel.find({"item_id": id}, function (err, data) {
        
        if(err) {callback(err, null)}

        var dataStructorize = this.structurizeObjectMultilang(data);

        callback(null, dataStructorize);

    }.bind(this))
}

Translation.prototype.getByParams = function (params, callback) {

    TranslationModel.find(params, function (err, data) {
        
        if(err) {callback(err, null)}

        var dataStructorize = this.structurizeObjectMultilang(data);

        callback(null, dataStructorize);

    }.bind(this))
}

Translation.prototype.deleteItems = function(id, callback){
    TranslationModel.remove({item_id: {$in: id }}, function (err, doc) {
        callback(null, doc);
    })
}

Translation.prototype.deleteItemsByMultiply = function(ids, callback){
    TranslationModel.remove({item_id: {$in: ids }}, function (err, doc) {
        callback(null, doc);
    })
}

Translation.prototype.addTranslationWithValue = function(id, translation, callback){

    async.forEachOf(translation, function(v, k, cb){

        TranslationModel.findOneAndUpdate({
                item_id: id,
                lang_key: k
            },
            { $set: 
                {
                    lang_key: k,
                    item_id: id,
                    table_name: 'menu',
                    value: v
                }
            }, {
                upsert: true,
                new: true
            },
            function(err, data) {
                if (err) {
                    cb(err);
                } else {
                    cb();
                }
            })

    }, function(err){
        callback(err);
    })

}

Translation.prototype.verifyTranslationValue = function(translations, callback){

    var translation = {};

    Language.getLangKeys(function(err, data){
        if(err){
            callback(err, null)
        }

        for (var i = 0; i < data.length; i++) {
            
            if(!translations[data[i]]){
                translation[data[i]] = {};
            } else {
                translation[data[i]] = translations[data[i]].value;
            }

        }
        
        callback(null, translation);

    })


}

module.exports = new Translation();