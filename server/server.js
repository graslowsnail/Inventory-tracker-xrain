require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

//routes
const routes = require('./routes/partRoutes.js');

// express app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// to stop deprecation warning in console
mongoose.set('strictQuery', false);

mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }
);
app.use('/api', routes)

// use this to log mongo queries being executed
mongoose.set('debug', true);

//app.use(require('./routes/partRoutes.js'));

app.listen(process.env.PORT, () => {
    console.log(' connected to Xraindb 🌎');
    console.log(' listening on port', process.env.PORT + '🗿 ')
})


