let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");
let imagePaths = [
  "images/image1.png",
  "images/image2.png",
  "images/image3.png",
];

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    productImg.src = imagePaths[i];
    for (let bt of btn) {
      bt.classList.remove("active");
    }
    this.classList.add("active");
  };
}

let redColor = document.getElementsByClassName("color-1");
let greenColor = document.getElementsByClassName("color-2");
let blueColor = document.getElementsByClassName("color-3");
let blackColor = document.getElementsByClassName("color-4");
let submitBtnColor = document.querySelector("button");

redColor[0].onclick = function () {
  submitBtnColor.style.background = "red";
};

greenColor[0].onclick = function () {
  submitBtnColor.style.background = "#05b261";
};

blueColor[0].onclick = function () {
  submitBtnColor.style.background = "blue";
};

blackColor[0].onclick = function () {
  submitBtnColor.style.background = "black";
};
