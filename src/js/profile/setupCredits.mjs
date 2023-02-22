import * as storage from "../storage/index.mjs";
import { API_BASE_URL } from "../constants/constants.mjs";
import { getCredits } from "../api/credits.mjs";
import { renderCredits } from "./renderCredits.mjs";

/**
 * Asynchronously sets up the user's credits by retrieving the user's name from storage,
constructing the URL for the user's credits endpoint, and rendering the user's credits to the UI.
 * @returns {promise<void>} - A promise that resolves with no value if the setup process completes successfully
 * @example
 * setupCredits();
 */
export async function setupCredits() {
  const user = storage.load("user");
  const { name } = user;
  const API_CREDITS_URL = `${API_BASE_URL}/auction/profiles/${name}/credits`;
  const credits = await getCredits(API_CREDITS_URL);
  renderCredits(credits);
}
