import { placeholderListingImg } from "../../error-handlers/onerror.mjs";
import { allListingsCountdown } from "../listings-countdown.mjs";

/**
 * Generates HTML template for a profile listings and appends it to the my-listing-container div
 * @param {string} title - The title of the listing
 * @param {string} endsAt - The end time of the auction as a string in ISO format
 * @param {Array<string>} media - Array of image URLs for the listing
 * @param {string} id - The ID of the listing
 * @param {number} bids - The number of bids on the listing
 * @returns {void}
 */
export function profileListingsTemplate(title, endsAt, media, id, bids) {
  const listingsContainer = document.querySelector("#my-listing-container");
  const div = document.createElement("div");
  allListingsCountdown(div, endsAt);
  div.className =
    "col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-3";
  div.innerHTML = `<div
                          class="card h-100 bg-primary text-light shadow rounded"
                        >
                          <img
                            class="card-img-top mb-1 rounded-top"
                            src="" alt="" onerror="this.onerror=null;this.src='${placeholderListingImg}';"
                          />
                          <div class="card-body">
                            <h3 class="card-title fw-bold my-2 ">
                            </h3>
                          </div>
                          <hr />
                          <div
                            class="card-footer bg-primary d-flex flex-column justify-content-between mb-2"
                          >
                            <div
                              class="d-flex flex-row justify-content-between align-items-end my-2"
                            >
                              <h4 class="card-title fw-bold custom-title listing-ends">
                              </h4>
                            </div>
                            <div
                              class="d-flex flex-row justify-content-between align-items-end my-2"
                            >
                              <p class="mb-auto fw-bold">
                              </p>
                              <a href="/home/auction/index.html?id=" class="btn btn-light shadow px-5 py-1" "
                                >View Item</a
                              >
                            </div>
                          </div>
                        </div>`;

  div.querySelector("img").src = media[0];
  div.querySelector("h3").innerText = title;
  div.querySelector("p").innerText = `Bids: ${bids}`;
  div.querySelector("a").href = `/home/auction/index.html?id=${id}`;

  listingsContainer.append(div);
}
