const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const fs = require('fs');
import { fetchOne, fetchMany } from './fetch_mongo.js';
import { deleteOne, deleteMany } from './delete_mongo';
import { insertIntoMongo } from './insert_into_mongo';
import { insertMultiMongo } from './insert_multi_mongo';
import { updateOneMongo, updateManyMongo } from './update_mongo';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const client = new MongoClient(uri);
const dbase = "JobApplicationTracker";

var user_collection = client.db(dbase).collection('user_collection');
var job_collection = client.db(dbase).collection('job_collection');
var interview_collection = client.db(dbase).collection('interview_collection');
var to_do_collection = client.db(dbase).collection('to_do_collection');
var offer_collection = client.db(dbase).collection('offer_collection');

const connectToDatabase = async () => {
    try{
        await client.connect();
        console.log('Connected to %s database', dbase);
    }
    catch (err){
        console.error('Error connecting to database: %s', err);
    }
}

connectToDatabase();

const disconnectFromDatabase = async () => {
    await client.close();
}

app.listen(port, () => console.log(`Node Listening on Port ${port}.`));

/*
    Code to deal with requests using app.post
    /login_id is where login details are passed through
    /fetch_job is where job fetch requests are made

    /push_job is where job insertion requests will be made
    /
*/

app.post('/login_id', (request, response) => {
    const userdetails = request.body;
    console.log(userdetails);
    let result = fetchOne({ 
                username : userdetails.username,
                password : userdetails.password
            }, user_collection);
    if(result === null){
        response.send({
            value : 'invalid'
        });
    }
    else{
        result[value] = "valid";
        response.send(result);
    }
});

app.post('/fetch_job', (request, response) => {
    const jobdetails = request.body;
    console.log(`Searching for Job: ${jobdetails}`);
    // We will use this to go from the dashboard to a specific job in the table
    let result = fetchOne({ 
                _id : jobdetails.obj_id
            });
    if(result === null){
        response.send({
            value : 'invalid'
        });
    }
    else{
        result[value] = "valid";
        var interview_arr = [];
        var to_do_list = [];
        if(result.has_to_do){
            for (var i = 0; i < result.to_do_list.length; i++){
                let to_do_result = fetchOne({
                    _id : result.to_do_list[i]
                    }, 
                    to_do_collection);
                
                if(to_do_result == null){
                    console.log('Erroneous _id ' + to_do_result);
                }
                else{
                    to_do_list.push(to_do_result);
                }
            }
            result[to_do_list] = to_do_list;
        }
        if(result.has_interview){
            for (var i = 0; i < result.interview_list.length; i++){
                let interview_result = fetchOne({
                    _id : result.interview_list[i]
                    }, 
                    interview_collection);
                
                if(interview_result == null){
                    console.log('Erroneous _id ' + interview_result);
                }
                else{
                    interview_arr.push(interview_result);
                }
            }
            result[interview_arr] = interview_arr;
        }
        if(result.has_offer){
            result[offer] = fetchOne({
                _id : result.offer_id
            }, offer_collection);
        }
        console.log(`Fetched Job: ${result}.`);
        response.send(result);
    }
});

app.post('/fetch_interview', (request, response) => {
    let result = fetchMany({
        interview_id : request.interview_id
    }, interview_collection);
    console.log(`Found Interview!`);

    return result;
});

app.post('/dashboard_jobs', (request, response) => {
    let result = fetchMany({
        user_id : request.user_id
    }, job_collection);
    console.log(`Found jobs!`);

    return result;

});

app.post('/post_job', (request, response) => {
    const jobdetails = request.body;
    console.log(jobdetails);
    let result = insertIntoMongo(jobdetails, job_collection);
    if(result == null){
        response.send({
            value : 'invalid'
        });
    }
    else{
        response.send({
            result : result,
            value : 'valid'
        });
    }
});

app.post('/post_interview', (request, response) => {
    const interview_details = request.body;
    console.log(interview_details);
    let result = insertIntoMongo(interview_details, interview_collection);

    let update = updateOneMongo({
        _id : interview_details.job_id
    }, {
        $push : { interview_id : result._id }
    }, job_collection);

    if(result == null){
        response.send({
            value : 'invalid'
        });
    }
    else{
        response.send({
            result : result,
            value : 'valid'
        });
    }
});

app.post('/post_offer', (request, response) => {
    const interview_details = request.body;
    console.log(interview_details);
    let result = insertIntoMongo(interview_details, interview_collection);
    
    let update = updateOneMongo({
        _id : interview_details.job_id
    }, {
        $push : { interview_id : result._id }
    }, job_collection);

    if(result == null){
        response.send({
            value : 'invalid'
        });
    }
    else{
        response.send({
            result : result,
            value : 'valid'
        });
    }
});

app.post('/terminate', (request, response) => {
    disconnectFromDatabase();
});





