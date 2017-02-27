var mongoose = require('../../../lib/mongoose.js');
var schema = new mongoose.Schema({
    label: {type: String, index: true, required: true, unique : true},
    items: {type: Array, default: []}
}, {strict: true}, { collection: 'menu' });
// Model
module.exports = mongoose.model('menu', schema);