var mainModule = require('../../main/main.js');
var textModule = require('../text.js');
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
        text: function(callback) {
            textModule.getAllpage(req.i18n_lang, function(err, data) {
                if (err) next(err);
                callback(null, data);
            })
        }
    }, function(err, results) {

        var module = urlHelper(results.modules.modules, req.originalUrl);
        
        res.render('view/tables_view', {
            title: module.title,
            data: results.modules,
            pages: results.text,
            linksToAdd: 'text/show',
            linkToDelete: 'text/delete',
            link: String(module.url)
        });
    });

}
