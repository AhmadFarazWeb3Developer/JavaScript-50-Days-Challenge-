"use strict";

// ---- Immediately Invoked Function Expression (IIFE) ----

// 1. Named IIFE

(function namedDatabaseIIFE() {
  console.log("First Database Connected Successfully!");
})(); // Output : First Database Connected Successfully!

// To avoid global scope variable pollution, we use IIFE.

// 2. Unnamed IIFE

((dbName) => {
  console.log(`${dbName} Database Connected Successfully!`);
})("Second"); // Output : Second Database Connected Successfully!

// Remember to use semicolons after IIFE calls, especially when using two IIFEs.
