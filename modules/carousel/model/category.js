var mongoose = require('../../../lib/mongoose.js');
var schema = new mongoose.Schema({
    label: {type: String, unique : true, required: true}
}, { collection: 'category_carousel' });
// Model
module.exports = mongoose.model('category_carousel', schema);