const express = require('express');
const router = express.Router();
const WorkDay = require('../models/WorkDay.js');

const {
    getWorkDays,
    createWorkDay,
    deleteWorkDay
} = require('../controllers/WorkDay.js');

// GET all WorkDays
router.get('/workdays', getWorkDays)

// CREATE workday
router.post('/workdays', createWorkDay)

// DELETE workday
router.delete('/workdays/:id', deleteWorkDay)

module.exports = router;
