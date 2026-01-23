// Create a function processArray that takes:
// - An array of numbers
// - A callback function
// processArray should:
// - Loop through all elements of the array
// - Call the callback for each element
// - Store each result in a new array
// - Return the new array
// Test it with a callback that returns the square of each number.

function processArray(arr, callback) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push(callback(arr[i]));
    }
    return arr2
}

function result(arr2) {
    return arr2 ** 2;
}
console.log(processArray([1, 2, 3, 4], result));
