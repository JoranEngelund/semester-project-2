import { renderAllListings } from "../auction/index.mjs";
import { searchLengthChecker } from "../length-checkers/search-length-checker.mjs";
import { filterListings } from "./filter-listings.mjs";

/**
 * Adds an event listener to the search bar and filters and renders the listings based on the search input
 * @param {Array<Object>} listings - An array of objects representing the listings to be filter and render
 * @example
 * searchListener(listings);
 * @description
 * - The searchListener function takes in an array of objects representing the listings to filter and render. It adds an event listener to the search bar and handles the input event by filtering the listings based on the search input and rendering the filtered listings.
 * - The input event handler function is documented separately within the function. It takes in an event object representing the input event triggered by the search bar.
 * - The function first extracts the searchValue from the input event by trimming the value and converting it to lowercase. It then filters the listings array using the filterListings function and renders the filtered listings using the renderAllListings function.
 *  - Finally, it checks the length of the filtered listings using the searchLengthChecker function to check if the length of the filtered listings is less than or equal to 0, this way to show correct UI/UX to the user.
 */
export function searchListener(listings) {
  const search = document.querySelector("#search-bar");
  search.oninput = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredListings = filterListings(searchValue, listings);
    renderAllListings(filteredListings);
    searchLengthChecker(filteredListings);
  };
}
