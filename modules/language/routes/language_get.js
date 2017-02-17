var Lang = require('../language.js');

module.exports.get = function(req, res, next){
	Lang.getLangDescriptionAndTranslation(req, function(err, data){
		if(err) next();

		res.json(data)

	})
}