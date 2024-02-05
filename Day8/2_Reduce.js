// Array of Numbers
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// using map to find new numbers
const NewNums = myNumers.map((num) => {
  return num + 10;
});

// Chaining method
const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);
