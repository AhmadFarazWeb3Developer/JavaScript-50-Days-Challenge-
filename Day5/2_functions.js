"use strict";

// ---- Rest operator in function parameters when we don't know the exact number of parameters ----

function calculateCartPrice(num1, num2, ...nums) {
  console.log(num1, num2);
  return nums;
}

console.log(calculateCartPrice(12, 34, 56)); // Output : [12, 34, 56]

// ---- Passing an Object to a function ----

const myInfo = {
  name: "Ahmad Faraz",
  email: "myEmail@gmail.com",
};

function passObject(infoObject) {
  console.log(
    `My name is ${infoObject.name} and my email is ${infoObject.email}`
  );
}

passObject(myInfo); // Output: My name is Ahmad Faraz and my email is myEmail@gmail.com
