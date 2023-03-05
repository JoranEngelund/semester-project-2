import { API_BASE_URL } from "../constants/constants.mjs";
import { editAvatar } from "../api/index.mjs";

/**
 * Attaches an event listener to the avatar update form that will submit a PUT request to update the user's avatar based in the input.
 * @function editAvatarListener
 * @param {string} name - The name of the user whose avatar is being edited.
 * @returns {void}
 * @description
 * - Selects the avatar update form from the DOM.
 * ```js
 * const form = document.querySelector("#update-profile-media");
 * ```
 * - Attaches a submit event listener to the form that will prevent its default behavior and sends a PUT request to update the user's avatar based in the input.
 * ```js
 * form.addEventListener("submit", (e) => {
    e.preventDefault();
```
 * - Extracts the avatar URL image data from the form data.
```js
const formData = e.target;
const avatar = formData.avatar.value;
```
 * - Constructs the request body.
```js
const body = {
     avatar: avatar,
};
```
 * - Sends the URL, body & PUT request method to update the user's avatar.
```js
const method = "PUT";
editAvatar(API_AVATAR_URL, body, method);
```
 */
export function editAvatarListener(url) {
  const form = document.querySelector("#update-profile-media");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = e.target;
    const method = "PUT";
    const avatar = formData.avatar.value;
    const body = {
      avatar: avatar,
    };
    editAvatar(url, body, method);
  });
}
