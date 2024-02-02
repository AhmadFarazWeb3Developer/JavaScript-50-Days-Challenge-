"use strict";

// ----  Second way of function declaration which is more preferable than the previous ----

const addOne = function (val) {
  return val + 1;
};

console.log(addOne(12)); // Output : 13

// The 'this' keyword refers to the global object in browsers, which is 'window'.
// The 'this' keyword works inside objects.
