import { specificListingErrorHandler } from "../error-handlers/index.mjs";
import * as check from "../response-handlers/index.mjs";
import * as storage from "../storage/index.mjs";

/**
 * Retrieves the listing data for a specific URL using the specified token for authentication.
 * @param {string} url - The URL of the listing to retrieve.
 * @returns {Promise<object>} - A Promise that resolves with the listing data as a JavaScript object.
 * @throws {Error} - If an error occurs during the request.
 * @description
 * - This function retrieves the listing data for a specific URL using the Fetch API. It uses the GET method to send an HTTP request to the specified URL with the specified token for authentication.
 * - The url parameter is the URL of the listing to retrieve.
 * - The function returns a Promise that resolves with the listing data as a JavaScript object. The object will contain information about the listing such as its title, description, and images.
 * - If an error occurs during the request, the function logs the error to the console and throws an Error object with a message indicating that an error occurred while retrieving the specific listing.
 */
export async function specificListing(url) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });
    check.specificListingsResponseHandler(response);
    return await response.json();
  } catch (error) {
    console.log(error);
    specificListingErrorHandler(error);
  }
}
