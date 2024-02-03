"use strict";

// ---- Truthiness Check ----

const userEmail = [];

if (userEmail.length > 0) {
  console.log("Got user email");
} else {
  console.log("Don't have user email"); // Output: Don't have user email
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty"); // Output: Object is empty
}

