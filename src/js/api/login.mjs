import * as storage from "../storage/index.mjs";
import * as check from "../response-handlers/index.mjs";

/**
 * Makes a request to log in a user, saves their user and access token in local storage,
 * and calls the loginResponseHandler function to handle the server response.
 * @async
 * @param {string} url - The URL to which the login request is sent.
 * @param {Object} profile - The user's login credentials.
 * @param {string} method - The HTTP method for the request.
 * @throws {Error} If there was an error while fetching or parsing the response.
 * @example
 * login(url, profile, method);
 */
export async function login(url, profile, method) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(profile),
    });
    const json = await response.json();
    console.log(json);
    const { accessToken, ...user } = json;
    storage.save("accessToken", accessToken);
    storage.save("user", user);
    check.loginResponseHandler(response);
  } catch (error) {
    throw new Error(error);
  }
}
