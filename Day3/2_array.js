"use strict";

// ---- Boolean methods or returning values methods -----

// Checking the existence of an element
console.log(array1.includes(1)); // true

// Finding the index of an element
console.log(array1.indexOf(9)); // -1 (means it does not exist)

// Joining array elements into a string
const newArray = array1.join(", | ,");
console.log(newArray);

// Slice and Splice

// Slice: returns a new array, does not modify the original array
const slicedArray = array1.slice(1, 3); // slice goes from index 1 to 2
console.log("A : ", array1); // Original array remains unchanged
console.log(slicedArray); // [2, 3]

// Splice: removes and returns elements from the original array
const splicedArray = array1.splice(1, 3); // splice goes from index 1 to index 3, elements permanently removed
console.log("B : ", array1); // Original array is modified
console.log(splicedArray); // [2, 3, 4]

// Note: splice manipulates the array permanently
