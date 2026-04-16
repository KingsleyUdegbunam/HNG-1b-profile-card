const timeEl = document.querySelector(".time-display");

function updateTime() {
  const epochNow = Date.now();
  timeEl.textContent = epochNow;
}

updateTime();
setInterval(updateTime, 1000);
