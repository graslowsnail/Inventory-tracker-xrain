const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const schema = mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    partsUsed: [{
        type: ObjectId,
        ref: 'Parts'
    }],
},
    { timestamps: true }
);

module.exports = mongoose.model('WorkDay', schema);

