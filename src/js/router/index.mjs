import * as run from "../auth/index.mjs";

/**
 * // Function that checks which page the user is on and then runs the functions that is needed on that page
 * @example
 * // run the router
 * router();
 */
export function router() {
  const path = window.location.pathname;
  console.log(path);

  if (path === "/authorization/login/index.html") {
    run.loginHandler();
  }
  if (path === "/authorization/registration/index.html") {
    run.registrationHandler();
  }
  if (path === "/home/index.html") {
    run.logout();
  }
  if (path === "/profile/index.html") {
    run.logout();
  }
  if (path === "/home/auction/index.html") {
    run.logout();
  }
}
