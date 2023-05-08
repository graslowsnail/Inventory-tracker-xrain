const express = require('express');
const router = express.Router();
const  PartHistory = require('../models/PartHistory.js');

const {
    getPartsHistory
} = require('../controllers/PartHistory.js');

// GET all parts
router.get('/partsHistory', getPartsHistory)

module.exports = router;
