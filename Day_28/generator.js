// ------ GENERATORS -------

/*Generators are useful for creating iterators in JavaScript.
 They allow you to generate a sequence of values lazily, meaning
 the values are produced only as needed, which can save memory 
  and processing resources */

function* myGenerator() {
  let i = 0;
  while (true) {
    const reset = yield i++; // Yield the current value of i and receive a reset signal
    if (reset) {
      i = 0;
      yield i++;
    }
  }
}

const generator = myGenerator();

console.log(generator.next()); // {value: 0, done: false}
console.log(generator.next().value); // 1
console.log(generator.next().done); // false

// Sending a reset signal to the generator
console.log(generator.next(true)); // Output: { value: 0, done: false }
