import { placeholderListingImg } from "../error-handlers/onerror.mjs";
import { allListingsCountdown } from "./listings-countdown.mjs";

/**
 * Renders listings to the page using the provided data
 * @function listingsTemplate
 * @param {string} title - The title of the listing
 * @param {string} created - The date the listing was created
 * @param {string} endsAt - The date the listing ends
 * @param {string} id - The ID of the listing
 * @param {string} media - The URL of the listing's media
 * @param {string} description - The description of the listing
 * @param {number} bids - The number of bids on the listing
 * @returns {void}
 * @example
 * listingsTemplate(title, created, endsAt, id, media, description, bids);
 * @description 
 * - The listingsTemplate function renders a single listing to the page using the provided data. The function takes several parameters: title, created, endsAt, id, media, description, and bids.

 - The title parameter is a string that represents the title of the listing. The created and endsAt parameters are strings that represent the
 */
export function listingsTemplate(title, endsAt, id, media, description, bids) {
  const listingsContainer = document.querySelector("#listing-container");
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
                            <h3 class="card-title fw-bold my-2 listing-title">
                            </h3>
                            <p class="card-text listing-description">
                            </p>
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
                              <p class="mb-auto listing-bids fw-bold">
                              </p>
                              <a class="btn btn-light shadow px-5 py-1" href="/home/auction/index.html?id="
                                >Bid It</a
                              >
                            </div>
                          </div>
                        </div>`;

  div.querySelector("img").src = media[0];
  div.querySelector(".listing-title").innerText = title;
  div.querySelector(".listing-description").innerText = description;
  div.querySelector(".listing-bids").innerText = `Bids: ${bids}`;
  div.querySelector("a").href = `/home/auction/index.html?id=${id}`;

  listingsContainer.append(div);
}
