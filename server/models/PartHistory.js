const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        requireed: true
    },
    currentStock: {
        type: Number,
        requireed: true
    },
    initialStock: {
        type: Number,
        requireed: true
    },
    usedStockAmmount: {
        type: Number,
        requireed: true
    }
});

module.exports = mongoose.model('PartHistory',schema);
