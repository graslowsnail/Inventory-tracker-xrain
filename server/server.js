require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Part = require('./models/Part.js');

// express app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
});

// mongoose and mongo sandbox routes
app.get('/add-part', (req, res) => {
 const part = new Part({
    name: 'test2',
    size: '1-1/2',
    quantity: 67,
    partNumber:'3p1m2dum'
 });
    part.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
})
// routes
/*
app.get('/', (req, res) => {
    const parts = [
        {name: 'test Part',size: '1-1/2', quantity: 67, partNumber:'3p1m2dum'},
    ];
});
*/

//connect to db
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log(' connected to Xraindb 🌎');
            console.log(' listening on port', process.env.PORT + '🗿 ')
        })
    })
    .catch((error) => {
        console.log(error +'🙅🏽‍♂️');
    });

