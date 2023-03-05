/**
 * Handles the error that occurred during the listings API call. Displays an error message and a button to refresh the page.
 * @param {error} error - The error object thrown during the listings API call
 * @returns {void}
 * @example
 * listingsErrorHandler(error);
 * @description
 * - The listingsErrorHandler function handles the error that occurred during the listings API call.
 * - It takes an error parameter, which should be an Error object thrown during the call. If the error object exists, it clears the inner HTML of the element with an id of listing-container and replaces it with an error message and a button to refresh the page. The function does not return anything.
 */
export function listingsErrorHandler(error) {
  if (error) {
    const listingsContainer = document.querySelector("#listing-container");
    listingsContainer.innerHTML = "";
    listingsContainer.innerHTML = `<div class="text-center">
                                  <p class="card-text mb-4">
                                    There seems to some bolts loose at this time! Please refresh the page or check back again soon!
                                  </p>
                                  <a href="/index.html"
                                    class="btn btn-primary mt-4 mb-3 px-8 shadow text-uppercase">
                                    Refresh
                                  </a>
                                  </div>
                                  `;
  }
}
