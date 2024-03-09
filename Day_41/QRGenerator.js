const API_URL =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const generateQRBtn = document.getElementById("generateQRBtn");

const generateQR = () => {
  if (qrText.value.length > 0) {
    qrImage.src = API_URL + qrText.value;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
};

generateQRBtn.addEventListener("click", () => {
  generateQRBtn.classList.add("button-clicked");
  generateQRBtn.style.background = "#292c7d";
  generateQRBtn.style.background = "#292c7d";
  setTimeout(() => {
    generateQRBtn.classList.remove("button-clicked");
    generateQRBtn.style.background = "#494eea";
  }, 400);
  generateQR();
});
