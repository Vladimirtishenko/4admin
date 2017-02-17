var mongoose = require('../../../lib/mongoose.js');
var schema = new mongoose.Schema({
    username: {type: String, unique: true },
    password: String,
    role: String
}, { collection: 'user' });
// Model
module.exports = mongoose.model('user', schema);