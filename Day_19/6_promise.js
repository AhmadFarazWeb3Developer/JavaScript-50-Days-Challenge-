const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "JavaScript", password: "1234HTMLCSSJS" });
    } else {
      reject("Error: Something went wrong with JavaScript");
    }
  }, 1000);
});

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error); 
  }
}

getAllUsers();
