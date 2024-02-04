// Array
const coding = ["js", "ruby", "java", "python", "cpp"];
// Iterating each element of array through foreach loop
 coding.forEach( function (val){
     console.log(val);
 } )
 coding.forEach( (item) => {
     console.log(item);
 } )
 function printMe(item){
    console.log(item);
}
// printing function through forEach loop
coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )
// Array of objects
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js", },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];
// Iterating Objects in array
myCoding.forEach((item) => {
  console.log(item.languageName);
});