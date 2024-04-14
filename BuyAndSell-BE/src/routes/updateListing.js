import db from "../database";

export const updateListingRoute = {
    method : 'POST',
    path : '/api/listings/{id}',
    handler : async (request, h) =>{
        const id = request.params.id;
        const { name, description, price,userId } = request.payload;
        console.log("userId of UpdateListing",userId);
        await db.query(`
        UPDATE listings 
        SET name = ?, description = ?, price = ? WHERE id = ? AND user_id = ?`
        , [name, description, price, id, userId]
        );
        const result = await db.query(
            'SELECT * FROM listings WHERE id = ? AND user_id = ?', [id, userId]
            );
        const updatedListing = result.results[0];
        if(result.results.affectedRows === 0){
            return Boom.notFound(`Listing with id ${id} not found`);
        }
        return updatedListing;
    }
}