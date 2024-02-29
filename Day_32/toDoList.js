const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const btn = document.getElementById("btn");

const addTask = () => {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData(); //save the updated data in local storage
};

btn.addEventListener("click", () => {
  addTask();
});

inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});




listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};
showTask();
