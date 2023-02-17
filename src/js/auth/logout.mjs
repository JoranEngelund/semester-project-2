import * as storage from "../storage/index.mjs";

/**
 * // Function that listens to user click on "logout" link in navigation, if link is clicked, the localStorage gets cleared of items
 * @example
 * ```js
 * // To clear the localStorage when sign out link is clicked, which brings the user to the landing page, call the logout() function
 * logout();
 * ```
 */
export function logout() {
  const logout = document.querySelectorAll(".logout");
  logout.forEach((logoutLink) => {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      storage.clear();
      window.location.replace("../../../index.html");
    });
  });
}
