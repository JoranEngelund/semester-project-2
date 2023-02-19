import { registration } from "../api/index.mjs";
import { API_REGISTRATION_URL } from "../constants/constants.mjs";

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
    console.log(method);
    console.log(profile);
    registration(API_REGISTRATION_URL, profile, method);
  });
}
