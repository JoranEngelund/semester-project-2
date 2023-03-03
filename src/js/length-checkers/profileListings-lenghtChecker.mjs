/**
 * Checks the length of the listings array and displays an error message if it is empty.
 * @param {Array} listings - The array of listings to be checked
 * @returns {void}
 * @example
 * profileListingsLengthChecker(listings)
 * @description
 * - The profileListingsLengthChecker function checks the length of the listings array and displays an error message if it is empty.
 * - It takes an array of listings as its parameter. If the length of the array is less than or equal to zero, it clears the inner HTML of the element with an id of listing-container and replaces it with an information message and a button to let the user create a new listing. The function does not return anything.
 */
export function profileListingsLengthChecker(listings) {
  if (listings.length <= 0) {
    const listingsContainer = document.querySelector("#my-listing-container");
    listingsContainer.innerHTML = "";
    listingsContainer.innerHTML = `<hr>
                                <div class="text-center"
                                  <p class="card-text mb-4">
                                    Seems like you haven't created any listings yet. Let's get you started!
                                  </p>
                                  <button
                                    class="btn btn-primary mb-4"
                                     data-bs-toggle="modal"
                                     data-bs-target="#create-listing"
                                    > Add New Listing
                                    </button>
                                  </div>
                                  `;
  }
}
