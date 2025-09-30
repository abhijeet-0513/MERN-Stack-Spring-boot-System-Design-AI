// Primitive (copy by value)
let a = 10;
let b = a;
a = 20;
console.log(a, b); // 20, 10

// Non-Primitive (copy by reference)
let obj1 = { name: "Abhijeet" };
let obj2 = obj1;
obj2.name = "Sunny";
console.log(obj1.name, obj2.name); // Sunny, Sunny
// let obj1 = { name: "Abhijeet" };
// let obj2 = { ...obj1 }; // spread operator
// obj2.name = "Sunny";
// console.log(obj1.name, obj2.name); // Abhijeet, Sunny        