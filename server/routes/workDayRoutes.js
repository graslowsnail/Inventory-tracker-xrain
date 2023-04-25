const express = require('express');
const router = express.Router();
const WorkDay = require('../models/WorkDay.js');

const {
    getWorkDays,
    createWorkDay,
    deleteWorkDay,
    updateWorkDay,
    getWorkDayByDate,
    getWorkDayById,
    addSinglePartToWorkDay
} = require('../controllers/WorkDay.js');

// GET all WorkDays
router.get('/workdays', getWorkDays)

// GET one by id
router.get('/workday/:id', getWorkDayById);

// GET WorkDay By DATE
router.get('/workdays/:createdAt', getWorkDayByDate)

// CREATE workday
router.post('/workdays', createWorkDay)

// DELETE workday
router.delete('/workdays/:id', deleteWorkDay)

// UPDATE a workDay
//router.put('/workdays/:id', updateWorkDay)

// ADD single part to a workday 
router.put('/workdays/:id', addSinglePartToWorkDay)

module.exports = router;
