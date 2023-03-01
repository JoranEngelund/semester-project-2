import * as storage from "../storage/index.mjs";

/**
 * Send a PUT request to the specified URL with the specified request body and method to update the user's avatar image.
 * @async
 * @function editAvatar
 * @param {string} url - The URL of the API endpoint that will handle the avatar update.
 * @param {Object} body - The request body containing the new avatar image data.
 * @param {string} method - The HTTP method to use for the request (e.g. "PUT").
 * @returns {Promise<void>}
 * @description
 * - This function assumes that there is a storage object defined in the codebase that allows access to local storage, and that the API endpoint at the specified URL expects an access token to be included in the request headers to authorize the avatar update. It also assumes that the specified url parameter represents a valid API endpoint for updating the user's avatar.
 */
export async function editAvatar(url, body, method) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      window.location.reload();
    }
    if (!response.ok) {
      alert(
        "Your avatar didn't get updated correctly, make sure the URL is valid and try again"
      );
    }
  } catch (error) {
    alert(
      "Your avatar didn't get updated correctly, make sure the URL is valid and try again"
    );
    console.log(error);
  }
}
