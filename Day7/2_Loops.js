// While Loop

let index = 0;
// while loop
while (index <= 10) {
   console.log(`Value of index is ${index}`);
     index = index + 2
 }

 // Declaring Array
let myArray = ["flash", "batman", "superman"];

let arr = 0;
// Iterating Array elements through while loop
while (arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
}

let score = 11;
// do while loop
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);