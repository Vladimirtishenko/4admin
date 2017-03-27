var Carousel = require('../carousel.js');

module.exports.delete = function(req, res, next){

	Carousel.removeItem(req.query, function(err, data){
		if(err){
    		res.json({status: 0})
    	} else {
    		res.json({status: 1})
    	}
	})

}