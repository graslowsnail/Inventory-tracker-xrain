const express = require('express');
const router = express.Router();
const WorkDay = require('../models/WorkDay.js');
const auth = require('../middleware/auth');

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
router.get('/workdays', auth,getWorkDays)

// GET one by id
router.get('/workday/:id', auth, getWorkDayById);

// GET WorkDay By DATE
router.get('/workdays/:createdAt', auth, getWorkDayByDate)

// CREATE workday
router.post('/workdays', auth, createWorkDay)

// DELETE workday
router.delete('/workdays/:id', auth, deleteWorkDay)

// UPDATE a workDay
//router.put('/workdays/:id', updateWorkDay)

// ADD single part to a workday 
router.put('/workdays/:id', auth, addSinglePartToWorkDay)

module.exports = router;
