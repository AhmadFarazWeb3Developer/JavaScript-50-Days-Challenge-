"use strict";
let date = new Date();

console.log(date.toString()); // Tue Jan 30 2024 12:51:22 GMT+0500 (Pakistan Standard Time)
console.log(date.toDateString()); // Tue Jan 30 2024
console.log(date.toLocaleString()); // 30/01/2024, 12:51:22 PM
console.log(date.toISOString()); // 2024-01-30T07:52:23.567Z
console.log(date.toJSON()); // 2024-01-30T07:52:23.567Z

console.log(date.getFullYear()); // 2024
console.log(date.getMonth()); // 0
console.log(date.getDay()); // 2
console.log(date.getHours()); // 12
console.log(date.getMinutes()); // 56
console.log(date.getSeconds()); // 3
console.log(date.getMilliseconds()); // 388

const myCreatedDate = new Date(2024, 0, 30);
console.log(myCreatedDate.toDateString()); // Tue Jan 30 2024

// Months start from 0 in JavaScript
const timeStamp = Date.now();
console.log(timeStamp);
