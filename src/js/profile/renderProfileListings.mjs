import { profileListingsTemplate } from "../templates/profileTemplates/profileListings.mjs";

/**
 * Renders the profile listings by iterating through the profileItems array and calling the profileListingsTemplate function
 * @param {Array<Object>} profileItems - Array of objects containing the profile listings data
 * @returns {void}
 */
export function renderProfileListings(profileItems) {
  profileItems.forEach(({ title, endsAt, media, id, _count }) => {
    const { bids } = _count;
    profileListingsTemplate(title, endsAt, media, id, bids);
  });
}
