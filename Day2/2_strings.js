// 1. Initialization of a string directly
const myName = "Ahmad Faraz";
const repoCount = 9;
console.log(`My name is ${myName} and my repo count is ${repoCount}`);

// 2. Initialization of a string using JavaScript objects
const myEmail = new String("myEmail@gmail.com");
console.log(myEmail); // Returns an object having each letter associated with its key
console.log(myEmail[0]); // m
console.log(myEmail[5]); // i

// Methods of String
console.log(myEmail.length);
console.log(myEmail.toUpperCase()); // Does not change the original value
console.log(myEmail.charAt(4)); // a: charAt method gives us the char at a specific index
console.log(myEmail.indexOf("a")); // 4: indexOf gives us the index of a char

const String1 = myEmail.substring(0, 4); // It takes negative values
console.log(String1);

const String2 = myEmail.slice(-8, 18); // It can take negative values as well, starts negative from the end of the string
console.log(String2);

const String3 = myEmail.trim(); // Trim removes the space from both the start and end of the string
// trimStart() and trimEnd
console.log(String3);
const url = "www.linkedin%20org";
console.log(url.replace("%20", ".")); // Replaces the string with another string
console.log(url.includes(20)); // Checks whether "20" exists in the URL or not

const String4 = "Ahmad-Faraz-Webdeveloper";
console.log(String4.split("-")); // Makes the array from the string based on '-'
