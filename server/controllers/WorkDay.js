const mongoose = require('mongoose');
const WorkDay = require('../models/WorkDay.js');

// GET all WorkDays
const getWorkDays = async (req, res) => {
    const workDays = await WorkDay.find();
    res.send(workDays);
};



// CREATE workday
const createWorkDay = async (req, res) => {
    const workday = new WorkDay ({
        name: req.body.name,
        partsUsed: req.body.partsUsed,
    })
    await workday.save()
    res.send(workday);
};

module.exports = {
    getWorkDays,
    createWorkDay
};
