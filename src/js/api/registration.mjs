import * as check from "../response-handlers/index.mjs";

/**
 * Sends a registration request to the specified URL with the given profile data using the provided HTTP method
 * @async
 * @param {string} url - The URL to send the registration request to
 * @param {object} profile - An object containing the profile data to be sent with the request
 * @param {string} method - the HTTP method to use for the registration request. E.g. "POST", "PUT", "PATCH"
 * @returns {Promise<void>} - A Promise that resolves when the registration request is successful, and rejects when there is an error.
 * @example
 * // Call the registration function with the specified parameters
 * registration(url, profile, method);
 */
export async function registration(url, profile, method) {
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
    check.registrationResponseHandler(response);
  } catch (error) {
    console.log(error);
    throw new Error("There was an error during registration.");
  }
}
