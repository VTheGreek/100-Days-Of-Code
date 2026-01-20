/* Write a function that takes a number n
and returns how many numbers from 1 to n
are even. */

// function evenNumbers(num) {
//   let even = 0;
//   for (i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       even = even + 1;
//     }
//   }
//   return even;
// }
// console.log(evenNumbers(24));

/* Write a function that takes a number
 and a callback function.
 If the number is even, execute the callback. */

// function evenCallback(number, callback) {
//   if (number % 2 === 0) {
//     callback(); 
//   }
// }

// function sayHello() {
//   console.log("Hello!");
// }

// evenCallback(4, sayHello); 
// evenCallback(3, sayHello); 
// evenCallback(10, sayHello); 



/* Write a function that takes a name
 and returns "Hello <name>!". */

 function greet(name) {
    return `Hello ${name}`;
 }

 console.log(greet("Vas"))