import * as check from "../auth/index.mjs";
import * as run from "../auction/index.mjs";

/**
 * Function that checks which page the user is on and then runs the functions that is needed on that page
 * @example
 * // run the router
 * router();
 */
export function router() {
  const path = window.location.pathname;
  console.log(path);

  if (path === "/" || path === "/index.html") {
    run.setup();
  }
  if (path === "/authorization/login/index.html") {
    check.loginHandler();
  }
  if (path === "/authorization/registration/index.html") {
    check.registrationHandler();
  }
  if (path === "/home/index.html") {
    check.logout();
  }
  if (path === "/profile/index.html") {
    check.logout();
  }
  if (path === "/home/auction/index.html") {
    check.logout();
  }
  if (path === "/home/index.html") {
    run.setup();
  }
}
