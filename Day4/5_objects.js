"use strict";

// --- Object destructuring is just syntactical sugar ---- .

// It improves readability by eliminating the need to write the object name with the key.

const course = {
  courseName: "JavaScript Mastery",
  price: "2000 INR",
  courseInstructor: "Hitesh",
};

// Accessing object key directly using destructuring
const { courseName } = course;
console.log(courseName); // Outputs: JavaScript Mastery

// Creating a nickname for a lengthy key (courseInstructor)
const { courseInstructor: instructor } = course;
console.log(instructor); // Outputs: Hitesh
