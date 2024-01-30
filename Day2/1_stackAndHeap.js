"use strict";

// Primitive data types are stored on the Stack

// ---- Stack ---
let oldLocation = "Pakistan";
let newLocation = oldLocation;
newLocation = "UAE";
console.log("Old Location: ", oldLocation); // Pakistan
console.log("New Location: ", newLocation); // UAE

// Non-Primitive data types are stored on the Heap
// ----- Heap ------
let userOne = {
  email: "myEmail@gmail.com",
  location: "Pakistan",
};

let userTwo = userOne;
userTwo.location = "Peshawar"; // This will update userOne as well

console.log("User One: ", userOne);
