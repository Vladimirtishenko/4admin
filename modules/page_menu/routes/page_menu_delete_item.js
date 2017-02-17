var pageMenuModule = require('../page_menu.js');

module.exports.delete = function(req,res,next){
	pageMenuModule.deleteItem(req.query._id, function (err, data) {
    	if(err){
    		res.json({status: 0})
    	} else {
    		res.json({
    			status: 1,
    			data: data,
    			path: 'Accordeon',
                model: 'Accordeon__model.js'
    		})
    	}
    })
    
}