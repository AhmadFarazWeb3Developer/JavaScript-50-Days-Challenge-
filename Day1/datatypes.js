"use strict";

// Primitive data types, known as call-by-value data types:
// 1. number
// 2. bigInt
// 3. string
// 4. boolean
// 5. null => It's a standalone value, which means empty
// 6. undefined
// 7. symbol => Used for uniqueness

const myId = Symbol("123");
const yourId = Symbol("123");
console.log(myId === yourId); // false

// The type of null is object.
// The type of undefined is undefined.

// Non-primitive types, known as reference data types:
// 1. functions
// 2. arrays
// 3. objects
