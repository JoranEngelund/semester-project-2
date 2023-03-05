import * as storage from "../storage/index.mjs";

/**
 * Displays a welcome message to the user, using the name property of the user object stored in the browser's local storage.
 * @function welcomeMessage
 * @returns {void} This function does not return a value, but it creates and appends a new h2 element to the .welcome-msg container, which displays the welcome message.
 * @example
 * welcomeMessage();
 */
export function welcomeMessage() {
  const user = storage.load("user");
  const { name } = user;
  const messageContainer = document.querySelector(".welcome-msg");
  const welcomeMessage = document.createElement("h2");
  welcomeMessage.className = "text-dark";
  welcomeMessage.innerText = `Welcome, ${name}!`;
  messageContainer.append(welcomeMessage);
}
