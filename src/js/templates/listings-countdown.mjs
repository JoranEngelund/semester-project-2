/**
 * Starts a countdown timer based on a given date and displays it on the screen.
 * @function countDown
 * @param {String} date - The end date of the auction in string format (e.g. "2023-03-05T23:59:59")
 */
export function allListingsCountdown(div, date) {
  const countdownDate = new Date(date);

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance % 86400000) / 3600000);
    const minutes = Math.floor((distance % 3600000) / 60000);
    const seconds = Math.floor((distance % 60000) / 1000);
    const timeLeft = 1;

    if (days >= timeLeft) {
      div.querySelector(".listing-ends").innerText = `Ends in: ${days} Days`;
    }
    if (days < timeLeft && hours >= timeLeft) {
      div.querySelector(".listing-ends").innerText = `Ends in: ${hours} Hours`;
    }
    if (
      days < timeLeft &&
      hours >= timeLeft &&
      minutes < timeLeft &&
      seconds >= timeLeft
    ) {
      div.querySelector(
        ".listing-ends"
      ).innerText = `Ends in: ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
    }
    if (days < timeLeft && hours < timeLeft && minutes >= timeLeft) {
      div.querySelector(
        ".listing-ends"
      ).innerText = `Ends in: ${minutes} Minutes, ${seconds} Seconds`;
    }
    if (
      days < timeLeft &&
      hours < timeLeft &&
      minutes < timeLeft &&
      seconds >= timeLeft
    ) {
      div.querySelector(
        ".listing-ends"
      ).innerText = `Ends in: ${seconds} Seconds`;
    }
    if (distance < 0) {
      clearInterval(timer);
      div.querySelector(".listing-ends").innerText = `Bidding Ended!`;
    }
  }, 1000);
}
