"use strict";

// ---- Nullish Coalescing Operator (??) ----

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;

console.log(val1); // Output: 10

// ---- Ternary Operator ----

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); // Output: more than 80
