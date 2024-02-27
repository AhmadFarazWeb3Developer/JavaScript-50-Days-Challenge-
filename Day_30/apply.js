/*
----The apply() method takes arguments as an array----- .

---- The call() method takes arguments separately ----- .

Definition  :-   The Function.prototype.apply() method allows you to call a function with a given this value and 
arguments provided as an array.Here is the syntax of the apply() method:
fn.apply(thisArg, [args]);

-> The apply() method is very handy if you want to use an array instead of an argument list.
*/

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.city;
  this.country;
  this.myDetails = function (city, country) {
    this.city = city;
    this.country = country;
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  };
}

const person1 = new Person("Ahmad", "Faraz");
console.log(person1.myDetails.apply(person1, ["Swabi", "Pakistan"]));

console.log(person1);

// Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.

console.log(Math.max.apply(null, [1, 2, 3])); // 3
console.log(Math.min.apply(null, [1, 2, 3])); // 1
console.log(Math.abs.apply(null, [-3])); // 3
console.log(Math.sqrt.apply(null, [12])); // 3.4641016151377544
console.log(Math.random.apply(null, [3])); // 0.17256868967332806
