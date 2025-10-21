// Function to update the clock every second
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros if needed
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Combine the time string
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Display time inside the clock div
  document.getElementById("clock").textContent = timeString;
}

// Run the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
