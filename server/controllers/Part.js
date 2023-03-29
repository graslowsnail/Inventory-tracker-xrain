const mongoose = require('mongoose');
const Part = require('../models/Part.js');


// get all parts
const getParts = async (req, res) => {
    const parts = await Part.find();
    res.send(parts);

};

module.exports = {
    getParts
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

    /*
    getPart,
    createPart,
    deletePart,
    updatePart
    */

