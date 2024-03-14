let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

let inputName = document.getElementById("input-name");
let inputPhone = document.getElementById("input-phone");
let inputEmail = document.getElementById("input-email");
let inputMessage = document.getElementById("input-message");
let submitBtn = document.getElementById("submitBtn");

const validateName = () => {
  inputName = document.getElementById("input-name").value;
  if (inputName.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!inputName.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  } else {
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
};

inputName.onkeyup = () => {
  validateName();
};

const validatePhone = () => {
  inputPhone = document.getElementById("input-phone").value;
  if (inputPhone.length === 0) {
    phoneError.innerHTML = "Phone is required";
    return false;
  }

  if (inputPhone.length !== 11) {
    phoneError.innerHTML = "Phone no should be 11 digits";
    return false;
  }

  if (!inputPhone.match(/^[0-9]{11}$/)) {
    phoneError.innerHTML = "Phone no should contain only digits";
    return false;
  } else {
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
};

inputPhone.onkeyup = () => {
  validatePhone();
};

const validateEmail = () => {
  const inputEmail = document.getElementById("input-email").value;
  if (inputEmail.length === 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!inputEmail.match(/^[A-Za-z\._\-0-9]+[@][A-Za-z]+\.[a-z]{2,4}$/)) {
    emailError.innerHTML = "Invalid Email";
    return false;
  } else {
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
};

inputEmail.onkeyup = () => {
  validateEmail();
};
const validateMessage = () => {
  const inputMessage = document.getElementById("input-message").value;
  let required = 30;
  let left = required - inputMessage.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters are required";
    return false;
  }

  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
};
inputMessage.onkeyup = () => {
  validateMessage();
};

const validateForm = () => {
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePhone() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "please fix the error";

    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  } else {
    return true;
  }
};

submitBtn.addEventListener("click", (e) => {
  if (validateForm()) {
    alert("Form Submitted");
  }
  e.preventDefault();
});
