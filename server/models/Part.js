const mongoose = require('mongoose');

const schema = mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    boxQuantity: {
        type: Number,
        required: true
    },
    currentStock: {
        type: Number,
        required: false
    },
    initialStock: {
        type: Number,
        required: false
    },
    barCodeId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Part', schema);
