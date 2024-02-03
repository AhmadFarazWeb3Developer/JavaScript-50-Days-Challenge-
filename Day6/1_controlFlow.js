"use strict";

// Function to check login status
function checkLogin(check) {
  if (check) {
    console.log("Logged In!");
  } else {
    console.log("Not Logged In!");
  }
}
checkLogin(true); // Output: Logged In !

// Variables
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// Conditional checks
if (userLoggedIn && debitCard && 2 === 3) {
  console.log("Allow to buy course");
} else {
  console.log("Do not allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
} else {
  console.log("User not logged in");
}
