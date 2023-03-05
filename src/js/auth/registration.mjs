import { registration } from "../api/index.mjs";
import { API_REGISTRATION_URL } from "../constants/constants.mjs";

/**
 * - Handles the registration form submission event and registers a user with the provided details
 * - Extracts form data including name, email, password and avatar values and creates a profile object.
 * - Calls the registration function with the API registration URL, profile object and request method.
 * @example
 * registrationHandler();
 * @description
 * - The function listens for a form submission event and extracts the form data including name, email, password, and avatar values. It then creates a profile object using the extracted data.
 * - The function calls the registration function with the API registration URL, profile object, and request method as arguments.
 * - The function does not have any input parameters or output return.
 */
export function registrationHandler() {
  const form = document.querySelector("#registration-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = e.target;
    const method = formData.method;
    const name = formData.name.value;
    const email = formData.email.value;
    const password = formData.password.value;
    const avatar = formData.avatar.value;
    const profile = {
      name: name,
      email: email,
      password: password,
      avatar: avatar,
    };
    registration(API_REGISTRATION_URL, profile, method);
  });
}
