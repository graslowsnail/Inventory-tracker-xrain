const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const Part =  require('../models/Part.js');


const schema = mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    partsUsed: [{
        type: ObjectId,
        ref: 'Part',
        qty: {type: Number, default: 0}
    }],
},
    { timestamps: true }
);

module.exports = mongoose.model('WorkDay', schema);

