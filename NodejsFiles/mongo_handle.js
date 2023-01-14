import client from './connection_obj';
import dbase from './connection_obj';
import connectToDatabase from './connection_obj';

// https://inspirnathan.com/posts/103-api-calls-in-nodejs/
// https://medium.com/bb-tutorials-and-thoughts/how-to-make-api-calls-in-react-applications-7758052bf69
// https://stackoverflow.com/questions/67761069/sending-data-to-nodejs-backend-in-reactjs-for-api-call
// https://www.pluralsight.com/guides/create-a-simple-react.js-component-with-backed-node.js-api
// https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/

var Mongo_handle = {
    dbase : dbase,
    client : client,
    connectToDatabase : connectToDatabase,
    
};

export default Mongo_handle
