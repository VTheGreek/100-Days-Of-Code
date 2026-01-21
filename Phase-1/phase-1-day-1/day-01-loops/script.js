/*
You receive a number n.
Calculate the sum of all numbers from 1 to n.
Use a loop.
*/

let n = Number(prompt("Give a number."));
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum = sum + i;
    console.log("i:", i, "sum:", sum);
}


/*
You receive an array of numbers.
Find the largest number.
No Math.max.
Use a loop.
*/

let numArray = [13, 50, 1, 2, 77];
let max = numArray[0];

for (let i = 1; i < numArray.length; i++) {
    if(numArray[i] > max) {
        max = numArray[i];
    }
}
console.log(max);


/*
You receive a string.
Count how many times each character appears.
The count is case-sensitive.
Use a loop.
*/


let myString = "Hello World"
let charCount = {};
for (let char of myString) {
    if (charCount[char]) {
        charCount[char] += 1;
    } else {
        charCount[char] = 1;
    }
} 
console.log(charCount);