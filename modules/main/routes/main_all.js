var mainModule = require('../main.js');

module.exports.get = function(req, res, next) {

	mainModule.getModules(req.i18n_lang, req.session.user, function(err, data){	
		if(err) next(err);
		res.render('view/index', {
			data: data,
			link: ''
		 });
	})

}