/**
 * Handles the response of a listings API call and updates the UI accordingly.
 * @param {Response} response - The response object from the login request.
 * @example
 * loginResponseHandler(response);
 * @description
 * - If the response is not ok, it displays an error message and a button to refresh the page.
 */
export function listingsResponseHandler(response) {
  if (!response.ok) {
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
