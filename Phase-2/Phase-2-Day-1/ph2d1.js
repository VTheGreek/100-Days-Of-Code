// Create a function that processes an array of numbers using multiple callbacks.
// The function must:
// Accept:
// - an array of numbers
// - a second array containing functions (callbacks)
// For each number in the array:
// - apply all callbacks to that number
// - collect the results
// The final output should be:
// - a new array
// - where each element describes the results of the callbacks for the corresponding number
// Test the function using:
// - callbacks that return numbers
// - callbacks that return booleans

function applyCallbacks(arr, callbacks) {
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        let results = [];
        for (let j = 0; j < callbacks.length; j++) {
            results.push(callbacks[j](arr[i]));
        }
        arr2.push(results);
    }

    return arr2;
}

const callbacks = [
    x => x * 2,          
    x => x ** 2,         
    x => x % 2 === 0     
];

console.log(applyCallbacks([1, 2, 3, 4], callbacks));