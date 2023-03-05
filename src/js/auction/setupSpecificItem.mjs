import { specificListing } from "../api/specific-listing.mjs";
import { API_BASE_URL } from "../constants/constants.mjs";
import { bidListener } from "../form-handlers/bidListener.mjs";
import { toggleLoadingIndicator } from "../loader/loadingIndicator.mjs";
import { renderSpecificItem } from "./renderSpecific.mjs";

/**
 * Sets up a specific listing page by retrieving the item details and rendering them on the screen along with setting up a bid listener.
 * @async
 * @function setupSpecificListing
 * @returns {void} - This function does not return anything
 */
export async function setupSpecificListing() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const API_SPECIFIC_ITEM_URL = `${API_BASE_URL}/auction/listings/${id}?_seller=true&_bids=true`;
  const item = await specificListing(API_SPECIFIC_ITEM_URL);
  const API_BID_URL = `${API_BASE_URL}/auction/listings/${id}/bids`;
  renderSpecificItem(item);
  toggleLoadingIndicator(item);
  bidListener(API_BID_URL);
}
