/*-------In JavaScript, the call method is used to invoke
a function with a specified this value and individual 
arguments .Set value in the current context----- */

function setUsername(userName) {
  this.userName = userName;
  console.log(`Username is ${this.userName}`);
}
function setEmail(email) {
  this.email = email;
  console.log(`Email is ${this.email}`);
}
function setPassword(password) {
  this.password = password;
  console.log(`Password is ${this.password}`);
}
function createUser(userName, email, password) {
  setUsername.call(this, userName);
  setEmail.call(this, email);
  setPassword.call(this, password);
}
const user = new createUser("Ahmad Faraz", "myEmail@gamil.com", "secure");
console.log(user);
/* ---------------------------------Output----------------------------------
Username is Ahmad Faraz
Email is myEmail@gamil.com   
Password is secure
createUser {
  userName: 'Ahmad Faraz',   
  email: 'myEmail@gamil.com',
  password: 'secure'
}*/
