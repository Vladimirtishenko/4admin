var Menu = require('../menu.js');

module.exports.get = function(req, res, next){

	if(!req.params.id){
		res.json({
			status: 500,
			errorMsg: req.i18n_texts.ERROR.MENU_IS_UNDEFINED
		})
		res.end();
	}


	Menu.getMenuXHRById(req.params.id, function(err, data){
		if(err){
			res.json({
				status: 500,
				errorMsg: req.i18n_texts.ERROR.MENU_IS_UNDEFINED
			})
		} else {
			res.json({
				status: 200,
				data: data
			})
		}
	})

}