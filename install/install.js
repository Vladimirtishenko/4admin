var MongoClient = require('mongodb').MongoClient,
    Modules = require('./module.json'),
    Languages = require('./language.json'),
    Config = require('./config.json'),
    salt = require('../modules/login/service/password.js'),
    async = require('async');

function Install(db) {

    var self = this;
    async.waterfall([
        function(callback) {
            self.module(db, function(err, flow) {
                console.log(err, flow, 'modules');
                callback(err, flow);
            });
        },
        function(flow, callback) {
            self.language(db, function(err, flow){
                console.log(err, flow, 'lang');
                callback(err, flow);
            })
        },
        function(flow, callback) {
            self.users(db, function(err, flow){
                console.log(err, flow, 'user');
                callback(err, flow);
            })
        }
    ], function(err, result) {
        console.log(err, result);
        if(err){
            console.log(err);
        } else {
            self.end(db);
        }
    });
}

Install.prototype.module = function(db, controllFlow) {
    if (typeof Modules == 'object' && Object.keys(Modules).length > 0) {
        var collections = db.collection('module'),
            translation = db.collection('translations');

        async.forEachOf(Modules, function(value, key, callback) {
            collections.findOneAndUpdate({ module: key }, {
                module: key,
                link: Modules[key].link,
                status: true
            }, { upsert: true, new: true }, function(err, data) {

                console.log(data);

                if (err) { callback(err); return;   }

                var mainObject = Modules[key];

                async.forEachOf(mainObject, function(val, keys, cb) {
                    if (typeof mainObject[keys] == 'object') {
                        var pushed = mainObject[keys];
                        pushed.lang_key = keys;
                        pushed.item_id = data.value._id;
                        pushed.table_name = 'module';

                        translation.update(
                            { 
                                item_id: pushed.item_id, 
                                lang_key: keys 
                            }, pushed, 
                            { 
                                upsert: true,
                                new: true 
                            }, function(err, data) {
                                if (err) { cb(err); return;}
                                cb();
                        });
                        return;
                    }
                    cb();
                }, function(err) {
                    if (err) { callback(err) }
                    callback();
                })

            })

        }, function(err) {
            if (err) console.error(err.message);
            controllFlow(err, {});
        });
    }
}

Install.prototype.language = function(db, controllFlow) {
    var collections = db.collection('lang');

    async.forEachOf(Languages, function(value, mark, callback) {
        collections.update({ key: mark }, {
            key: mark,
            description: Languages[mark]
        }, { upsert: true }, function(err, data){
            if(err){
                callback(err);
            } else {
                callback();
            }
        });
    }, function(err){
        if (err) console.error(err.message);
        controllFlow(err, {});
    })
        
    

}

Install.prototype.users = function(db, controllFlow) {
    var collections = db.collection('user');
        passwords = salt.hash(Config.password);


    async.waterfall([
        function(callback) {
             collections.findOne(
                {
                    username: Config.username
                }, function(err, data){
                    callback(err, data)
                }
            )
        },
        function(flow, callback) {
            if(!flow){
               collections.update(
                {
                    username: Config.username,
                },
                {
                    username: Config.username, 
                    password: passwords, 
                    role: Config.role
                }, 
                {
                    upsert: true,
                    new: true
                },
                function(err, data){
                    callback(err, data);
                }
                ) 
            } else {
                callback(null, {});
            }
            
        }
    ], function(err, result) {
       controllFlow(err, {});
    });

}

Install.prototype.end = function(db) {
    db.close();
}


MongoClient.connect("mongodb://localhost:27017/4admin", function(err, db) {
    if (err) {
        console.log(err);
    } else {
        new Install(db);
    }
});
