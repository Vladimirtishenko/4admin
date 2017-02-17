var Model = require('./model/lang.js')

function Language() {}

Language.prototype.getLangDescription = function(callback) {

    var description = {};

    Model.find({}, function(err, data) {

        if (!err) {
            for (var i = data.length - 1; i >= 0; i--) {
                description[data[i].key] = data[i].description;
            }

            callback(err, description)
        }

    });
}

Language.prototype.getLangKeys = function(callback) {
    var keys = [];
    Model.find({}, function(err, data) {

        for (var i = data.length - 1; i >= 0; i--) {
            keys.push(data[i].key);
        }

        callback(keys);

    });
}

Language.prototype.setLang = function(key, description) {

}

Language.prototype.getLangDescriptionAndTranslation = function(req, callback) {

    this.getLangDescription(function(err, description) {
        if (err) {
        	callback(err, null) 
        } else {
        	callback(null, {description: description, active_lang: req.i18n_lang, active_text: req.i18n_texts})
        }

    })

}

module.exports = new Language();
