const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
const uri = require("./atlas_uri");

// console.log(uri);

const client = new MongoClient(uri);
const dbase = "JobApplicationTracker";

const connectToDatabase = async () => {
    try{
        await client.connect();
        console.log('Connected to %s database', dbase);
    }
    catch (err){
        console.error('Error connecting to database: %s', err);
    }
}

const disconnectFromDatabase = async () => {
    await client.close();
}
/*
const main = async () => {
    try{
        await connectToDatabase();
    } catch (err){
        console.error("Failed connecting to database");
    }
    finally{
        await client.close();
    }
}

main();
*/



export {client, dbase, connectToDatabase, disconnectFromDatabase};
