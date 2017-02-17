var Model = require('../users/model/index.js');
var passHash = require('./service/password.js');
var config = require('../../config/index.js');
var mongoose = require('../../lib/mongoose.js');
var async = require('async');

function Login() {}

Login.prototype.authorize = function(req, callback) {
    this.getEntity(req.body.username, req, function(err, user) {
        if (!user || user.length < 1) {
            callback(req.i18n_texts.ERROR.USER_NOT_FOUND, null); 
        } else if (!passHash.validate(user.password, req.body.password)) {
            callback(req.i18n_texts.ERROR.PASS_INCORRECT, null); 
        } else {
            callback(null, user._id, user.role, user.username);
        }
    });
}

Login.prototype.userCreate = function(username, password, callback) {
    this.getEntity(username, req, function(err, data) {
        if (err || Object.keys(data).length > 0) {
            callback('User already created!', null);
        } else {
            Model.update({ _id: mongoose.Types.ObjectId() }, {
                    username: username,
                    password: passHash.hash(password)
                }, { upsert: true },
                function(err, data) {
                    callback(err, data);
                });
        }
    })
}

Login.prototype.getEntity = function(user, req, callback) {
    Model.findOne({ 'username': user }, function(err, data) {
        if (err) {
            callback(req.i18n_texts.ERROR.USER_NOT_FOUND, null)
        } else {
            callback(null, data);
        }
    })
}

Login.prototype.userConsoleCreate = function(req, callback) {

    if (config.get('userCreateKey') != req.query.key) {
        callback(req.i18n_texts.ERROR.KEY_IS_NOT_VALID, null); 
        return;
    }

    this.getEntity(req.query.username, req, function(err, data) {
        if (err || Object.keys(data).length > 0) {
            callback(req.i18n_texts.ERROR.USER_ALREADY_CREATED, null);  
        } else {
            Model.update({ _id: mongoose.Types.ObjectId() }, {
                    username: req.query.username,
                    password: passHash.hash(req.query.password)
                }, { upsert: true },
                function(err, data) {
                    callback(err, data);
                });
        }
    })


}


module.exports = new Login();
