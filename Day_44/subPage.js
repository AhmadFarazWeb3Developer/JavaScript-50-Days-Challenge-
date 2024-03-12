const scriptURL =
  "https://script.google.com/macros/s/AKfycbzqulAKhF94WCfn3MgVK7PFWJ3vhflYyMaz2gNSJHGrYyo-GWiyB8zUlXVJ0yR3kYdHjQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.style.display = "block";
      msg.innerHTML = "Thank you for Subscribing";
      setTimeout(() => {
        msg.innerHTML = "";
        msg.style.display = "none";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
