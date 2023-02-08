const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();        

//const uri = '';

const uri = process.env.MONGO_URL;

async function mongoConnection () {

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    });
    
    await client.connect();
    console.log('Database Connected🗿');
}





module.exports = mongoConnection;
