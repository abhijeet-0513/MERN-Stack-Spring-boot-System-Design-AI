// Strings Practice

// Declare a string "JavaScript is powerful" and:

// let str = "JavaScript is powerful";

// // Print its length.
// console.log(str.length);

// // Convert it to uppercase and lowercase.
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// // Extract "Script" from "JavaScript" using slice() and substring().
// console.log(str.slice(4, 10));
// console.log(str.substring(4, 10));

// // Find the first and last occurrence of "is" in "JavaScript is awesome is great".
// let str1 = "JavaScript is awesome is great";
// console.log(str1.indexOf("is"));
// console.log(str1.lastIndexOf("is"));

// // Replace the word "JavaScript" with "TypeScript" in the sentence "I love JavaScript" (both first occurrence and all occurrences).
// let str2 = "I love JavaScript. JavaScript is awesome";
// console.log(str2.replace("JavaScript", "TypeScript"));
// console.log(str2.replaceAll("JavaScript", "TypeScript"));

// // Trim the string " Hello World " and print:
// let str3 = " Hello World ";
// console.log(str3.trim());
// // Original length
// console.log(str3.length);
// // Trimmed length
// console.log(str3.trim().length);

// // Split "sunny,anmol,sakshi,garima,simran" into an array and print the 3rd element.
// let str4 = "sunny,anmol,sakshi,garima,simran";
// let strArr = str4.split(",");
// console.log(strArr[2]);

// // Concatenate "Hello" and "World" using both + and template literals.
// let a = "Hello";
// let b = "World";
// console.log(a + " " + b);
// console.log(`${a} ${b}`);
// // Check if "apple" comes before "banana" using comparison operators.
// console.log("apple" < "banana");
// // Write a program to reverse a string without using built-in reverse methods.
// let string = "JavaScript is awesome";

// let revStr = "";
// for (let i = string.length - 1; i >= 0; i--) {
//   revStr += string[i];
// }

// console.log(revStr);
// // Check if a string entered by the user is a palindrome (e.g., "madam", "racecar").
// let s = "madam";
// let rev = "";
// for (let i = 0; i < s.length; i++) {
//   rev = s[i] + rev;
// }
// if (rev == s) {
//   console.log(`${s} is palindrome`);
// } else {
//   console.log(`${s} is not palindrome`);
// }
// 🔹 Dates Practice

// Print the current date and time using new Date().
// const date = new Date();
// console.log(date.toString());
// Print the current year, month, day, hours, minutes, and seconds separately.
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// Create a date object for your birthday (e.g., new Date(2000, 5, 15)), and print the day of the week.
const bDay = new Date(1998, 4, 13);
console.log(bDay.toDateString());

// Find the difference (in days) between today and "1 Jan 2026".
console.log((new Date(2026, 0, 1) - new Date()) / (1000 * 60 * 60 * 24));
// Print today’s date in the format:
const d=new Date()
// DD-MM-YYYY
console.log(d.toLocaleDateString())
// Write a program that prints the date 7 days from today.
console.log(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toDateString());
// Convert the current date to:

// ISO string
console.log(d.toISOString())
// Locale string
console.log(d.toLocaleString())
// UTC string
console.log(d.toUTCString())
// Write a program that shows how many milliseconds have passed since "1 Jan 2000".
console.log(new Date()-new Date(2000,0,1))
// Given a timestamp (e.g., 1600000000000), convert it back to a readable date.
console.log(new Date(1600000000000).toLocaleDateString())
// Check if the current year is a leap year.

const currentYear = new Date().getFullYear();
const isLeapYear = new Date(currentYear, 1, 29).getDate() === 29;
console.log(`${currentYear} is${isLeapYear ? '' : ' not'} a leap year.`);