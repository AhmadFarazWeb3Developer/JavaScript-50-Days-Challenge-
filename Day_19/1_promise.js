// First way of creation: promise creation

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 1 is completed");
    resolve("Success"); // You can pass a value to the resolve function if needed
  }, 1000);
});

// Promise consumption
// Resolve is connected with .then(), and you can handle success and failure with .then() and .catch()

promiseOne
  .then((result) => {
    console.log("Promise 1 Consumed with result:", result);
  })
  .catch((error) => {
    console.error("Promise 1 Failed with error:", error);
  });
