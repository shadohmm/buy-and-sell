import db from '../database';

export const addViewsToListingsRoute = {
    method : 'POST',
    path  : '/api/listings/{id}/add-view',
    handler : async (request, h) => {
        const id = request.params.id;
        await db.query('UPDATE listings SET views = views + 1 WHERE id = ?', [id]);
        const result = await db.query('SELECT * FROM listings WHERE id = ?', [id]);
        const updatedListing = result.results[0];
        if(result.results.affectedRows === 0){
            return Boom.notFound(`Listing with id ${id} not found`);
        }
        return updatedListing;
    }
}