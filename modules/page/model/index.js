var mongoose = require('../../../lib/mongoose.js');
var schema = new mongoose.Schema({
    link_to: {type: String, default: 'page'}
}, { collection: 'page' });
// Model
module.exports = mongoose.model('page', schema);