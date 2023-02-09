const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const partschema= new Schema ({
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

const Part = mongoose.model('Part', partschema);

module.exports = Part;
