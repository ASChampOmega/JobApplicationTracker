const request = require("request-promise");

const fetchFindOne = async () => {
    var options = {
        uri: 'http://localhost:8080/fetchOne',
        method : 'GET',
        json : true
    }

    try{
        var result = await request(options);
        console.log(result);
        return result;
    }
    catch (err){
        console.error(err);
    }
}

const fetchFindMany = async () => {
    var options = {
        uri: 'http://localhost:8080/fetchMany',
        method : 'GET',
        json : true
    }

    try{
        var result = await request(options);
        console.log(result);
        return result;
    }
    catch (err){
        console.error(err);
    }
}

const fetchInsertOne = async () => {
    var options = {
        uri: 'http://localhost:8080/insertOne',
        method : 'GET',
        json : true
    }

    try{
        var result = await request(options);
        console.log(result);
        return result;
    }
    catch (err){
        console.error(err);
    }
}

const fetchInsertMany = async () => {
    var options = {
        uri: 'http://localhost:8080/insertMany',
        method : 'GET',
        json : true
    }

    try{
        var result = await request(options);
        console.log(result);
        return result;
    }
    catch (err){
        console.error(err);
    }
}

const fetchDeleteOne = async () => {
    var options = {
        uri: 'http://localhost:8080/deleteOne',
        method : 'GET',
        json : true
    }

    try{
        var result = await request(options);
        console.log(result);
        return result;
    }
    catch (err){
        console.error(err);
    }
}

const fetchDeleteMany = async () => {
    var options = {
        uri: 'http://localhost:8080/deleteMany',
        method : 'GET',
        json : true
    }

    try{
        var result = await request(options);
        console.log(result);
        return result;
    }
    catch (err){
        console.error(err);
    }
}

export {fetchFindOne, fetchFindMany, fetchDeleteMany, fetchDeleteOne, fetchInsertOne, fetchInsertMany};