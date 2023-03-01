import { placeholderAvatar } from "../../error-handlers/onerror.mjs";

/**
 * Renders the user's profile information onto the webpage using a pre-defined HTML template.
 * @function profileInfoTemplate
 * @param {string} name - The user's name.
 * @param {string} avatar - The URL of the user's avatar image.
 * @param {string} email - The user's email address.
 * @param {number} credits - The number of credits the user has.
 * @returns {void} - This function does not return anything, but renders the user's profile information onto the webpage using a pre-defined HTML template
 */
export function profileInfoTemplate(name, avatar, email, credits) {
  const profileInfoContainer = document.querySelector(".profile-info");
  const div = document.createElement("div");

  div.innerHTML = `<img
                    src="/assets/profile-image.png"
                    alt="Profile Avatar"
                    onerror="this.onerror=null;this.src='${placeholderAvatar}';"
                    class="card-img"
                  />
                  <hr>
                  <h1 class="card-title mt-2 username"></h1>
                  <h2 class="email"></h2>
                  <h3 class="credits fw-bold"></h3>
                  <hr>`;

  div.querySelector("img").src = avatar;
  div.querySelector(".username").innerText = name;
  div.querySelector(".email").innerText = email;
  div.querySelector(".credits").innerText = `Credits: ${credits}`;
  profileInfoContainer.append(div);
}
