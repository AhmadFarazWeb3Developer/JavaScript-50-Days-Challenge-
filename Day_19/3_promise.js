const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log({ UserName: "myEmail@gmail.com", password: "Secret" });
    resolve({ UserName: "myEmail@gmail.com", password: "Secret" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user); // { UserName: 'myEmail@gmail.com', password: 'Secret' }
});
