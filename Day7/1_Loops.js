// for loop
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is best number");
  }
  console.log(element);
}
// we can't access element outside the loop b/c element is declared inside the loop
// console.log(element);

// Nested loop
for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + "*" + j + " = " + i * j);  }
}
// Declaring Array
let myArray = ["Ahamad", "Ali", "Saad"];
console.log(myArray.length);
// Iterating Array elements through for loop
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    break;  }
  console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}
