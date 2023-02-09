const { Schema, model } = require ('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minLength: 5
        }
    })

// ser up pre-save middlewear to create password
userSchema.pre('save', async function
    (next) {
        if (this.isNew || this.isModified
            ('password')) {
            const saltRounds = 10;
            this.password = await bcrypt.hash
            (this.password, saltRounds);
        }

        next();
    });

// compare the incom ing passowrd with the hased password
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User',
    userSchema
);

module.exports = User;
