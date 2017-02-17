var mongoose = require('../../../lib/mongoose.js');
var schema = new mongoose.Schema({
    key: {type: String, unique: true},
    description: String
}, { collection: 'lang' });
// Model
module.exports = mongoose.model('lang', schema);