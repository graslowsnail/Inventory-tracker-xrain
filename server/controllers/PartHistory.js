const mongoose = require('mongoose');
const PartHistory = require('../models/PartHistory.js');

// GET PART HISTORY
const getPartsHistory = async(req, res) => {
    try {
    const partsHistory  = await PartHistory.find();
    res.send(partsHistory);
    } catch(err) {
        console.log('########YERRR');
        console.log( err.message)
        res.status(500).send({ error: err.message })
    }
};

module.exports = {
    getPartsHistory
};
