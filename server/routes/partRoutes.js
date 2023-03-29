const express = require('express');
const router = express.Router();

const {
    getParts
} = require('../controllers/Part.js');
    /*
    getPart,
    createPart,
    deletePart,
    updatePart
    */


// GET all parts
router.get('/', getParts)

/*

// GET a single Part
router.get('/:id', getPart)

// POST a new part
router.post('/', createPart)

//DELETE a part
router.delete('/:id', deletePart)

//UPDATE a part
router.patch('/:id', updatePart)

    */

module.exports = router;
