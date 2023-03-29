const mongoose = require('mongoose');

const partSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: false
    },
    partNumber: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Part', partSchema);
