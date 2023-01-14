const updateOneMongo = async (criteria, push, collection) => {
    try{
        let result = await collection.updateOne(criteria, push);
        console.log('Updated document : ' + result.updatedId);
        return result;
    }
    catch (err){
        console.error('Error updating document: ' + err);
        return null;
    }
}

const updateManyMongo = async (criteria, push, collection) => {
    try{
        let result = await collection.updateMany(criteria, push);
        console.log('Updated document : ' + result.updatedId);
        return result;
    }
    catch (err){
        console.error('Error updating document: ' + err);
        return null;
    }
}

export {updateOneMongo, updateManyMongo};

