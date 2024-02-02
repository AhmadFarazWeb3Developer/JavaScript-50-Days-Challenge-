"use strict";
// ---- Scope in JavaScript ----

let a = 10;
const b = 20;
let c = 30;
if (true) {
  a = 40;
  c = 20;
}
console.log(a); // Output : 40
console.log(b); // Output : 20
console.log(c); // Output : 20
// Note: 'var' should be avoided during programming to prevent ambiguity.

// ---- Basic closures ----

// In the case of closures, a child function can access variables from its parent, but the parent cannot access the child variables.
function one() {
  const name = "Ahmad Faraz";
  console.log(name);

  function two() {
    const email = "myEmail@gmail.com";
    console.log(email);
  }
  // Uncommenting the line below would result in an error because 'email' is not accessible here.
  // console.log(email);
  two();
}
one();
