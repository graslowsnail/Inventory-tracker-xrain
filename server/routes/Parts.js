const express = require('express');
const router = express.Router();

const {
    createPart,
    getParts,
    getPart,
    deletePart,
    updatePart
} = require('../controllers/Parts.js');


// GET all parts
router.get('/', getParts)

// GET a single Part
router.get('/:id', getPart)

// POST a new part
router.post('/', createPart)

//DELETE a part
router.delete('/:id', deletePart)

//UPDATE a part
router.patch('/:id', updatePart)

module.exports = router;
