
const {Part} = require('../models/Part.js');
const mongoose = require('mongoose');


// get all parts
const getParts = async (req, res) => {
    try{
        const parts = await Part.find().exec();
        res.status(200).json(parts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server error!!!'});
    }
};


/* 
get a single part
const getPart = async (req, res) => {
};

// create part
const createPart = async(req, res) => {
};

    // delete a part
const deletePart = async(req, res) => {
};

    // update a part
    const updatePart = async(req, res) => {
};
*/

module.exports = {
    getParts
    /*
    getPart,
    createPart,
    deletePart,
    updatePart
    */
};


