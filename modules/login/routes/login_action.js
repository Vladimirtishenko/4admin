var LoginModule = require('../login.js');

module.exports.post = function(req, res, next){

	if(!req.body.username || !req.body.password) {
		res.json({
			error: 500,
			message: req.i18n_texts.ERROR.ANY_FIELD_NOT_BE_EMPTY
		})
		return;
	}

	LoginModule.authorize(req, function (err, id, role, username) {
		if(err){
			res.json({
				status: 401,
				message: err
			})
			return;
		} else{
			req.session.user = {_id: id, role: role, username: username}
			res.json({
				status: 302,
				redirect: '/4admin/'
			})
		}
	})

}