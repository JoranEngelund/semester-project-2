/**
 * Filters a list of listings based on a search value
 * @param {string} searchValue - The search value to filter the listings
 * @param {Array<Object>} listings - An array of objects representing the listings to filter
 * @returns {Array<Object>} - An array of objects representing the filtered listings
 * @example
 * filterListings(searchValue, listings)
 * @description
 * - The function takes in two parameters: searchValue, which is a string representing the value to search for, and listings, which is an array of objects representing the listings to filter.
 * - The function then initializes an empty container for the filtered listings, and proceeds to filter the listings array using the filter() method. The filter function uses the includes() method to check if the title property of each object in the listings array contains the searchValue string. If it does, the function returns true and the object is included in the filtered list.
 * - Finally, the function returns an array of objects representing the filtered listings.
 */
export function filterListings(searchValue, listings) {
  const listingsContainer = document.querySelector("#listing-container");
  listingsContainer.innerHTML = "";
  const filteredListings = listings.filter((listingData) => {
    if (listingData.title.toLowerCase().includes(searchValue)) {
      return true;
    }
  });
  return filteredListings;
}
