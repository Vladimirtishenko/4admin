var Menu = require('../menu.js');

module.exports.post = function (req, res, next) {

	if(!req.body.menu || !req.body.translate){

		res.json({
			status: 500,
			errorMsg: req.i18n_texts.ERROR.ANY_FIELD_NOT_BE_EMPTY
		});
	
	}

	Menu.editMenuAndTranslation(req, function(err, data){
		if(err){
			res.json({
				status: 500,
				errorMsg: req.i18n_texts.ERROR.MENU_FAULT
			})
			res.end();
		}

		res.json({
			status: 200,
		})

	})


}