const express = require('express');
const router = express.Router();
const Part = require('../models/Part.js');

const {
    getParts
} = require('../controllers/Part.js');

// GET all parts
router.get('/parts', getParts)

module.exports = router;
