var User = require('../user.js')

module.exports.post = function(req, res, next){
	
	User.createUser(req, function(err, data){
		if(err){
			res.json({
				status: 500,
				message: err.errmsg || err
			})
		} else {
			res.json({
				status: 200,
				path: 'User',
                model: 'User__model.js',
                data: data
			})
		}
	})

}