import { profileListingsErrorHandler } from "../error-handlers/profileListings-error-handler.mjs";
import { toggleLoadingIndicator } from "../loader/loadingIndicator.mjs";
import { profileInfoResponseHandler } from "../response-handlers/profileInfo-response-handler.mjs";
import * as storage from "../storage/index.mjs";

/**
 * Fetches the user's profile listings from the server using the provided url and access token
 * @async
 * @param {string} url - The URL of the API endpoint to fetch the profile listings from
 * @returns {Promise<Object>} - A Promise that resolves to the JSON response containing the user's profile listings data
 */
export async function profileListings(url) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });
    profileInfoResponseHandler(response);
    return await response.json();
  } catch (error) {
    console.log(error);
    profileListingsErrorHandler(error);
  }
}
