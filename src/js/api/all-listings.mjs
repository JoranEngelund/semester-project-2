import { listingsErrorHandler } from "../error-handlers/index.mjs";
import * as check from "../response-handlers/index.mjs";

/**
 * Fetches all listings from the specified URL.
 *
 * @async
 * @param {string} url - The URL to fetch the listings from.
 * @returns {Promise<Array>} A promise that resolves to an array of listing objects.
 * @throws {Error} If an error occurs while fetching the listings.
 * @example
 * allListings(url);
 * @description
 * - allListings function is an asynchronous function that takes a url parameter and returns a promise that resolves to an array of listing objects. It also specifies that the function may throw an error if an error occurs while fetching the listings.
 */
export async function allListings(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    check.listingsResponseHandler(response);
    return await response.json();
  } catch (error) {
    console.log(error);
    listingsErrorHandler(error);
    throw new Error("There was an error loading in listings.");
  }
}
