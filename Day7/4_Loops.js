// object
const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};
// for in loop
for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}
// Array
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(programming[key]);
}
// Map
 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr', "France")
 map.set('IN', "India")
// Iterating map through for in loop
 for (const key in map) {
     console.log(key);
 }