import { API_LOGIN_URL } from "../constants/constants.mjs";
import { login } from "../api/login.mjs";

/**
 * // loginHandler function that retrieves data from a login-form, creates an object from input values, and passes it into a async function that sends the object to the API server with a method request
 * @example
 * // Call the function
 * ```js
 * loginHandler()
 * ```
 * // Returns
 * ```js
 * {
 * "name": "my_username",
 * "email": "first.last@stud.noroff.no",
 * "avatar": "https://example.com/avatar.jpg",
 * "credits": "690"
 * "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...."
 * }
 * ```
 *
 */
export function loginHandler() {
  const form = document.querySelector("#login-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = e.target;
    const method = formData.method;
    const email = formData.email.value;
    const password = formData.password.value;
    const profile = {
      email: email,
      password: password,
    };
    console.log(profile);
    login(API_LOGIN_URL, profile, method);
  });
}
