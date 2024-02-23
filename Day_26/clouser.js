const createPerson = () => {
  let firstName = "Ahmad";
  let lastName = "Faraz";

  const getFullName = () => {
    return `${firstName} ${lastName}`;
  };

  const setFirstName = (newFirstName) => {
    firstName = newFirstName;
  };

  const setLastName = (newLastName) => {
    lastName = newLastName;
  };

  const greet = () => {
    console.log(`Hello, my name is ${getFullName()}.`);
  };

  return {
    getFullName,
    setFirstName,
    setLastName,
    greet,
  };
};

const person = createPerson();
person.greet(); // Outputs: Hello, my name is Ahmad Faraz.

person.setFirstName("Saad");
person.setLastName("Israr");

person.greet(); // Outputs: Hello, my name is Saad Israr.
