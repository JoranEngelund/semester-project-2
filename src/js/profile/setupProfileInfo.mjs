import { API_BASE_URL } from "../constants/constants.mjs";
import * as storage from "../storage/index.mjs";
import { profileInfo } from "../api/index.mjs";
import { renderProfileInfo } from "./renderProfileInfo.mjs";
import { editAvatarListener } from "../form-handlers/editAvatar.mjs";

/**
 * Sets up the user's profile information by loading the user's information from storage, fetching their profile information from the API, and rendering their profile information onto the webpage. Aswell calls the editAvatarListener function and passes in the name variable retrieved from localStorage as an argument to the function.
 * @async
 * @function setupProfileInfo
 * @returns {Promise<void>} - A Promise that resolves with nothing when the function completes successfully.
 * @throws {Error} - Throws an error if there is an issue with loading the user's information, fetching the profile information from the API, or rendering the profile information onto the webpage.
 * @description
 * - This function assumes that there is a storage object defined in the current scope, and that there are profileInfo, renderProfileInfo, and editAvatarListener functions defined elsewhere in the codebase. Additionally, it assumes that there is an API_BASE_URL constant defined elsewhere in the codebase that represents the base URL for the API.
 */
export async function setupProfileInfo() {
  const user = storage.load("user");
  const { name } = user;
  const API_PROFILE_URL = `${API_BASE_URL}/auction/profiles/${name}?_listings=true`;
  const profile = await profileInfo(API_PROFILE_URL);
  renderProfileInfo(profile);
  editAvatarListener(name);
}
