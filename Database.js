const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
// const URL = "mongodb+srv://lokithegamer2000:UuWycJfTrETS0Ykk@aditya.2arkw.mongodb.net/";
const Client = new MongoClient(url);

async function database(){
    const connect = await Client.connect();
    return connect.db("Food");
}

module.exports = database;