function User(name, email, country) {
  this.name = name;
  this.email = email;
  this.country = country;
  this.greeting = function () {
    console.log(`My name is ${this.name} and greeting you `);
  };
  return this;
}

const userOne = new User("Ahmad Faraz", "myEmail@gmail.com", "Pakistan");
console.log(userOne.greeting);
console.log(userOne instanceof User); // true

const userTwo = new User("Saad", "hisEmail@gmail.com", "Pakistan");

console.log(userTwo);
