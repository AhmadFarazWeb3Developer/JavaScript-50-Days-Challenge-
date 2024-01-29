// --- String to Number ---

let marks = "88";
console.log(typeof marks);
let marksInt = Number(marks);
console.log(typeof marksInt);

// --- String to Number ---
let score = "99aa"; //
console.log(typeof score);
let scoreInt = Number(score);
console.log(typeof scoreInt);
console.log(scoreInt); // NaN: Not a Number

// --- Boolean to Number ---
let loggedIn = true;
console.log(typeof loggedIn);
let loggedInt = Number(loggedIn);
console.log(loggedInt);

// --- String to Boolean ---
let myName = "Ahmad Faraz";
console.log(typeof myName);
let myNameBool = Boolean(myName);
console.log(typeof myNameBool);
console.log(myNameBool);

let noName = "";
console.log(typeof noName);
let noNameBool = Boolean(noName);
console.log(typeof noNameBool);
console.log(noNameBool);
