const express = require('express');
const router = express.Router();
const PartHistory = require('../models/PartHistory.js');
const auth = require('../middleware/auth');

const {
    getPartsHistory
} = require('../controllers/PartHistory.js');

// GET all parts
router.get('/partHistory', auth, getPartsHistory)

module.exports = router;
