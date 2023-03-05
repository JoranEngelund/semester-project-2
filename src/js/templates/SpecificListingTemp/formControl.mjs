import * as storage from "../../storage/index.mjs";

/**
 * Controls the display of bidding form based on the logged in user's name. If the user's name is the same as the bidder's name, hide the bidding form
 * @param {string} name - The name to compare with the logged in user's name.
 */
export function formControl(name) {
  const user = storage.load("user");
  const { name: username } = user;
  if (username === name) {
    document.querySelector(".bid-container").classList.add("d-none");
    document.querySelector(".line-break").classList.add("d-none");
  }
}
