var User = require('../user.js');
var mainModule = require('../../main/main.js');
var urlHelper = require('../../../helper/urlHelper.js');
var async = require('async');

module.exports.get = function(req, res, next) {

	async.parallel({
        modules: function(callback) {
            mainModule.getModules(req.i18n_lang, req.session.user, function(err, data) {
                if (err) next(err);
                callback(null, data);
            })
        },
        users: function(callback) {
            User.getAllUsers(req, function(err, data){
				callback(err, data)
			});
        }
    }, function(err, results) {

    	if(err){
			next()
		} else {
            var module = urlHelper(results.modules.modules, req.originalUrl);
			res.render('view/user', {
				title: module.title,
				data: results.modules,
	            users: results.users,
                link: String(module.url)
			});
		}
    });
}
