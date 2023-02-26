import { mediaCarousel } from "../templates/SpecificListingTemp/gallery-carousel.mjs";
import { specificListingDetails } from "../templates/SpecificListingTemp/details.mjs";
import { sellerDetails } from "../templates/SpecificListingTemp/sellerDetails.mjs";
import { bidHistory } from "../templates/SpecificListingTemp/bidders.mjs";
import { formControl } from "../templates/SpecificListingTemp/formControl.mjs";

/**
 * Renders a specific item on the screen along with its details such as title, created, description, endsAt, media, seller, and bids.
 * @param {Object} item - The item to be rendered
 * @param {string} item.title - The title of the item.
 * @param {string} item.created - The date the item was created.
 * @param {string} item.description - The description of the item.
 * @param {string} item.endsAt - The date the item ends.
 * @param {Array} item.media - An array of images for the item.
 * @param {Object} item.seller - An object containing details of the seller.
 * @param {string} item.seller.name - The name of the seller.
 * @param {string} item.seller.avatar - The avatar of the seller.
 * @param {Array} item.bids - An array of bids made on the item.
 * @param {number} item.bids.amount - The amount of the bid.
 * @param {string} item.bids.bidderName - The name of the bidder.
 * @returns {void} This function does not return anything.
 * @example
 * renderSpecificItem(item);
 */
export function renderSpecificItem(item) {
  console.log(item);
  const { title, created, description, endsAt, media, seller, bids } = item;
  media.forEach((images) => {
    mediaCarousel(images);
  });
  const { name, avatar } = seller;
  sellerDetails(name, avatar, endsAt, bids);
  specificListingDetails(title, description);
  formControl(name);
  bids.forEach(({ amount, bidderName }) => {
    bidHistory(amount, bidderName);
  });
}
