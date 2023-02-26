import { allListings } from "../api/index.mjs";
import { API_LISTINGS_URL } from "../constants/constants.mjs";
import { listingsLengthChecker } from "../length-checkers/listings-length-checker.mjs";
import { searchListener } from "../search/search.mjs";
import { renderAllListings } from "./render.mjs";

/**
 * Sets up the web page by fetching all listings, rendering them, attaching a search listener, and checking the length of the listings array.
 * @returns {Promise<void>} - A Promise that resolves when the setup is complete.
 * @description
 * - This function sets up the web page by performing several tasks related to rendering the listings and attaching a search listener to the page.
 * - The function first fetches all listings using the allListings function and the API_LISTINGS_URL constant.
 * - It then renders all the listings using the renderAllListings function.
 * - Next, it attaches a search listener to the page using the searchListener function, passing in the listings array as an argument
 * - Finally, it checks the length of the listings array and displays an error message if it is empty.
 * - The function returns a Promise that resolves when the setup is complete. No parameters are required for this function.
 */
export async function setup() {
  const listings = await allListings(API_LISTINGS_URL);
  renderAllListings(listings);
  searchListener(listings);
  listingsLengthChecker(listings);
}
