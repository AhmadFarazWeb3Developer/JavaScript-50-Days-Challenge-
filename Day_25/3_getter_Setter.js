// --- Creating an object using a factory function ---

const UserFactory = () => {
  let _email = "myEmail@gmail.com";
  let _password = "secure";

  return {
    set password(value) {
      _password = value;
    },
    get password() {
      return _password.toUpperCase();
    },
    set email(value) {
      _email = value;
    },
    get email() {
      return _email;
    },
  };
};

const user = UserFactory();

console.log("Email:", user.email);
console.log("Password:", user.password);
