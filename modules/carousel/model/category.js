var mongoose = require('../../../lib/mongoose.js');
var schema = new mongoose.Schema({
    label: { type: String, index: true, required: true, unique: true },
    items: { type: Array, default: [] }
}, { collection: 'category_carousel' });

schema.statics.aggregateOne = function(array, cb) {
    this.aggregate(array, function(err, data) {
        if (err) return cb(err, null);
        cb(null, data[0]);
    });
}

module.exports = mongoose.model('category_carousel', schema);
