import { listingsTemplate } from "../templates/index.mjs";

/**
 * Renders a list of listings to the app using the provided data
 * @function renderAllListings
 * @param {Array} listings - An array of listing objects to be rendered
 * @returns {void}
 * @example
 * renderAllListings(listings);
 * 
 * @description - The renderAllListings function renders a list of listings to the page using the provided data. The function takes an array of listings as a parameter and does not return a value.
- The listings parameter is an array of objects that represent the listings to be rendered. Each object in the array should contain the following properties: title, created, endsAt, id, media, description, and _count.
- The function iterates through the array of listings and extracts the necessary data from each object using object destructuring. It then calls the listingsTemplate function with the extracted data to render the listing to the page.
- The listingsTemplate function is not defined in the provided code, but is a separate function that is responsible for generating the HTML markup to display the listing data on the page.
- This function assumes that the listingsTemplate function is defined and that it accepts the title, created, endsAt, id, media, description, and bids properties as parameters.
 */
export function renderAllListings(listings) {
  listings.forEach(
    ({ title, created, endsAt, id, media, description, _count }) => {
      const { bids } = _count;
      listingsTemplate(title, endsAt, id, media, description, bids);
    }
  );
}
