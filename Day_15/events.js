const box = document.getElementById("box");
const input = document.getElementById("inputField");
let letterArray = [];

// Click event
box.addEventListener("click", () => {
  box.innerHTML = "You clicked the box";
});

// Double click event
box.addEventListener("dblclick", () => {
  box.innerHTML = "Double-clicked!";
});

// Mouseover event
box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "blue";
});

// Mouseout event
box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "rgb(110, 64, 154)";
});

// Mouse down event
box.addEventListener("mousedown", () => {
  box.style.backgroundColor = "green";
});

// Mouse up event
box.addEventListener("mouseup", () => {
  box.style.backgroundColor = "rgb(110, 64, 154)";
});

// Mouse move event
box.addEventListener("mousemove", () => {
  box.style.backgroundColor = "red";
});

// Mouse enter event (similar to mouseover)
box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "purple";
});

// Mouse leave event (similar to mouseout)
box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "rgb(110, 64, 154)";
});

// Context menu event
box.addEventListener("contextmenu", (event) => {
  event.preventDefault(); // Prevent default context menu
  box.innerHTML = "Context menu opened!";
  box.style.backgroundColor = "orange";
});

// Keydown event
input.addEventListener("keydown", (e) => {
  if (
    !e.ctrlKey &&
    !e.altKey &&
    !e.metaKey &&
    e.key !== "Shift" &&
    e.key !== "Control" &&
    e.key !== "Alt" &&
    e.key !== "CapsLock"
  ) {
    if (e.key === "Backspace") {
      letterArray.pop();
    } else {
      letterArray.push(e.key);
    }
    box.innerHTML = letterArray.join("");
  }
});

// Keypress event
input.addEventListener("keypress", (e) => {
  box.style.backgroundColor = "rgb(110, 64, 154)";
});

// Keyup event
input.addEventListener("keyup", (e) => {
  box.style.backgroundColor = "rgb(46, 20, 70)";
  box.style.color = "white";
});
