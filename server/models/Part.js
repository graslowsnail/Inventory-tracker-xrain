const { Schema, model} require ('mongoose');

const partSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: false
    },
    partNumber: {
        type: String,
        required: true
    }
});

const Part = model('Part',
    partSchema
);

module.exports = Part;
