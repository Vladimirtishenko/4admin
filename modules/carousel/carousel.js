var ModelCategory = require('./model/category.js');
var ModelCarousel = require('./model/carousel.js');
var mongoose = require('../../lib/mongoose.js');
var Translation = require('../translations/translation.js');
var async = require('async');

function Carousel (){
	this.collection = ModelCarousel.collection.name;
}

Carousel.prototype.getAllCategory = function(callback){
	ModelCategory.find({}, function(err, data) {
		callback(err, data);
	})
}

Carousel.prototype.getAllImagesFromCategory = function(id, lang, callback){

	ModelCarousel.aggregate([
    {
        $lookup: {
            from: 'translations',
            localField: '_id',
            foreignField: 'item_id',
            as: 'items'
        }
    },
    {
    	$match: {
        	"category_id": mongoose.Types.ObjectId(id)
    	}
    }], function(err, data) {
        callback(err, data)
    })
}

Carousel.prototype.addCategory = function(req, callback){
	this.testCategoryByName(req.body.name, function(err, data) {
		if(err){
			callback(err, null);
		} else if(data.length > 0){
			callback(req.i18n_texts.ERROR.NAME_ARE_BUSY, null);
		} else {
			ModelCategory.update({_id: mongoose.Types.ObjectId()}, {name: req.body.name}, {upsert:true}, function(err, data){
				if(err){
					callback(err, null);
				} else {
					callback(null, data)
				}
			})
		}
	})
}

Carousel.prototype.testCategoryByName = function(name, callback){
	ModelCategory.find({name: name}, function(err, data) {
		callback(err, data);
	})
}


Carousel.prototype.deleteCategory = function(id, callback){
	ModelCategory.findOneAndRemove({ _id: id }, function (err, doc) {
		callback(err, doc);
	})
}

Carousel.prototype.editTextItem = function (data, callback) {

	var _id = data._id;
	var obj = data;
	delete obj['_id'];

	Translation.updateTranslations(obj, this.collection, _id, function(err, data){
		callback(err, data);
	})
}

Carousel.prototype.deleteEntityFromCategory = function(id, cb){
	
	async.waterfall([
        function(callback) {
        	ModelCarousel.findOneAndRemove({ _id: id }, function (err, doc) {
				callback(err, doc);
			})
        },
        function(item, callback) {
        	Translation.deleteItems(item._id, function(err, data){
        		callback(err, item);
			})
        }
    ], function (err, result) {
        cb(err, result);
    });
}

Carousel.prototype.uploadOnlyImages = function(src, category_id, _id, callback){
	ModelCarousel.findOneAndUpdate(
		{
			"_id": _id || mongoose.Types.ObjectId()
		}, 
		{
			$set: {
				src: src, 
				category_id: category_id
			}
		}, 
		{
			upsert:true, 
			new: true
		}, 
		function (err, data) {
			callback(err, data);
		})
}

module.exports = new Carousel();