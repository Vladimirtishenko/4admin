var Model = require('./model/index.js');
var mongoose = require('../../lib/mongoose.js');
var passwordHash = require('../login/service/password.js');
var async = require('async');

function Users() {}

Users.prototype.getAllUsers = function(req, callback) {

    var role = req.session.user.role || 0;

    Model.aggregate([{
        $group: { _id: "$role", user: { $push: { username: "$username", _id: "$_id" } } },

    }, {
        $match: {
            $or: [
                { _id: role },
                { _id: "manager" }
            ]
        }
    }], function(err, data) {
        callback(err, data);
    })
}

Users.prototype.createUser = function(req, callback) {

    if (req.body.role == "root" && req.session.role != "root") {
        callback(req.i18n_texts.ERROR.ACCESS_DENY , null);
        return;
    }

    var argument = this.generateDataForPassword(req.body);

    Model.findOneAndUpdate({
            _id: req.body._id || this.getId()
        },      
            argument, 
        {
            projection: {username: 1, _id: 1, role: 1},
            upsert: true,
            new: true
        },
        function(err, data) {
            callback(err, data);
        })


}


Users.prototype.getId = function(id) {
    return (id) ? mongoose.Types.ObjectId(id) : mongoose.Types.ObjectId();
}

Users.prototype.generateDataForPassword = function(arg) {

    for (var mark in arg) {
        if (mark == 'password') {
            arg[mark] = passwordHash.hash(arg[mark]);
        }
    }

    return arg;
}



Users.prototype.updateUser = function(arg, role, cb) {
    if (arg.role == "root" && role != "root") {
        cb('You do not create ROOT user!', null);
        return;
    }

    var argument = this.generateDataForPassword(arg);

    async.waterfall([
        function(callback) {
            Model.findOne({_id: argument._id}, function(err, data){

                if(!passwordHash.validate(data.password, argument.old_password)){
                    callback('Pasword is not contains', null)
                } else {
                    callback(null, data)
                }
            })
        },
        function(user, callback) {
            Model.update({_id: user._id}, {password: argument.password}, function(err, data){
                callback(err, data);
            })
        },
    ], function (err, result) {
        cb(err, result);
    });

}

Users.prototype.remove = function(id, role, callback) {

    Model.findOne({_id: id}, function(err, data){
        if(data.role == 'root' && role != 'root'){
           callback('Manager can not remove this user!', null); 
        } else {
            Model.findOneAndRemove({_id: id}, function(err, data){
                callback(err, data);
            })
        }
    })


}

module.exports = new Users();
