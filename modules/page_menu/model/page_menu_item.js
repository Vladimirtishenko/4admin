var mongoose = require('../../../lib/mongoose.js');
var schema = new mongoose.Schema({
    page_id: { type: mongoose.Schema.ObjectId}
}, { collection: 'page_menu_item' });
// Model
module.exports = mongoose.model('page_menu_item', schema);