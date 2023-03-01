import * as storage from "../storage/index.mjs";
import * as check from "../response-handlers/index.mjs";
import { profileInfoErrorHandler } from "../error-handlers/index.mjs";

/**
 * Retrieves user profile information from a specified URL endpoint.
 * @async
 * @param {string} url - The URL endpoint to fetch profile information from.
 * @returns {Promise<object>} - A Promise that resolves with an object containing user profile information in JSON format.
 * @throws {Error} - Throws an error if there is an issue with the fetch request or the response from the server.
 * @example
 * profileInfo(url);
 */
export async function profileInfo(url) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });
    check.profileInfoResponseHandler(response);
    return await response.json();
  } catch (error) {
    console.log(error);
    profileInfoErrorHandler(error);
  }
}
