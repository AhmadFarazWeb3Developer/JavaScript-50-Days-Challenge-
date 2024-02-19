const myName = "Ahmad Faraz     ";

String.prototype.trueLength = function () {
  console.log(`True length is ${this.trim().length}`);
};

myName.trueLength(); // Output: True length is 10
"Ahmad Faraz".trueLength(); // Output: True length is 10
