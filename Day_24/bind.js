// Define the React class
class React {
  constructor() {
    this.library = "React";
    this.server = "https://localhost:3000";
    const btn = document.getElementById("btn");
    btn.addEventListener("click", this.handleClick.bind(this));
  }
  handleClick() {
    console.log("Button is clicked");
    console.log("Server is requested on : ", this.server);
    console.log("Library used for request : ", this.library);
  }
}

console.log("-- CONSOLE IS RUNNING --");

// Create an instance of the React class
const app = new React();
