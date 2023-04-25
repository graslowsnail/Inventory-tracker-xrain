const mongoose = require('mongoose');
const Part = require('../models/Part.js');


// GET all parts
const getParts = async (req, res) => {
    const parts = await Part.find();
    res.send(parts);
};

//GET a single part by id
const getPartById = async (req, res) => {
    try{
        const part = await Part.findOne({ _id:req.params.id})
        res.send(part);
    } catch {
        res.status(404);
        res.send({ error: 'Part doesnt exist!'});
    }
};

// CREATE part
const createPart = async(req, res) => {
    const part = new Part ({
        name: req.body.name,
        size: req.body.size,
        quantity: req.body.quantity,
        barCodeId: req.body.partNumber,
    })
    await part.save()
    res.send(part);
};

// DELETE a part
const deletePart = async(req, res) => {
    try{
        await Part.deleteOne({ _id: req.params.id})
        res.status(204).send()
    }catch{
        res.status(404)
        console.log('ERROR DELETEING PART')
        res.send({ error: 'Part did not exist' })
    }
};

// UPDATE a part
const updatePart = async(req, res) => {
    try {
        const part = await Part.findOne({ _id: req.params.id })

        if (!part) {
            return res.status(404).send({ error: 'Part not found' })
        }

        part.name = req.body.name
        part.size = req.body.size
        part.quantity = req.body.quantity
        part.barCodeId = req.body.partNumber

        await Part.findOneAndUpdate({ _id: req.params.id }, part, { new: true })

        res.send(part)
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
};

module.exports = {
    getParts,
    getPartById,
    createPart,
    deletePart,
    updatePart
};
