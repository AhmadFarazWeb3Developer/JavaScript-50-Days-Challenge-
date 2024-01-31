"use strict";

// ----- Merging array methods -----

// 1. Concat method
const array1 = ["Ahmad Faraz", "Saad Israr", "Saqib Khan", "Ali Haider"];
const array2 = ["Salahudeen", "Usman", "Khilji", "Quaid e Azam"];
const array3 = array1.concat(array2);
console.log(array3);

// 2. Spread operator
const spreadArray = [...array1, ...array2]; // Spreading array1 over array2
console.log(spreadArray);

// Example with a nested array
const nestedArray = [1, 2, 3, [4, 5, 6], 6, 7, 8, 9, [10, 12, [13, 14, 15]]];

// Using the flat method to create a single array from a nested array (passing Infinity for unlimited depth)
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray); // [  1,  2,  3, 4,  5,  6, 6,  7,  8, 9, 10, 12,13, 14, 15]
