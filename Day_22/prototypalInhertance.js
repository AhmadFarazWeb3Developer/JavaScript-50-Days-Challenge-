const teacher = {
  isAvailable: true,
  PHD: true,
};

const students = {
  areHappy: false,
  areExcited: true,
};

// Set the prototype of students to teacher
Object.setPrototypeOf(students, teacher);

// But it does not copy the values into the student object

const { isAvailable, PHD, areHappy, areExcited } = students;

console.log(isAvailable, PHD); // Output: true true
