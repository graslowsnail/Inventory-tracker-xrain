require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// express app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
});

// routes

//connect to db
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log(' connected to db & listening on port', process.env.PORT + '🗿 🌎')
        })
    })
    .catch((error) => {
        console.log(error +'🙅🏽‍♂️');
    });

