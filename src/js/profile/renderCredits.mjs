import { displayCredits } from "../templates/credits.mjs";

/**
 * Renders the user's credits to the UI by extracting the credit value from the credits object and passing the the credit value to the displayCredits function
 * @param {object} credits - An object containing the user's credits
 * @param {number} credits.credits - The value of the user's credits
 * @returns {void} - This function does not return a value, but it destructures the credits object and passes it as an argument to the displayCredits function that renders it to the UI
 * @example
 * renderCredits(credits);
 */
export function renderCredits(credits) {
  const { credits: credit } = credits;
  displayCredits(credit);
}
