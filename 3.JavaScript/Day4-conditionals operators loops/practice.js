// Operators
// Arithmetic Practice

// Write a program to calculate the area of a rectangle.

let length = 10;
let breadth = 5;
let area = 2 * (length + breadth);
console.log(area);

// Write a program to swap two numbers.
let a = 10;
let b = 20;
let temp = a;
a = b;
b = temp;
console.log(a, b);

// Find the remainder when 123 is divided by 7.
let remainder = 123 % 7;
console.log(remainder);

// Calculate 2^5 using the exponentiation operator.
let result = 2 ** 5;
console.log(result);

// Assignment Practice

// Initialize x = 20. Increase it by 10 using +=.
let x = 20;
x += 10;
console.log(x);

// Decrease x by 5 using -=.

x -= 5;
console.log(x);
// Multiply x by 3 and divide by 2 using *= and /=.
x *= 3;
console.log(x);

x /= 2;
console.log(x);

// Comparison Practice

// Compare "10" and 10 with == and ===. Explain the difference.

console.log("10" == 10); // perform type coersion , returns true
console.log("10" === 10); // false

// Check if 15 is greater than 7 and less than 20.

console.log(15 > 7 && 15 < 20);
// Verify if null == undefined and null === undefined.
console.log(null == undefined); // returns true
console.log(null === undefined); // equal in loose equality only

// Logical Operators

// Check if a number is positive and even using &&.

let num = 28;
let ans = num > 0 && num % 2 == 0;
console.log(ans);

// Check if a user entered a name (non-empty string) using ||.

let username = "rohit_negi9";
let name = username || "guest";
console.log("Hello", name);
// Toggle a boolean variable isLoggedIn using !.
let isLoggedIn = true;
isLoggedIn = !isLoggedIn;
console.log(isLoggedIn);

// *********************************** Loops **************************************

// For Loop

// Print numbers from 1 to 10.
for (let index = 1; index <= 10; index++) {
  console.log(index);
}
// Print the multiplication table of 5.
for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}
// Find the sum of numbers from 1 to 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(`sum of 1 to 100 is ${sum}`);

// Print only even numbers from 1 to 50.

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// While Loop

// Print numbers from 10 down to 1.

let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// Calculate the factorial of a number (e.g., 5 → 120).
let fact = 1;
let n = 5;
while (n > 0) {
  fact *= n;
  n--;
}
console.log(fact);
// Reverse a given number (e.g., 1234 → 4321).

let number = 12345;
let numStr = String(number);
let reversednum = "";
for (let i = numStr.length - 1; i >= 0; i--) {
  reversednum += numStr[i];
}
console.log(Number(reversednum));

// Do-While Loop

// Print numbers from 1 to 5 (even if condition is false initially).
// Keep asking user input until they type "exit".
