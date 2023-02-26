/**
 * Sets up the specific listing details section with the given title and description and generates it as html in the detailsContainer.
 * @param {string} title - The title of the listing
 * @param {*} description - The description of the listing
 */
export function specificListingDetails(title, description) {
  const detailsContainer = document.querySelector(".listing-details");
  const listingTitle = document.createElement("h1");
  const lineBreak = document.createElement("hr");
  const subTitle = document.createElement("h2");
  const listingDescription = document.createElement("p");
  listingTitle.className = "card-title mt-3";
  subTitle.className = "card-subtitle";
  listingDescription.className = "card-text my-3";
  detailsContainer.append(listingTitle);
  detailsContainer.append(lineBreak);
  detailsContainer.append(subTitle);
  detailsContainer.append(listingDescription);
  detailsContainer.querySelector("h1").innerText = title;
  detailsContainer.querySelector("h2").innerText = "Description";
  detailsContainer.querySelector("p").innerText = description;
}
