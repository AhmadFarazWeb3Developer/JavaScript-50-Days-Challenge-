//Array
const myNumbers = [10, 20, 30];

const initialValue = 0;
// reduce function with simple function mehod
const myTotal = myNumbers.reduce(function (accamulater, currentvalue) {
  console.log(`accumalater:${accamulater} and currentValue:${currentvalue}`);
  return accamulater + currentvalue;
}, initialValue);
// reduce functoin with arrow function method
const Total = myNumbers.reduce((acc,currValue)=>acc+currValue,0)
console.log(Total);
// Array of Objects
const shoppingCart = [
  {
    itemName: "JavaScript Course",
    price: 1000,
  },
  {
    itemName: "React Course",
    price: 1000,
  },
  { itemName: "Express Course",
    price: 1000,
  }];
// reduce function to calculate total value
const priceToPay=shoppingCart.reduce((acc,item)=>item.price,0)
console.log(priceToPay);
