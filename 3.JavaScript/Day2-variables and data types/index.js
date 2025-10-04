// how do we create variables in js

let name = "Rohit";
let age = 30;
age = 39;

console.log(name, age);

const acc = 3989;
acc = 7478;
console.log(acc);

var a = 10;
var a = 20;
console.log(a);

// Data types

// primitive data types
// number
let a = 10;
let c = 3.14;
console.log(a, c);

//  strinng

let str = "JS is Awesome";
let d = "strike is coming soon";

//  boolean

let isLoggedIn = true;
let isLoggedout = false;
console.log(isLoggedIn, isLoggedout);

//  undefined

let user;
// const p
console.log(user);

// // undefined

// let user;
console.log(typeof user);
// // const p;

// console.log(user);

// bigint
let num = 23216378261783213461n;
console.log(typeof num);
console.log(num);

// null
// let weather = null;
console.log(typeof weather);

let weather = current_weather("Dwarka")
// 25
// null
// undefined

// symbol

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(typeof id2);
console.log(id2==id1);

// Non Primitive Data type
// array, object, function

let arr = [10,20,11,"Rohit",true];
console.log(typeof arr);

console.log(arr);

// Rohit 12312 18 gen

let user1 = {
    name:"Rohit",
    account:12312,
    age:18,
    category:'gen'
}

console.log(typeof user1);

let s = function add(){
    console.log("Hello");
}

console.log(typeof s);

// Primitive data type is immutable

let a = 10;
let b = a;

b = 20;
console.log(a, b);

// let str = "Rohit";
str = "Mohan";

console.log(str);

// Non primitive data type mutable

// let arr = [10, 20, 30, 40];

arr.push(90);
arr[0] = 70;
console.log(arr);

let obj = {
  name: "Mohan",
  age: 20,
};

let obj2 = obj;

obj2.name = "Rohan";

console.log(obj);
