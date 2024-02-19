"use strict";

const multiplyBy5 = (num) => {
  return num * 5;
};

multiplyBy5.power = 2;
console.log(multiplyBy5(2)); // Output: 10
console.log(multiplyBy5.power); // Output: 2

// A function is both a function and an object. You can use the function as a function
// and also access and modify its properties as an object.

function UserDetails(userName, score) {
  this.userName = userName;
  this.score = score;
  return this;
}

UserDetails.prototype.increment = function () {
  this.score++;
  return this.score;
};

const user = new UserDetails("John", 10);
console.log(user); // Output: UserDetails { userName: 'John', score: 10 }
console.log(user.increment()); // Output: 11

console.log(user); // Output: UserDetails { userName: 'John', score: 11 }

