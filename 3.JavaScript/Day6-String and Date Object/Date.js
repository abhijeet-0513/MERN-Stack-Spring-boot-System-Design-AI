// const now = new Date();
// console.log(now.toString()); // it takes information of time from our system

// system clock which keep track of time at hardware level

// console.log(now.toISOString());
// console.log(now.toLocaleString());
// console.log(now.toLocaleDateString());

// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth()); // 0 for jan 11 for dec

// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// month: 0 - 11;
// day sunday-0,monday-1.....saturday-6;

// const now = new Date(2025, 9, 2, 15, 17, 10, 125);
// console.log(now);
// console.log(now.toString());

const now = Date.now(); // in milliseconds
console.log(now);
console.log(new Date(now).toString());
console.log(new Date(0)); // givet the starting time
