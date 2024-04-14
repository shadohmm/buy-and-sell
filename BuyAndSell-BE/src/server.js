import Hapi, { Server } from '@hapi/hapi';
import * as admin from 'firebase-admin';
import routes from './routes';
import db  from "./database";
import credentials from '../credentials.json';
// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(credentials),
})

let server;
const start  = async () => {
    server = Hapi.Server({
        port : 8000,
        host : 'localhost',
    });
// we will iterate through the routes array and add each route to the server
    routes.forEach(route => {
        server.route(route);
    });

    // server.route({
    //     method : 'GET',
    //     path : '/hello',
    //     handler : (request, h) => {
    //         // your handler code here
    //         return 'Hello World!';
    //     }
    // });

    //we are connecting to the database here
    
    db.connect((err)=>{
        if(err){
            console.log('Could not connect to the database');
            console.log(err);
            process.exit(1);
        }
        console.log('Connected to the database');
    });
    await server.start();
    console.log('Server running on %s', server.info.uri);
};
process.on('SIGINT',async ()=>{
    console.log('stopping hapi server......');
    await server.stop({setTimeout:10000});
    db.end();
    console.log('hapi server stopped');
    process.exit(0);
});
start().catch(err => {
    console.log(err);
    process.exit(1);
});

server.route({
    method: 'GET',
    path: '/listings',
    handler: (request, h) => {
        // Retrieve all the data from the listings
        const listings = db.getAllListings();
        return listings;
    }
});