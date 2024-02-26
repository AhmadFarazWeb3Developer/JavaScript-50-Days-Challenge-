// Variable declarations are hoisted to the top, but only the declaration is hoisted, not the initialization.
var a;
console.log("Value of a: ", a); // undefined
a = 5;

/* With let and const, there is temporal dead zone until the variable is declared,
  so accessing it before declaration throws an error */

// let b;
// console.log("Value of b: ", b);
// b = 10;

// const c;
// console.log("Value of c: ", c);
// c = 15;

/* Function declarations are hoisted in their entirety, so you can call a function 
 before it's declared in the code. */

myName("Ahmad Faraz"); // Ahmad Faraz

function myName(name) {
  console.log(`My name is ${name}`);
}

// Function expressions are not hoisted like function declarations.

// yourName("Saad Israr"); // TypeError: yourName is not a function

// To fix the error, define yourName as a function expression.
const yourName = (name) => {
  console.log(`Your name is ${name}`);
};
yourName("Saad Israr"); // Saad Israr
