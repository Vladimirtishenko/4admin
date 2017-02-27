var Menu = require('../menu.js');

module.exports.delete = function(req, res, next){

	if(!req.query._id){
		res.json({
			status: 0,
			errorMsg: req.i18n_texts.ERROR.ID_IS_NOT_FOUND
		})
	}

	Menu.removeMenu(req.query._id, function(err, data){
		if(err){
			res.json({
				status: 0,
				errorMsg: req.i18n_texts.ERROR.FIELD_IS_NOT_REMOVED
			})
			res.end();
		}

		res.json({
			status: 1
		})

	})

}