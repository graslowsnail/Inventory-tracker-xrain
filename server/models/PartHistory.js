const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        requireed: true
    },
    currentStock: {
        type: Number,
        required: true
    },
    initialStock: {
        type: Number,
        required: true
    },
    usedStockAmmount: {
        type: Number,
        required: true
    },
    isUsed: {
        type: Boolean,
        required: true   
    }
});

module.exports = mongoose.model('PartHistory',schema);
