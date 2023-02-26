/**
 * Sets the maximum bid input value and input title based on the given credit amount.
 * @param {number} credit - The credit amount to set the maximum bid input value and title.
 * @description
 * - This function takes in a number credit as a parameter and sets the maximum value and title of a bid input element on a webpage.
 * - It first gets the bid input element using its ID (#bid) and then sets its max attribute to the given credit amount. It also sets the title attribute of the bid input element to a string that indicates the maximum bid amount, using the credit amount provided as an argument.
 * - The function does not return any value; it simply modifies the bid input element on the webpage.
 */
export function maxBid(credit) {
  const bidInput = document.querySelector("#bid");
  bidInput.max = credit;
  bidInput.title = `Your maximum bid amount is ${credit}`;
}
