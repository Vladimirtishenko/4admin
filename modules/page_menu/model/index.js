var mongoose = require('../../../lib/mongoose.js');
var schema = new mongoose.Schema({
    link_to: {type: String, default: 'page_designer'}
}, { collection: 'page_menu' });
// Model
module.exports = mongoose.model('page_menu', schema);