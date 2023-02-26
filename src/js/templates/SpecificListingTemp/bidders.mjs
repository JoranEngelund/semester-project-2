/**
 * Adds a new bid to the bid history section on the screen with the specified amount and bidder name.
 * @function bidHistory
 * @param {Number} amount - The amount of the bids
 * @param {String} bidderName - The name of the bidders who made the bids
 * @example
 * bidHistory(amount, bidderName);
 */
export function bidHistory(amount, bidderName) {
  const bidContainer = document.querySelector("#bid-history");
  document.querySelector(".no-bids").innerText = "";
  const div = document.createElement("div");
  div.className =
    "d-flex flex-row justify-content-between align-items-center border rounded shadow bg-secondary p-3 mb-2";
  div.innerHTML = `
                    <h4 class="card-subtitle bidder-name"></h4>
                    <h5 class="card-subtitle border rounded py-2 px-3 bg-light bid-amount">
                    </h5>`;

  div.querySelector(".bidder-name").innerText = bidderName;
  div.querySelector(".bid-amount").innerText = `€${amount}`;
  bidContainer.append(div);
}
