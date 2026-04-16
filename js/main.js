const timeEl = document.querySelector(".time-display");

function updateTime() {
  const epochNow = Date.now();
  const dateNow = new Date();

  timeEl.textContent = epochNow;
  timeEl.setAttribute("datetime", dateNow.toISOString());

  console.log(dateNow.toISOString());
}

updateTime();
setInterval(updateTime, 1000);
