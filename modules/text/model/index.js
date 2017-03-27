var mongoose = require('../../../lib/mongoose.js');
var schema = new mongoose.Schema({
	label: {type: String, index: true, required: true, unique : true},
}, { collection: 'text' });
// Model
module.exports = mongoose.model('text', schema);