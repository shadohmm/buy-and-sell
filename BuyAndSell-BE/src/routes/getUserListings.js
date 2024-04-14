import { Boom } from '@hapi/boom';
import db from '../database';

export const getUserListingsRoute = {
    method : 'GET',
    path : '/api/users/{userId}/listings',
    handler : async (request, h) =>{

        const token = request.query.userId;
        console.log("tokenn", token);
        const userId = request.params.userId;
        if (token !== userId) {
           throw Boom.unauthorized('Users can only access their own listings!...');
        }
        const  results  = await db.query('SELECT * FROM listings WHERE user_id = ?', [userId]);
        // console.log(results);
        return results.results;
    }
}