
const {Part} = require('../models/Part.js');
const mongoose = require('mongoose');


// get all parts
const getParts = async (req, res) => {
    const parts = await Part.find({}).sort({createdAt: -1});

    res.status(200).json(parts);
};


// get a single part
const getPart = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Part'})
    }
    const part = await Part.findById(id)

    if (!part) {
        return res.status(404).json()
    }

    res.status(200).json(part);
};

// create part
const createPart = async(req, res) => {
    const {name, size, quantity, partNumber} = req.body

    let emptyFields = [];

    if(!name) {
        emptyFields.push('name')
    }
    if(!size) {
        emptyFields.push('size')
    }
    if(!quantity) {
        emptyFields.push('quantity')
    }
    if(!partNumber) {
        emptyFields.push('partNumber')
    }

    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    // add doc to the db
    try{
        const part = await Part.create({name, size, quantity, partNumber})
        res.status(200).json(part)
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
};

    // delete a part
    const deletePart = async(req, res) => {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such part'})
        }

        const part = await Part.findOneAndDelete({ _id: id})

        if (!workout) {
            return res.status(400).json({ error: 'No such part'})
        }

        res.status(200).json(part)
    }

    // update a part
    const updatePart = async(req, res) => {
        const { id } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'no such part'})
        }

        const part = await Part.findOneAndUpdate({_id: id}, {
            ...req.body
        })

        if (!part) {
            return res.status(400).json({ error: 'no such part'})
        }
        res.status(200).json(part)
};

module.exports = {
    getParts,
    getPart,
    createPart,
    deletePart,
    updatePart
};


