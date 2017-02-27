var mongoose = require('../../../lib/mongoose.js');
var schema = new mongoose.Schema({
    params: String,
    value: mongoose.Schema.Types.Mixed
}, { collection: 'settings' });
// Model
module.exports = mongoose.model('settings', schema);