import { profileInfoTemplate } from "../templates/profileTemplates/profile-info.mjs";

/**
 * Renders user profile information onto the webpage using the provided profile object.
 * @function renderProfileInfo
 * @param {object} profile - The user's profile object containing their name, avatar, email, credits, listings, and _count.
 * @param {string} profile.name - The user's name.
 * @param {string} profile.avatar - The URL of the user's avatar image.
 * @param {string} profile.email - The user's email address.
 * @param {number} profile.credits - The number of credits the user has.
 * @param {array} profile.listings - An array of objects containing the user's listed items.
 * @param {object} profile._count - An object containing the total number of items in the user's listings.
 * @param {number} profile._count.listings - The total number of items in the user's listings.
 * @returns {void} - This function does not return anything, but renders the user's profile information onto the webpage.
 */
export function renderProfileInfo(profile) {
  const { name, avatar, email, credits, listings, _count } = profile;
  const { listings: numberOfListings } = _count;
  console.log(numberOfListings);
  listings.forEach(({ endsAt, id, media, title, description }) => {});
  profileInfoTemplate(name, avatar, email, credits);
}
