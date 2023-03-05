import { postBid } from "../api/bid.mjs";

/**
 * Sets up a bid listener on the specified URL to listen for bid submission form submissions and post a new bid to the server.
 * @function bidListener
 * @param {*} url - the URL API endpoint to send the bid object to, on submit
 */
export function bidListener(url) {
  const form = document.querySelector("#bid-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = e.target;
    const method = formData.method;
    const amount = JSON.parse(formData.bid.value);
    const bid = {
      amount: amount,
    };
    postBid(url, bid, method);
  });
}
