import * as storage from "../storage/index.mjs";

/**
 * Handles the response of a login request and updates the UI accordingly.
 * @param {Response} response - The response object from the login request.
 * @example
 * loginResponseHandler(response);
 * @description
 * - If the response is OK, redirect the user to the home page.
 * - If the response is not OK, clear the storage and update the login card with an error message.
 */
export function loginResponseHandler(response) {
  if (response.ok) {
    window.location.replace("../../../home/index.html");
  }
  if (!response.ok) {
    storage.clear();
    const loginCard = document.querySelector("#login-card");
    loginCard.innerHTML = "";
    loginCard.innerHTML += `<h1 class="card-title mt-3">Login</h1>
                                  <p class="card-text mb-1 mt-4 ">
                                    There seems to be some issues with your login credentials. Please try again with different information
                                  </p>
                                  <a href="../../../authorization/login/index.html"
                                    class="btn btn-primary mt-4 mb-3 px-8 shadow text-uppercase">
                                    Try again
                                  </a>
                                  <p class="card-text mb-3">
                                    If you haven't created an account, please do so
                                  </p>
                                  <a class="card text text-decoration-underline mb-3"
                                    href="/authorization/registration/index.html">
                                      Create an account
                                    </a>
                                  `;
  }
}
