import { sendListing } from "../api/index.mjs";
import { API_CREATE_LISTING_URL } from "../constants/constants.mjs";

/**
 * Creates a new listing by capturing form data, parsing it, and sending it to the backend API using the sendListing function.
 * @function createListing
 * @throws {Error} if there is an error sending the request
 * @returns {void} This function does not return a value
 * @example
 * createListing();
 */
export function createListing() {
  const form = document.querySelector("#listing-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = e.target;
    const method = formData.method;
    const title = formData.title.value;
    const description = formData.description.value;
    const date = formData.date.value;
    const media = [];
    const media1 = formData.media1.value;
    const media2 = formData.media2.value;
    const media3 = formData.media3.value;
    if (media1.length >= 1) {
      media.push(media1);
    }
    if (media2.length >= 1) {
      media.push(media2);
    }
    if (media3.length >= 1) {
      media.push(media3);
    }
    const tagsString = formData.tags.value;
    const tags = tagsString.split(",");
    const item = {
      title: title,
      description: description,
      endsAt: date,
      media: media,
      tags: tags,
    };
    console.log(item);
    sendListing(API_CREATE_LISTING_URL, item, method);
  });
}
