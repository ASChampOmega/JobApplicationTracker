const insertMultiMongo = async (data, collection) => {
    try{
        let result = await collection.insertMany(data);
        console.log('Insert document : ' + result.insertedId);
    }
    catch (err){
        console.error('Error inserting document: ' + err);
    }
}

export default insertMultiMongo;

