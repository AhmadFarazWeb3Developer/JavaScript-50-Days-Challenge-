"use strict";

// ---- Passing Array to a function ----

const array = [12, 3, 4, 5, 6];

function passArray(myArray) {
  return myArray;
}

console.log(passArray(array)); // Output : [12, 3, 4, 5, 6]

// ---- Passing an array and an index ----

function getArrayElement(array, index) {
  return array[index];
}
s;

const retrievedValue = getArrayElement(array, 2);
console.log(retrievedValue); // Output: 4
