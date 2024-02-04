// Array
const arr = [1, 2, 3, 4, 5];
// Iterating Array elements through for of loop
for (const num of arr) {
  console.log(num);
}

const greetings = "Hello world!";
// Iterating String elements through for of loop
for (const greet of greetings) {
  console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// Iterating map key&value through for of loop
for (const [key, value] of map) {
 console.log(key, ':-', value);
}

// object
const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

 for (const [key, value] of myObject) {
     console.log(key, ':-', value);

}