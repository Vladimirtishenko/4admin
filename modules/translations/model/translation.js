var mongoose = require('../../../lib/mongoose.js');
var schema = new mongoose.Schema({
	item_id: { type: mongoose.Schema.ObjectId},
	table_name: String,
    title: String,
    description: String,
    short: String,
    metad: String,
    metak: String,
    lang_key: String,
}, { collection: 'translations' });
// Model
module.exports = mongoose.model('translations', schema);