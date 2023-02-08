const express = require('express');
const path = require('path');
const mongoConnection = require('./config/connection.js');


const PORT = process.env.PORT || 3002;

const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoConnection();


app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
