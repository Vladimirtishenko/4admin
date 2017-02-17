var User = require('../user.js');

module.exports.delete = function (req,res,next) {

	if(!req.query._id || req.query._id == req.session.user){
		res.json({
			status: 0
		})
	}


	User.remove(req.query._id, req.session.role, function(err, data){
		if(err){
			res.json({
				status: 0
			})
		} else {
			res.json({
				status: 1,
    			data: data,
    			path: 'User',
                model: 'User__model.js'
			})
		}
	})
	
}