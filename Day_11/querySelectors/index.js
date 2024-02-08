// First way: function for adding multiple languages
const addLanguage1 = (langName) => {
  const addLi = document.createElement("li");
  addLi.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(addLi); // append language traverse the whole DOM which is not optimize the for large data appending
};
addLanguage1("C++");
addLanguage1("Python");

// Second way: use appendChild function rather than innerHTML
const addLanguage2 = (langName) => {
  const addLi = document.createElement("li");
  addLi.appendChild(document.createTextNode(langName)); // it's an optimized way
  document.querySelector(".language").appendChild(addLi);
};
addLanguage2("golang");
addLanguage2("solidity");

// Third way: Replacing the li
const replaceLang = document.querySelector("li:nth-child(2)");
const newLi = document.createElement("li");
newLi.textContent = "Java";
replaceLang.replaceWith(newLi);

// Fourth Way: using outerHTML
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>TypeScript</li>";

// Remove a language or delete a language:
const removeLang = document.querySelector("li:last-child");
removeLang.remove();
