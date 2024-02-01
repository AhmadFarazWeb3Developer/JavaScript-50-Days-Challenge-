"use strict";

// We declare objects in two ways.
// Objects in JavaScript have keys and values. JavaScript allows us to name our objects using variables.

// 1. Object literals (many instances are created in literal notation)
const mySymbol = Symbol("key1");

const myInfo = {
  name: "Ahmad Faraz",
  id: "myEmail@gmail.com",
  department: "BSCS",
  mySymbol: "symbol1", // This is a regular property with key 'mySymbol'
  [mySymbol]: "symbol2", // Treating 'mySymbol' as a symbol declared outside the object
  location: "Swat",
  isLoggedIn: false,
};

console.log(myInfo.name); // First way to print and access an object property
console.log(myInfo["name"]); // Second way to print and access an object property
console.log(myInfo.mySymbol); // Outputs "symbol1"
console.log(myInfo[mySymbol]); // Outputs "symbol2"

// 2. Using constructor (in case of constructor, a singleton is created)
Object.create;
