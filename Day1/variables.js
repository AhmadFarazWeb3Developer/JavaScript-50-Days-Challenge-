
"use strict"; // Treat JavaScript as the latest version in the browser.

// Three ways to declare a variable:

// const: Value cannot be changed; otherwise, an error will be thrown.
const id = 214551;

// let: Mostly used nowadays in JavaScript to avoid ambiguity like function scoping, etc.
// Used as a local variable.
let field = "Web development";
var city = "Swabi";

// var: Should not be used because it has issues with function scoping.
console.log("ID: ", id, "\nField: ", field, "\nCity: ", city);
// Prints the values in a table format.
console.table([id, field, city]);
