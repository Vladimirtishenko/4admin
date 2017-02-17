var mongoose = require('../../../lib/mongoose.js');
var schema = new mongoose.Schema({
	category_id: { type: mongoose.Schema.ObjectId },
    src: String
}, { collection: 'images_carousel' });
// Model
module.exports = mongoose.model('images_carousel', schema);