import db  from "../database";
//here we have defined out route, now we need to add it to the server
//to knwo this go to index.js file
export const getAllListingsRoute = {
    method : 'GET',
    path : '/api/listings',
    handler : async (request, h) =>{
        const { results } = await db.query('SELECT * FROM listings');
        return results;
    }
    
}