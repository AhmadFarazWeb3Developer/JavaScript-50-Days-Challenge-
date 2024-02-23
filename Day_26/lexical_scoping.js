const init = () => {
  let myName = "Ahmad Faraz";
  const displayName = () => {
    console.log(myName);
  };
  displayName();
};

const outer = () => {
  let userName = "Saad Israr";

  const inner = () => {
    console.log(userName);
  };

  inner();
};

outer();

// Error: userName is not accessible outside the outer function
// If you want to access userName outside, you need to declare it in a scope accessible from here.
// For example, if you want to access it globally, declare it outside any function.
// If you want to access it only within a certain scope, return it 
// from a function and capture it when calling that function.
// Otherwise, you cannot access it directly from here.
