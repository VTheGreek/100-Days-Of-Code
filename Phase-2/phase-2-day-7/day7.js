// Create a function that processes an array of numbers using multiple callbacks and returns structured results.
// The function must:
// Accept:
// - an array of numbers
// - an array of callback functions
// For each number:
// - apply all callbacks
// - store the results with some description
// The final output should be:
// - a new array
// - where each element is an object
// containing:
// - the original value
// - the callback results
// Test the function using:
// - callbacks that return numbers
// - callbacks that return booleans

function applyCallbacks(arr, callbacks) {
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    let obj = {
        value: arr[i],
        results: []
    }

    for (let j = 0; j < callbacks.length; j++) {
      obj.results.push(callbacks[j](arr[i]));
    }
    arr2.push(obj);
  }
  return arr2;
}

const callbacks = [
    x => x * 2,          
    x => x ** 2,         
    x => x % 2 === 0     
];

console.log(applyCallbacks([1, 2, 3, 4], callbacks)); 