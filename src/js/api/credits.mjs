import * as storage from "../storage/index.mjs";

/**
 * Asynchronously sends a GET request to the specified URL with the access token retrieved from storage, to retrieve the credits that is listed on a user.
 * @param {*} url - The URL to send the GET request to
 * @returns {Promise<object>} - A promise that resolves into a JSON object representing the response from the GET request
 * @example
 * getCredits(url);
 *
 */
export async function getCredits(url) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
