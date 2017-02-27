var Menu = require('../menu.js');

module.exports.post = function(req, res, next){

	if(!req.body.label){
		res.json({
			status: 404,
			message: req.i18n_texts.ERROR.FIELD_NOT_BE_EMPTY
		});
		return;
	}

	Menu.addMenu(req, function(err, data){

		if(err){
			res.json({
				status: 500,
				message: err
			})
		} else {
			res.json({
				status: 202,
				message: 'Menu created. <a href="/4admin/menu">View</a>'
			})
		}

	});

}