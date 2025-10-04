// 1. Array Basics

// Create an array marks = [90, 30, 70, 80].

// let marks = [90, 30, 70, 80];

// Print the length of the array.
// console.log(marks.length);
// Access the 3rd element.
// console.log(marks[2]);
// Change the 2nd element to 50.
// marks[1] = 50;
// console.log(marks);
// Create an array with mixed data types (string, number, boolean).
// const arr = [1, 2, 3, 4, 5, "rohit", "sunny", true];
// Print each element and its type.
// for (let item of arr) {
//   console.log(item, typeof item);
// }
// 2. Adding & Removing Elements

// Create an array of fruits: ["apple", "banana"].
const fruits = ["apple", "banana"];
// Add "orange" at the end.
fruits.push("orange");
// console.log(fruits);
// Remove the last fruit.
fruits.pop();
// console.log(fruits);
// Add "grapes" at the beginning.
fruits.unshift("grapes");
// console.log(fruits);
// Remove the first fruit.
fruits.shift();
// console.log(fruits);
// 3. Iteration

// Create an array nums = [10, 20, 30, 40, 50].
// let nums = [10, 20, 30, 40, 50];
// Print all elements using a for loop.
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }
// Print all elements using for…of.
// for (let num of nums) {
//   console.log(num);
// }
// 4. Slice & Splice

// Create an array arr = [1, 2, 3, 4, 5, 6].
// let arr1 = [1, 2, 3, 4, 5, 6];
// Extract [2, 3, 4] using slice.
// let sliced = arr1.slice(1, 4);
// console.log(sliced);
// Remove [3, 4, 5] using splice.
// let spliceArr=arr1.splice(1,3)
// console.log(spliceArr,arr1)
// Insert "hello" and "world" at index 2 using splice.
// let a=arr1.splice(1, 3, "hello", "world");
// console.log(a)
// console.log(arr1)
// 5. Combining Arrays

// Create two arrays: a = [1, 2, 3], b = [4, 5, 6].
// let  a = [1, 2, 3]
// let b = [4, 5, 6]
// Merge them using concat.
// let c=a.concat(b)
// console.log(c)
// Merge them using spread operator ....
// let d=[...a,...b]
// console.log(d)
// 6. Conversions & Joining

// Given names = ["rohit", "anmol", "sunny"]:
// let names = ["rohit", "anmol", "sunny"]
// Convert it into a string separated by commas.
// n=names.toString()
// console.log(names,n)
// Convert it into a string separated by " | ".
// let name=names.join(' | ')
// console.log(names,name)
// 7. Searching

// Create an array colors = ["red", "blue", "green", "blue"].
// const colors = ["red", "blue", "green", "blue"]
// Find the first index of "blue".
// console.log(colors.indexOf('blue'))
// Find the last index of "blue".
// console.log(colors.lastIndexOf('blue'))
// Check if "yellow" exists in the array.
// console.log(colors.includes('yellow'))

// 8. Sorting & Reversing

// Given nums = [101, 90, 54, 900, 300]:
// const nums = [101, 90, 54, 900, 300];
// Sort in ascending order.
// console.log(nums.sort((a, b) => a - b));

// Sort in descending order.
// console.log(nums.sort((a, b) => b - a));

// Reverse the array.
// console.log(nums.reverse());
// 9. Flattening

// Given arr = [1, [2, 3], [4, [5, 6]]]:
// let arr = [1, [2, 3], [4, [5, 6]]]
// Access the element 3 directly using indices.
// console.log(arr[2])
// Flatten one level using flat().
// console.log(arr.flat())
// Flatten completely using flat(Infinity).
// console.log(arr.flat(Infinity))
// 10. Advanced Challenges

// Write a program to reverse an array without using reverse().

// let arr = [1, 2, 3, 4, 5];
// let reversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }

// console.log(reversed);

// Write a program to remove duplicates from an array.
// let arr2 = [1, 2, 3, 2, 4, 5, 1];
// let unique = [];

// for (let num of arr2) {
//   if (!unique.includes(num)) {
//     unique.push(num);
//   }
// }
// console.log(unique);
// Write a program to find the maximum and minimum number in an array.
// let arr2 = [10, 45, 3, 99, 23];
// let max = arr2[0], min = arr2[0];

// for (let num of arr2) {
//   if (num > max) max = num;
//   if (num < min) min = num;
// }
// console.log("Max:", max);
// console.log("Min:", min);
// Write a program to count how many times each element occurs in an array.

// let arr = [1, 2, 2, 3, 1, 4, 2];
// let freq = {};

// for (let num of arr) {
//   freq[num] = (freq[num] || 0) + 1;
// }

// console.log(freq);

// Write a program to merge two arrays and remove duplicates.

// let arr3 = [1, 2, 3];
// let arr4 = [3, 4, 5];
// let merged2 = [...arr3];

// for (let num of arr4) {
//   if (!merged2.includes(num)) {
//     merged2.push(num);
//   }
// }
// console.log(merged2);