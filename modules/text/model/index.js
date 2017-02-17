var mongoose = require('../../../lib/mongoose.js');
var schema = new mongoose.Schema({
}, { collection: 'text' });
// Model
module.exports = mongoose.model('text', schema);