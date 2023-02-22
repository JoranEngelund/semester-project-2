/**
 * This function displays the amount of credit on the webpage by creating an <a> element and appending it to the ".credits" container.
 * @param {number} credit - The amount of credit to display.
 * @returns {void}
 * @example
 * displayCredits(credit);
 */
export function displayCredits(credit) {
  const creditsContainer = document.querySelector(".credits");
  const anchor = document.createElement("a");
  anchor.className =
    "nav-link bg-primary text-light rounded py-1 px-3 mx-2 shadow";
  anchor.innerText = `Credits: ${credit}`;
  creditsContainer.append(anchor);
}

const media = [];
const media1 = media.push(formData.media1.value);
