var User = require('../user.js');

module.exports.post = function(req, res, next){

	if(!req.body._id){
		res.json({
			status: 500,
			err: req.i18n_texts.ERROR.USER_NOT_FOUND
		})
		res.end();
	}

	User.updateUser(req.body, req.session.role, function(err, data){

		if(err){
			res.json({
				status: 500,
				message: err.errmsg || err
			})
		} else {
			res.json({
				status: 201,
				message: req.i18n_texts.SUCCESS.USER_PASS_UPDATE
			})
		}
	})


}