import { API_BASE_URL } from "../constants/constants.mjs";
import * as storage from "../storage/index.mjs";
import { profileInfo } from "../api/index.mjs";
import { renderProfileInfo } from "./renderProfileInfo.mjs";

/**
 * Sets up the user's profile information by loading the user's information from storage, fetching their profile information from the API, and rendering their profile information onto the webpage.
 * @async
 * @function setupProfileInfo
 * @returns {Promise<void>} - A Promise that resolves with nothing when the function completes successfully.
 * @throws {Error} - Throws an error if there is an issue with loading the user's information, fetching the profile information from the API, or rendering the profile information onto the webpage.
 */
export async function setupProfileInfo() {
  const user = storage.load("user");
  const { name } = user;
  const API_PROFILE_URL = `${API_BASE_URL}/auction/profiles/${name}?_listings=true`;
  const profile = await profileInfo(API_PROFILE_URL);
  renderProfileInfo(profile);
}
