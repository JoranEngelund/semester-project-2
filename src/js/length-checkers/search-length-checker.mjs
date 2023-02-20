/**
 * Checks the length of the listings array and displays a message if it is empty.
 * @param {Array} listings - The array of listings to be checked
 * @returns {void}
 * @example
 * listingsLengthChecker(listings);
 * @description
 * - The listingsLengthChecker function checks the length of the listings array and displays a message to the users if it is empty.
 * - It takes an array of listings as its parameter. If the length of the array is less than or equal to zero, it clears the inner HTML of the element with an id of listing-container and replaces it with an error message and a button to refresh the page. The function does not return anything.
 */
export function searchLengthChecker(listings) {
  if (listings.length <= 0) {
    const listingsContainer = document.querySelector("#listing-container");
    listingsContainer.innerHTML = "";
    listingsContainer.innerHTML = `<div class="text-center"
                                  <p class="card-text mb-4">
                                    We can't find any listings based on your search result
                                  </p>
                                  </div>
                                  `;
  }
}
