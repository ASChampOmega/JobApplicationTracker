const fetchOne = async (criteria, collection) => {
    try{
        let result = await collection.findOne(criteria);
        console.log('Searched for: ' + criteria + ' found: ' + result);
        return result;
    }
    catch (err){
        console.err('Found error: ' + err);
        return null;
    }
}

const fetchMany = async (criteria, collection) => {
    try{
        let result = await collection.find(criteria);
        console.log('Searched for: ' + criteria + ' found: ' + result);
        return result;
    }
    catch (err){
        console.err('Found error: ' + err);
        return null;
    }
}

export {fetchOne, fetchMany};