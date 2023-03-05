/**
 * Starts a countdown timer based on a given date and displays it on the screen.
 * @function countDown
 * @param {String} date - The end date of the auction in string format (e.g. "2023-03-05T23:59:59")
 */
export function countDown(date) {
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
      document.querySelector(
        ".bid-ends"
      ).innerText = `Ends in: ${days}d, ${hours}h, ${minutes}m, ${seconds}s`;
    }

    if (days >= timeLeft && hours < timeLeft) {
      document.querySelector(
        ".bid-ends"
      ).innerText = `Ends in: ${days}d, ${minutes}m, ${seconds}m`;
    }

    if (days < timeLeft && hours >= timeLeft) {
      document.querySelector(
        ".bid-ends"
      ).innerText = `Ends in: ${hours}h, ${minutes}m, ${seconds}s`;
    }

    if (days < timeLeft && hours < timeLeft && minutes >= timeLeft) {
      document.querySelector(
        ".bid-ends"
      ).innerText = `Ends in: ${minutes}m, ${seconds}s`;
    }

    if (
      days < timeLeft &&
      hours < timeLeft &&
      minutes < timeLeft &&
      seconds >= timeLeft
    ) {
      document.querySelector(
        ".bid-ends"
      ).innerText = `Ends in: ${seconds} Seconds`;
    }
    if (distance < 0) {
      clearInterval(timer);
      document.querySelector(".bid-ends").innerText = `Bidding Ended!`;
      document.querySelector(".bid-container").innerHTML = "";
    }
  });
}
