// --- Implementation of getter and setter using old approach ---

function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    set: (value) => {
      this._email = value;
    },
    get: () => {
      return this._email;
    },
  });

  Object.defineProperty(this, "password", {
    set: (value) => {
      this._password = value;
    },
    get: () => {
      return this._password.toUpperCase();
    },
  });
}

const user = new User("myEmail@gmail.com", "secure");

console.log("Email:", user.email);
console.log("Password:", user.password);
