import { placeholderListingImg } from "../../error-handlers/onerror.mjs";

/**
 * Add images to the media carousel container
 * @param {string} images - The URL of the images to be displayed in the carousel
 * @description
 * - This function takes in a `string` parameter `images` representing the URL of the image to be displayed in a media carousel container.
 * - The function creates a new `div` element with a class of "carousel-item active" and an `img` element with the class of "d-block w-100 gallery" inside the `div` element.
 * - The `src` attribute of the `img` element is set to the `images` parameter. If the image fails to load, a placeholder image is displayed. The new `div` element is then appended to the `carouselContainer`.
 * - The function returns nothing (`void`).
 */
export function mediaCarousel(images) {
  const carouselContainer = document.querySelector(".carousel-inner");
  const div = document.createElement("div");
  div.className = "carousel-item active";
  div.innerHTML = `<img
                        src=""
                        class="d-block w-100 gallery"
                        alt="..."
                        onerror="this.onerror=null;this.src='${placeholderListingImg}';"
                      />`;
  div.querySelector("img").src = images;
  carouselContainer.append(div);
}
