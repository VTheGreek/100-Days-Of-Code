// Create a small JavaScript program that processes numbers using callbacks.
// The program must include:
// One general function that:
// - accepts an array of numbers
// - accepts a callback function
// - applies the callback to each element of the array
// - returns a new array with the results
// At least three different callback functions:
// - one that modifies the numbers (e.g. doubles them)
// - one that checks a condition and returns true or false
// - one that transforms the number in another way (e.g. square)
// Test the program by:
// -using the same array
// -applying different callbacks
// -logging the results to the console

function general(arr, callback) {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++) {
        arr2.push(callback(arr[i]))
    }
    return arr2;
}

function double(arr2) {
    return arr2 * 2
}
console.log(general([1, 2, 3, 4], double))

function squared(arr2) {
    return arr2 ** 2
}
console.log(general([1, 2, 3, 4], squared))

function bool(arr2) {
    if (arr2 % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(general([1, 2, 3, 4], bool))