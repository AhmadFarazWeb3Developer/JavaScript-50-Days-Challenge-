// --- New approach for getter and setter using ES6 class syntax ---

class User {
  constructor(email, password) {
    this._email = email;
    this._password = password;
  }

  set password(value) {
    this._password = value;
  }
  get password() {
    return this._password.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }
  get email() {
    return this._email.toUpperCase();
  }
}
const user = new User("myEmail@gmail.com", "secure");

console.log("Password:", user.password);
