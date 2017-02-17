var LoginModule = require('../login.js');

module.exports.get = function(req, res, next){

	if(!req.query.username || !req.query.password || !req.query.key){
		res.send(req.i18n_texts.ERROR.DATA_IF_NOT_FULL); 
		res.end();
		return;
	}


	LoginModule.userConsoleCreate(req, function (err, data) {
		if(err){
			res.send(err)
		} else {
			res.send(req.i18n_texts.SUCCESS.USER_CREATED) 
		}
	})
}