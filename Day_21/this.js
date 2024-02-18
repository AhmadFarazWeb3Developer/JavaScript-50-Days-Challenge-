/* JavaScript is a prototypal language, 
not OOP - based; its syntax includes syntactic sugar for OOP.
*/

const myObj = {
  myName: "Ahmad Faraz",
  email: "myEmail@gmail.com",
  password: "secure",
  life: true,
  myDetails: function () {
    // Arrow function does not support the 'this' keyword; it uses lexical scoping.
    console.log(`My name is ${this.myName} and mastering JavaScript.`);
  },
};

myObj.myDetails();
