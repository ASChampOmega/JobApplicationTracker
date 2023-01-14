import client from './connection_obj';
import dbase from './connection_obj';
import connectToDatabase from './connection_obj';

var Mongo_handle = {
    dbase : dbase,
    client : client,
    connectToDatabase : connectToDatabase,
    
};

export default Mongo_handle
