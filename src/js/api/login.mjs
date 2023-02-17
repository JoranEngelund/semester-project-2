import * as storage from "../storage/index.mjs";
import * as check from "../response-handlers/login-response-handler.mjs";

/**
 * // Async fetch function that sends a HTTP POST request to the API server,
 *  with an object of the properties of a user that wants to log in.
 * @param {string} url // API url endpoint to send the POST request to
 * @param {object} user // object of the user values that needs to be logged in
 * @param {string} method  // HTTP method request
 * @example
 * ```
 * // Call the function and pass in the arguments required
 * login(url, profile, POST)
 * ```
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
