const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  //   console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id == "limegreen") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "teal") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "steelblue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "coral") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
