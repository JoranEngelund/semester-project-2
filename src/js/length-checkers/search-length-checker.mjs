/**
 * Checks the length of the filtered listings and displays a message if there are no results.
 * @param {Array<Object>} listings -  An array of objects representing the filtered listings to check.
 * @returns {void}
 * @example
 * searchLengthChecker(listings);
 * @description
 * - The searchLengthChecker function takes in an array of objects representing the filtered listings to check. It checks the length of the listings array and displays a message if there are no results..
 * - The function first checks if the length of the listings array is less than or equal to zero. If it is, it then retrieves the listings container using the querySelector method, clears its contents using the innerHTML property, and replaces it with a new HTML element that displays a message indicating that there were no listings found based on the search result. The message is displayed in a <div> element with centered text and a <p> element with the text "We can't find any listings based on your search result".
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
