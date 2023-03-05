import * as check from "../auth/index.mjs";
import * as run from "../auction/index.mjs";
import * as upload from "../form-handlers/index.mjs";
import * as write from "../templates/index.mjs";
import * as download from "../profile/index.mjs";
/**
 * Function that checks which page the user is on and then runs the functions that is needed on that page
 * @example
 * // run the router
 * router();
 */
export function router() {
  const path = window.location.pathname;

  if (path === "/" || path === "/index.html") {
    check.checkAuthorization();
    run.setup();
  }
  if (path === "/authorization/login/index.html") {
    check.loginHandler();
  }
  if (path === "/authorization/registration/index.html") {
    check.registrationHandler();
  }
  if (path === "/home/index.html") {
    check.checkAuthorization();
    run.setup();
    write.welcomeMessage();
    upload.createListing();
    download.setupCredits();
    check.logout();
  }
  if (path === "/profile/index.html") {
    check.checkAuthorization();
    check.logout();
    download.setupProfileInfo();
    download.setupCredits();
    upload.createListing();
  }
  if (path === "/home/auction/index.html") {
    check.checkAuthorization();
    check.logout();
    run.setupSpecificListing();
    download.setupCredits();
  }
}
