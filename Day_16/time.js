let stopTime;
let stopCounter;

const changeText = () => {
  document.getElementById("box").innerHTML = `<h1>My Name is Unknown</h1>`;
};

// Set a timeout to call the changeText function after 10 seconds (10000 milliseconds)
stopTime = setTimeout(() => {
  changeText();
  clearInterval(stopCounter);
}, 10000);

document.getElementById("btn").addEventListener("click", () => {
  if (stopTime) {
    clearTimeout(stopTime);
    clearInterval(stopCounter);
    stopTime = null;
    document.getElementById("btn").textContent = "Resume";
  } else {
    // If timeout is stopped, start it again
    stopTime = setTimeout(() => {
      changeText();
      clearInterval(stopCounter);
    }, 10000);
    stopCounter = setInterval(counter, 1000);
    document.getElementById("btn").textContent = "Stop";
  }
});

let count = 1;
const counter = () => {
  if (count <= 10) {
    count++;
    document.getElementById("counter").innerHTML = `Time : ${count}`;
  }
};

stopCounter = setInterval(counter, 1000);
