// --- Optimization in JavaScript ---
// Continuous and holey arrays have three types:

// 1. SMI (small integer)
// 2. Packed Elements
// 3. Double (float, string, function)

// If the array is holey or continuos it has different optimizations:

const arr1 = [1, 2, 3, 4, 5]; // Packed SMI elements are the best type of array; it contains only numbers.

arr1.push(6.0); // arr1 becomes packed double.
arr1.push("23"); // arr1 becomes packed elements.

// Now, if we move towards the removal of double and string elements,
//  it's not possible to reclaim memory efficiently.

//------ Holey arrays have empty elements within the array -------

// Empty positions reduce optimization.

// Returning undefined is a costly operation.
// Holes are very expensive due to hasOwnProperty if there is a hole.
// SMI optimization > Double > Packed.

// Packed arrays can contain any type of data.
const array1 = new Array(3);
const array2 = []; // Better than array1.
