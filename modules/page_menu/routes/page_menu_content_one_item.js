var Page = require('../page_menu.js');
var Translation = require('../../translations/translation.js');

module.exports.get = function(req, res, next) {
	
	if(!req.query._id) next();

	Page.getItemById(req.query._id, function (err, data) {
		if(err){
			res.json({
				status: 500,
				message: err
			})
		} else {

			var argument = Translation.deNormalizeVariables(data);

			res.json({
				status: 200,
				data: argument
			})
		}
	})

}