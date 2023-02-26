import * as storage from "../storage/index.mjs";

/**
 * Sends a bid to the specified URL using the specified method and token for authentication.
 * @param {string} url - The URL to send the bid to.
 * @param {object} bid - The bid object to send.
 * @param {string} method - The HTTP method to use for the request.
 * @returns {void}
 * @throws {Error} - If an error occurs during the request.
 * @description
 * - This function sends a bid object to a specified URL using the specified HTTP method and token for authentication. It uses the Fetch API to send an HTTP request with a JSON payload containing the bid object.
 * - The url parameter is the URL to which the bid is being sent. The bid parameter is the bid object to send, and it should be a valid JavaScript object. The method parameter specifies the HTTP method to use, and it should be either "POST" or "PUT".
 * - If the bid is successfully posted, the function reloads the current page. If there is an error posting the bid, the function displays an alert with an appropriate message.
 * - If an error occurs during the request, the function logs the error to the console, displays an alert with an appropriate message, and throws an Error object with a message indicating that an error occurred during the bid request.
 * - The function returns void and does not return any value.
 */
export async function postBid(url, bid, method) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bid),
    });
    if (response.ok) {
      window.location.reload();
    }
    if (!response.ok) {
      alert(
        "There seems to be some troubles with the bidding, Please try again soon!"
      );
    }
  } catch (error) {
    console.log(error);
    alert(
      "There seems to be some troubles with the bidding, Please try again soon!"
    );
  }
}
