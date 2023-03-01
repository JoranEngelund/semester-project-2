/**
 * Handles the error that occurred during the profile info API call. Displays an error message and a button to refresh the page.
 * @param {error} error - The error object thrown during the listings API call
 * @returns {void}
 * @example
 * profileInfoErrorHandler(error)
 */
export function profileInfoErrorHandler(error) {
  if (error) {
    const profileInfoContainer = document.querySelector(".profile-info");
    profileInfoContainer.innerHTML = "";
    profileInfoContainer.innerHTML = `<div class="text-center mt-5">
                                  <p class="card-text mb-4">
                                    There seems to some bolts loose at this time! Please refresh the page or check back again soon!
                                  </p>
                                  <a href="/profile/index.html"
                                    class="btn btn-primary mt-4 mb-3 px-8 shadow text-uppercase">
                                    Refresh
                                  </a>
                                  </div>
                                  `;
  }
}
