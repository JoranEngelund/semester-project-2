/**
 * // function that toggles the loadingIndicator on or off, depending on the argument passed in
 * @param {any} event
 * @example
 * @example
 * ```js
 * // Call the function and pass in the argument which will be the content you want to have the loadingIndicator stop loading for. Should be a implicit true or false
 * toggleLoadingIndicator(event);
 * ```
 */
export function toggleLoadingIndicator(event) {
  const toggleLoadingIndicator = document.querySelector(
    ".toggleLoadingIndicator"
  );
  if (event) {
    toggleLoadingIndicator.classList.add("d-none");
  } else {
    toggleLoadingIndicator.classList.remove("d-none");
  }
}
