"use strict";

// Declaring an object using constructor
const myInfo = new Object();

myInfo.name = "Ahmad Faraz";
myInfo.id = "myEmail@gmail.com";
myInfo.department = "BSCS";
myInfo.location = "Swat";
myInfo.isLoggedIn = false;

console.log(myInfo); // Outputs: { name: 'Ahmad Faraz', id: 'myEmail@gmail.com', department: 'BSCS', location: 'Swat', isLoggedIn: false }

// Merging two objects using Object.assign()
const Name = {
  name: "Ahmad Faraz",
};

const Id = {
  id: 22344,
};

// const mergeDetails = Object.assign(Name, Id); // Modifies the 'Name' object (not recommended)
const mergeDetails = Object.assign({}, Name, Id); // This way is preferable, creates a new object

console.log(mergeDetails); // Outputs: { name: 'Ahmad Faraz', id: 22344 }
