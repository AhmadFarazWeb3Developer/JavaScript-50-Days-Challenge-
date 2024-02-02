"use strict";
// ---- Simple function ----
function myInfo() {
  console.log("My name is Ahmad Faraz, and I am mastering JavaScript");
}
myInfo(); // Output : My name is Ahmad Faraz, and I am mastering JavaScript

// ---- Function using conditions ----

function myDescription(name, email) {
  if (name === undefined && email === undefined) {
    console.log("Enter your name");
    console.log("Enter your Email");
  } else if (!name) {
    console.log("Enter your name");
  } else if (!email) {
    console.log("Enter your Email");
  } else {
    console.log(`My Name is ${name}`);
    console.log(`My Email is ${email}`);
  }
}
myDescription("Ahmad Faraz", "myEmail@gmail.com"); // Output : My Name is Ahmad Faraz
//                                                    Output : My Email is myEmail @gmail.com

// ---- Function using default arguments ----

function sum(num1 = 0, num2 = 0) {
  return num1 + num2;
}
const result = sum();
console.log(`Sum is ${result}`); // Output : Sum is 0

