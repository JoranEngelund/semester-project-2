/**
 * Checks the length of the listings array and displays an error message if it is empty.
 * @param {Array} listings - The array of listings to be checked
 * @returns {void}
 * @example
 * listingsLengthChecker(listings);
 * @description
 * - The listingsLengthChecker function checks the length of the listings array and displays an error message if it is empty.
 * - It takes an array of listings as its parameter. If the length of the array is less than or equal to zero, it clears the inner HTML of the element with an id of listing-container and replaces it with an error message and a button to refresh the page. The function does not return anything.
 */
export function listingsLengthChecker(listings) {
  if (listings.length <= 0) {
    const listingsContainer = document.querySelector("#listing-container");
    listingsContainer.innerHTML = "";
    listingsContainer.innerHTML = `<div class="text-center"
                                  <p class="card-text mb-4">
                                    There seems to be no listings at this time! Please check again soon!
                                  </p>
                                  <a href="/index.html"
                                    class="btn btn-primary mt-4 mb-3 px-8 shadow rounded text-uppercase">
                                    Refresh
                                  </a>
                                  </div>
                                  `;
  }
}
