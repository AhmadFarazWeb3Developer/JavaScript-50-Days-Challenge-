"use strict";
// ------------ ARRAY -----------
/*
1. Arrays in JavaScript are resizable.
2. Arrays in JavaScript make shallow copies (whose copies share the same references).
3. Arrays in JavaScript can contain a mixture of different contents or data types.
*/

const array1 = [1, 2, 3, 4, 5];
const array2 = ["Ahmad Faraz", 215154, 4, "C"];
const array3 = ["a", "b", "c", "d", "e", "f"];

// ---- Methods in array ----

// Push method: inserts element at the end of the array
array1.push(12);
console.log(array1); // [ 1, 2, 3, 4, 5, 12 ]

// Pop method: removes element from the end
array1.pop();
console.log(array1); // [1, 2, 3, 4, 5]

// Unshift method: adds element to the start of the array (avoid for large data)
array1.unshift(0);
console.log(array1); // [ 0, 1, 2, 3, 4, 5 ]

// Shift method: removes elements from the start of the array
array1.shift();
console.log(array1); // [1, 2, 3, 4, 5];
