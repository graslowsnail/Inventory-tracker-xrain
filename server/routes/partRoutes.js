const express = require('express');
const router = express.Router();
const Part = require('../models/Part.js');

const {
    getParts,
    getPartById
} = require('../controllers/Part.js');

// GET all parts
router.get('/parts', getParts)

// GET part by Id
router.get('/parts/:id', getPartById)

module.exports = router;
