import { v4 as uuidv4 } from 'uuid';
import db from '../database';

// export const createNewListingRoute = {
//     method : 'POST',
//     path : '/api/listings',
//     handler : async (request, h) => {
//         const { name = '', description = '', price = 0} = request.payload;
//         const id = uuid();
//         const userId = '12345';
//         const views = 0;
//         await db.query(`
//         INSERT INTO listings (id, name, description, price, user_id, views) 
//         VALUES (?, ?, ?, ?, ?, ?)`,
//          [id, name, description, price, userId, views]
//         );
//         console.log("id",id,"name",name,"description",description,"price",price,"userId",userId,"views",views);
//      return {id,name,description,price,user_id:userId,views}
//     }    
// }


function getRandomChars(string, length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += string.charAt(Math.floor(Math.random() * string.length));
    }
    return result;
}

export const createNewListingRoute = {
    method : 'POST',
    path : '/api/listings',
    handler : async (request, h) => {
        try {
            // const userId = request.params.userId;
            const { name = '', description = '', price = 0, userId} = request.payload;
            console.log("userId",userId);
            const uui_id = uuidv4();
            const id = getRandomChars(uui_id, 5);
            const views = 0;
            await db.query(`
            INSERT INTO listings (id, name, description, price, user_id, views) 
            VALUES (?, ?, ?, ?, ?, ?)`,
             [id, name, description, price, userId, views]
            );
            return {id,name,description,price,user_id:userId,views}
        } catch (err) {
            console.error(err);
            throw err;
        }
    }    
}
