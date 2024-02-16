const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "JavaScript", password: "1234HTMLCSSJS" });
    } else {
      reject("Error: Something went wrong with JavaScript");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

consumePromiseFive();
