// Create a function that processes an array of numbers using boolean (filter-like) callbacks and transform callbacks.
// The function must:
// Accept:
// - an array of numbers
// - a check callback (returns true or false)
// - a transform callback (returns a new value)
// For each number in the array:
// - first apply the check callback
// - only if the result is true
// - apply the transform callback
// - store the result
// The final output should be:
// - a new array
// - containing only the transformed values that passed the check
// Test the function using:
// - different check callbacks (e.g. even numbers, greater than 10)
// - different transform callbacks (e.g. double, square)

function processNumbers(arr, checkCallback, transformCallback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (checkCallback(arr[i])) {
      result.push(transformCallback(arr[i]));
    }
  }

  return result;
}

const isEven = x => x % 2 === 0;
const greaterThanTen = x => x > 10;

const double = x => x * 2;
const square = x => x ** 2;

console.log(processNumbers([1, 2, 3, 4, 5], isEven, double));

console.log(processNumbers([5, 10, 15, 20], greaterThanTen, square));