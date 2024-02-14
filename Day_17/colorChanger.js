// Generate a random color
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Start changing background color at an interval
let interval;
const startColorChanging = () => {
  if (!interval) {
    interval = setInterval(changeBackground, 1000);
  }
};

const changeBackground = () => {
  document.body.style.backgroundColor = randomColor();
};

// Stop changing background color
const stopColorChanging = () => {
  clearInterval(interval);
  interval = null; // Flush out the value of interval or dereference
};

// Event listeners for start and stop buttons
document.querySelector("#start").addEventListener("click", startColorChanging);
document.querySelector("#stop").addEventListener("click", stopColorChanging);
