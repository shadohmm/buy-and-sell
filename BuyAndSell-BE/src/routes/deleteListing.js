import db from '../database';

export const deleteListingRoute = {
    method : 'DELETE',
    path : '/api/listings/{id}',
    handler : async (request, h) =>{
        const id = request.params.id;
        const userId = request.query.userId;
        const result = await db.query('DELETE FROM listings WHERE id = ? AND user_id=?', [id,userId]);
        if(result.results.affectedRows === 0){
            return Boom.notFound(`Listing with id ${id} not found`);
        }
        return { message : 'Success!'};
    }
}