import * as storage from "../storage/index.mjs";

/**
 * Sends a request to create a listing using the specified URL, item, and HTTP method, with authentication provided by an access token.
 * @param {string} url - The URL to send the request to
 * @param {object} item - The data object to include in the request body
 * @param {string} method - The HTTP method to use for the request
 * @throws {error} - If there is an error sending the request
 * @example
 * sendListing(url, item, method);
 */
export async function sendListing(url, item, method) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(item),
    });
    if (response.ok) {
      window.location.reload();
    }
    if (!response.ok) {
      alert("The listing didn't get correctly created, please try again");
    }
  } catch (error) {
    console.log(error);
    alert("The listing didn't get correctly created, please try again");
    throw new Error("There was an error sending the request");
  }
}
