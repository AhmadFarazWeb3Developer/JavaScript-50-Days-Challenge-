const selectField = document.getElementById("selectField");
const selectText = document.getElementById("selectText");
const options = document.getElementsByClassName("options");
const list = document.getElementById("list");
const arrowIcon = document.getElementById("arrowIcon");
const visitBtn = document.getElementById("visitBtn");
selectField.addEventListener("click", () => {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
});

//  ISSUE IN THE TRIGGRING THE HREF INTHE ANCHOR TAG DYNAMICALLY .

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    const link = document.createElement("a");
    if (selectText.textContent === "Facebook") {
      link.href = "https://web.facebook.com/";
    } else if (selectText.textContent === "Youtube") {
      link.href = "https://youtube.com/";
    } else if (selectText.textContent === "Instagram") {
      link.href = "https://instagram.com/";
    } else if (selectText.textContent === "Twitter") {
      link.href = "https://twitter.com/";
    } else if (selectText.textContent === "Pinterest") {
      link.href = "https://pinterest.com/";
    }

    link.target = "_blank";

    visitBtn.appendChild(link);
    console.log(visitBtn);
  };
}
