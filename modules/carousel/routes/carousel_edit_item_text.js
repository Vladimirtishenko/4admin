var carouselModule = require('../carousel.js');

module.exports.post = function(req,res,next){
	
	if(!req.body._id){
		res.json({
			status: 500,
			message: req.i18n_texts.ERROR.ID_IS_NOT_FOUND
		});
		res.end();
		return;
	} 

	carouselModule.editTextItem(req.body, function (err, data) {
		if(err){
			res.json({
				status: 500,
				message: err
			});
		} else {
			res.json({
				status: 201,
				message: req.i18n_texts.SUCCESS.UPDATE_SUCCESS
			});
		}
		res.end();
	})

}