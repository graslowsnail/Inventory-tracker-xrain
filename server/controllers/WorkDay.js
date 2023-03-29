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

// DELETE workDay
const deleteWorkDay = async(req, res) => {
    try{
        await WorkDay.deleteOne({ _id: req.params.id})
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: 'WorkDay doesnt exist'})
    }
};


module.exports = {
    getWorkDays,
    createWorkDay,
    deleteWorkDay
};
