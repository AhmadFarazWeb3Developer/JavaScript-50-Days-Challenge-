const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });