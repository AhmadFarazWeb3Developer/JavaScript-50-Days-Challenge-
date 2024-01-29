// JavaScript allows comparisons with different data types

console.log("2" > 0); // true: because "2" is converted to 2
console.log(0 < 2); // false

// Comparison converts null to 0, and equality check does not do it
console.log(null > 0); // false
console.log(null <= 0); // true
console.log(null == 0); // false
console.log(null >= 0); // true

// In case of undefined, the output is always true

console.log(undefined == 0);
console.log(undefined <= 0);
console.log(undefined >= 0);
console.log(undefined > 0);

// Strict check

console.log("2" === 2); // false
