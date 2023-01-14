const deleteOne = async (criteria, collection) => {
    try{
        let result = await collection.deleteOne(criteria);
        console.log('Searched for: ' + criteria + ' found: ' + result);
    }
    catch (err){
        console.err('Found error: ' + err);
    }
}

const deleteMany = async (criteria, collection) => {
    try{
        let result = await collection.deleteMany(criteria);
        console.log('Searched for: ' + criteria + ' found: ' + result);
    }
    catch (err){
        console.err('Found error: ' + err);
    }
}

export {deleteOne, deleteMany};