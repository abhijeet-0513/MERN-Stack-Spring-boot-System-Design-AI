// ### 🔹 **Section 1: Arrays**

// ### 1️⃣ Basics

// 1. Create an array of 5 numbers and print their sum and average.
let arr = [63, 27, 41, 68, 91];
let sum = 0;
let avg;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
avg = sum / arr.length;
console.log(
  `the sum of all the elements of array is: ${sum} and average is ${avg}`
);
// 2. Write a program to find the **second largest** element in an array.
function secLargestElement(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 2];
}
console.log(secLargestElement(arr));
// 3. Create a function that accepts an array and returns a **new array with only even numbers**.
function evenArr(arr) {
  let even = [];
  for (let element of arr) {
    if (element % 2 === 0) {
      even.push(element);
    }
  }
  return even;
}
console.log(evenArr(arr))
// 4. Reverse an array **without using `.reverse()`**.
// 5. Count how many times a specific element appears in an array.

// ### 2️⃣ Intermediate

// 1. Write a program to **remove duplicates** from an array (try both `Set` and `filter()` methods).
// 2. Merge two arrays and **sort** them in ascending order without using the built-in `sort()`.
// 3. Write a program to **find common elements** between two arrays.
// 4. Write a program that **flattens** a nested array of any depth.
// 5. Given an array of strings, create a new array containing only the strings with length > 4.

// ### 3️⃣ Higher-order array challenges

// 1. Use `.map()` to double all numbers in an array.
// 2. Use `.filter()` to get only numbers greater than 50.
// 3. Use `.reduce()` to calculate the **product of all numbers**.
// 4. Use `.forEach()` to print all elements with their index.
// 5. Chain `map()`, `filter()`, and `reduce()` to calculate the sum of squares of even numbers.

// ---
// let name='Anshu'
// console.log(`hello my name is ${name}`)
