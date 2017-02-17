var mongoose = require('../../../lib/mongoose.js');
var schema = new mongoose.Schema({
    name: String
}, { collection: 'category_carousel' });
// Model
module.exports = mongoose.model('category_carousel', schema);