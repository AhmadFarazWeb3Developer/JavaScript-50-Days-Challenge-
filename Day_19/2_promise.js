// Second way of creating promise

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 is completed");
    resolve();
  }, 1000);
})
  .then(() => {
    console.log("Promise 2 Consumed");
  })
  .catch((error) => {
    console.error("Promise 2 Failed with error:", error);
  });
