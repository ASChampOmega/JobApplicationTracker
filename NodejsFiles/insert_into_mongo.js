const insertIntoMongo = async (data, collection) => {
    try{
        let result = await collection.insertOne(data);
        console.log('Insert document : ' + result.insertedId);
        return result;
    }
    catch (err){
        console.error('Error inserting document: ' + err);
        return null;
    }
}

export default insertIntoMongo;

