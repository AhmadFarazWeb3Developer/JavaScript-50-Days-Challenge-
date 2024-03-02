const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}[]{></-=";
const allChars = upperCase + lowerCase + number + symbol;

const generatePassword = () => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  passwordBox.value = password;
};

const button = document.getElementById("btn");
button.addEventListener("click", generatePassword);

const copyPassword = () => {
  passwordBox.select();
  document.execCommand("copy");
};

const copyButton = document.getElementById("copyBtn");

copyButton.addEventListener("click", copyPassword);
