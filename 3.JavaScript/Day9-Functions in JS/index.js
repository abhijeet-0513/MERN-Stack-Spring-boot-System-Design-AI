// function

// function declaration
function greeting() {
  console.log(`Hello coder army, welcome to Javascript functions`);
  return 10;
}
greeting();

// function are created for reusability

function addNumbers(a, b) {
  const sum = a + b;
  console.log(sum);
}
addNumbers(4, 6);
addNumbers(67, 33);

console.log(greeting());

function add(...num) {
  let sum = 0;
  //   for (let i = 0; i < num.length; i++) {
  //     sum += num[i];
  //   }
  for (let n of num) {
    sum += n;
  }
  return sum;
}
console.log(add(1, 2, 3, 4, 5));

// difference between spread and rest operator
let arr = [10, 20, 30, 40, 50];
const [first, second, ...rest] = arr;
console.log(first, second, rest);

//  spread operator used to expand an array where as rest operator used in the end and it make a new array with the remaining elements

// function expression : function stored in a variable( stores the reference of function)
// console.log(addNum(34, 66));

const addNum = function (a, b) {
  return a + b;
};
console.log(addNum(34, 66));

const addTwoNumber = (a, b) => {
  return a + b;
};
console.log(addTwoNumber(4, 5));

const sq = (a) => a * a;

console.log(sq(45));

const greet = () => ({ name: "Rohan", age: 30 });
console.log(greet());
// IIFE: used in creating private variables
(function fn() {
  console.log("Hello IIFE");
})();
(() => {
  console.log("hello iffe from arrow function");
})();

// callback function: a function which is passed to another function as an argument
function greet1() {
  console.log(`Hello ji, kaise ho`);
}

function meet(cb) {
  console.log(`I am going to meet someone at 9pm`);
  cb();
}
greet1();
meet(greet1);
// console.log(greet())

// callbacks make a function reusable