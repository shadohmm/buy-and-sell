import { addViewsToListingsRoute } from "./addViewsToListings";
import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { getUserListingsRoute } from "./getUserListings";
import { createNewListingRoute } from "./createNewListing";
import { updateListingRoute } from "./updateListing";
import { deleteListingRoute } from "./deleteListing";
//here we import all the routes and add them in an array and export them
//now got to server.js file
export default [
    
    addViewsToListingsRoute,
    createNewListingRoute,
    deleteListingRoute,
    getAllListingsRoute,
    getListingRoute,
    getUserListingsRoute,
    updateListingRoute
]