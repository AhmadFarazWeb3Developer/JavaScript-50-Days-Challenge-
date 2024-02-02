"use strict";

// Note: Arrow functions were introduced in ES6 and onwards.

// ---- Arrow function ----

const hello = (name) => {
  const greeting = "Greetings";
  console.log(`${greeting} to all of you from ${name}`);
};

hello("Ahmad Faraz"); // Output : Greetings to all of you from Ahmad Faraz

// ---- Implicit return function ----

const myName = (name) => name;
console.log(myName("Saad Israr")); // Output : Saad Israr

// Implicit return is used when we eliminate the brackets and 'return' keyword from the arrow function,
// and the function assumes that it has only a single line of code.

// Returning an object in implicit return
const myObject = () => ({ name: "Ahmad Faraz" });
console.log(myObject()); // Output : { name: 'Ahmad Faraz' }
