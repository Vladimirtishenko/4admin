var mongoose = require('../../../lib/mongoose.js');
var schema = new mongoose.Schema({
    module: String,
    link: String,
    status: {type: Boolean, default: true}
}, { collection: 'module' });
// Model
module.exports = mongoose.model('module', schema);