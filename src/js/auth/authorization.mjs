import * as storage from "../storage/index.mjs";

/**
 * - Checks if the user is authorized to access a protected page and redirects to the appropriate page.
 * - If the user is not authorized, the user is redirected to the login page.
 * - If the user is already authorized, they will be redirected to the home page.
 * @example
 * checkAuthorization();
 * @description
 * - The checkAuthorization function checks if the user is authorized to access a protected page and redirects to the appropriate page. If the user is not authorized, it redirects the user to the login page. If the user is already authorized, they will be redirected to the home page.
 * - The function first retrieves the current path of the page using the window.location.pathname property. It also retrieves the access token from the local storage using the storage.load() method.
 * - The function then checks if the token variable is falsy. If it is, it redirects the user to the login page using the window.location.replace() method. The login page URL is provided as an argument to the replace() method.
 * - The function also checks if the user is already authorized by checking if the current path is the root path or the index page and if the token variable is truthy. If both conditions are met, it redirects the user to the home page using the window.location.replace() method. The home page URL is provided as an argument to the replace() method.
 */
export function checkAuthorization() {
  const path = window.location.pathname;
  const token = storage.load("accessToken");
  if (path === "/home/index.html" && !token) {
    window.location.replace("/authorization/login/index.html");
  }
  if (!token && path === "/home/auction/index.html") {
    window.location.replace("/authorization/login/index.html");
  }
  if (!token && path === "/profile/index.html") {
    window.location.replace("/authorization/login/index.html");
  }
  if ((path === "/" || path === "/index.html") && token) {
    window.location.replace("/home/index.html");
  }
}
