"use strict";

// Merging two objects using spread Operator
const Name = {
  name: "Ahmad Faraz",
};

const Id = {
  id: 22344,
};

const mergeDetails = { ...Name, ...Id };

console.log(mergeDetails); // Outputs: { name: 'Ahmad Faraz', id: 22344 }
console.log(Object.keys(mergeDetails)); // Outputs: [ 'name', 'id' ]
console.log(Object.values(mergeDetails)); // Outputs: [ 'Ahmad Faraz', 22344 ]

console.log(mergeDetails.hasOwnProperty("class")); // Outputs: false
