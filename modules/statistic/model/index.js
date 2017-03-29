var mongoose = require('../../../lib/mongoose.js');
var schema = new mongoose.Schema({
    username: {type: String, unique: true },
    partner: String,
    label: String
}, { collection: 'lead' });
// Model
module.exports = mongoose.model('lead', schema);