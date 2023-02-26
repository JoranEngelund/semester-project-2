import { placeholderAvatar } from "../../error-handlers/onerror.mjs";
import { countDown } from "./countdown.mjs";

/**
 * Renders the seller details on the page including the seller's name, avatar, bid end time, and the highest bid if any.
 * @param {string} name - The name of the seller.
 * @param {string} avatar - The URL of the seller's avatar.
 * @param {string} endsAt - The bid end time in string format.
 * @param {Array} bids - An array of bids with each bid containing the amount and bidder's details.
 * @description
 *  - This function takes in four parameters: name, avatar, endsAt, and bids. It then creates a div element and adds HTML content to it that includes the seller's name, avatar, bid end time, and highest bid amount if any. The function then sets the appropriate values for the elements in the div based on the parameters passed in. Finally, it appends the div to a seller details container element on the page.
 * - The endsAt parameter is a string representing the bid end time, and it is passed to the countDown function, which starts a countdown timer based on the end time.
 * - The bids parameter is an array of bids, and the function sets the highest bid amount by selecting the last bid in the array if there are any bids.
 * - The function does not return any value; it simply modifies the seller details container on the webpage.
 */
export function sellerDetails(name, avatar, endsAt, bids) {
  const sellerContainer = document.querySelector(".seller-details");
  const div = document.createElement("div");
  div.innerHTML = `<h2 class="card-title my-3">Added by</h2>
                  <div class="d-flex align-items-center mb-3">
                    <img
                      src=""
                      alt=""
                      title=""
                      onerror="this.onerror=null;this.src='${placeholderAvatar}';"
                      class="card-img"
                    />
                    <h3 class="card-subtitle ms-3"></h3>
                  </div>
                  <h4 class="card-subtitle mb-3 bid-ends">
                  </h4>
                  <h4 class="card-subtitle mb-3 last-bid">
                    Last bid: No bids yet!
                  </h4>
                  <hr />`;

  div.querySelector("img").src = avatar;
  div.querySelector("img").title = name;
  div.querySelector("h3").innerText = name;
  countDown(endsAt);
  for (let i = 0; i < bids.length; i++) {
    let lastBid = bids[i].amount;
    if (bids.length >= 0) {
      div.querySelector(".last-bid").innerText = `Highest bid: €${lastBid}`;
    }
  }

  sellerContainer.append(div);
}
