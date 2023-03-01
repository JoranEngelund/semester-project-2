/**
 * Handles the response of a profile info API call and updates the UI accordingly.
 * @param {Response} response - The response object from the login request.
 * @example
 * profileInfoResponseHandler(response)
 * @description
 * - If the response is not ok, it displays an error message and a button to refresh the page.
 */
export function profileInfoResponseHandler(response) {
  if (!response.ok) {
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
