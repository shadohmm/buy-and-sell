// import { fakeListings } from './fake-data';
import db  from '../database';
import Boom from '@hapi/boom';
export const getListingRoute = {
    method : 'GET',
    path : '/api/listings/{id}',
    handler : async(request, h) =>{
        const id = request.params.id;
        // const listing = fakeListings.find(listing => listing.id === id);
        const result = await db.query('SELECT * FROM listings WHERE id = ?', [id]);
        console.log("resultsss",result);
        const listing = result.results[0];
        if(!listing) throw Boom.notFound(`Listing with id ${id} not found`);
        return listing;
    }
}