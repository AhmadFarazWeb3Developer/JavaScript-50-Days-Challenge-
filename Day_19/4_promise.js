const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "myEmail@gmail.com", password: "Secure" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user); // { userName: 'myEmail@gmail.com', password: 'Secure' }
    return user.userName;
  })
  .then((userName) => {
    console.log("User Name:", userName); // User Name: myEmail@gmail.com
  })
  .catch((error) => {
    console.error(error); // Error: Something went wrong
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected "); // The promise is either resolved or rejected
  });
