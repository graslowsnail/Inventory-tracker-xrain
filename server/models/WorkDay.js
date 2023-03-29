const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const workDaySchema = new mongoose.Schema({

    partsUsed: [{
        type: ObjectId,
        ref: 'Parts'
    }]

});

module.exports = mongoose.model('WorkDay', workDaySchema);

