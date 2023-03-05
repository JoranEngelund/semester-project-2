/**
 * Handles the response of a registration request.
 * @param {Response} response - The response object returned from the registration request.
 * @returns {void}
 * @example
 * registrationResponseHandler(response);
 * @description
 * - If the response is ok, clears the registration form and displays a success message with a login button.
 * - If the response is not ok, displays an error message with a button to retry the registration process.
 */
export function registrationResponseHandler(response) {
  if (response.ok) {
    const registerCard = document.querySelector("#register-card");
    registerCard.innerHTML = "";
    registerCard.innerHTML = `<h1 class="card-title mt-3 mb-4">Success!</h1>
                                  <p class="card-text mb-2">
                                    Your account has been created
                                  </p>
                                  <p class="card-text mb-3">
                                    Please proceed to the login section
                                  </p>
                                  <a href="/authorization/login/index.html"
                                    class="btn btn-primary mt-4 mb-3 px-8 shadow text-uppercase btn-login">
                                    login
                                  </a>`;
  }

  if (!response.ok) {
    const registerCard = document.querySelector("#register-card");
    registerCard.innerHTML = "";
    registerCard.innerHTML = `<h1 class="card-title mt-3 mb-4">Register</h1>
                                  <p class="card-text mb-4">
                                    Profile already exists!
                                  </p>
                                  <p class="card-text mb-3">
                                    Please try another account
                                  </p>
                                  <a href="/authorization/registration/index.html"
                                    class="btn btn-primary mt-4 mb-3 px-8 shadow text-uppercase btn-login">
                                    Try again
                                  </a>
                                  `;
  }
}
