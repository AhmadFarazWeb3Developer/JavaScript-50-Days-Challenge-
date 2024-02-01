"use strict";

const myInfo = {
  name: "Ahmad Faraz",
  id: "myEmail@gmail.com",
  department: "BSCS",
  location: "Swat",
  isLoggedIn: false,
};

// We can freeze the whole object or any key within it
Object.freeze(myInfo.name); // This is attempting to freeze the 'name' property (Note: Freezing a single property won't work)

// ----- Adding a function to the object ----

myInfo.greeting = function () {
  console.log("Greeting");
};

console.log(myInfo.greeting()); // Outputs: Greeting

myInfo.myRole = function () {
  console.log(`My name is ${this.name} and I am a software developer`);
};

console.log(myInfo.myRole()); // Outputs: My name is Ahmad Faraz and I am a software developer
