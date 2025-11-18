// this call apply bind
// this class object method
// strict vs non strict mode
// global Object: in browser it is called window, in nodeJS it is called global
// global this refers or points to the global object of the environment
// this keyword in global scope: in node it point to empty object in both strict and non-strict mode and in browser it points to window(global object)
// function: in non strict mode this will point to global object, in strict mode this will point to undefined

// call apply  and bind this will point to the object which is invoking it, it is not used now but important for interview

// in class constructor this will point to newly created empty object

// 'use strict'; // enabling strict mode

// var a = 10;
// var b = 20;
// console.log(a, b);

// function greet(name, age) {
//   console.log(name, age); // put the second value to both parameters
// }
// greet("rohan", "20");

// old way of writing js is is very forgiving, as compared to modern js, because they want it easy to learn and write, but it make our code messy and full of bugs, so in ES2015 or ES6 they introduced strict mode, which help us to write clean code and avoid mistakes

// console.log(window) // will give error in nodejs environment, this is global object created by the browser which is part  of webAPI which provide us lots of feature
//  to access global object in nodejs we have to use global, in node global object is called global

// console.log(global); // global object in nodejs
// document.getElementById('first')
// console.log(globalThis)

// Learn about this keyword

// console.log(this)

// const user={
//     name:'rohan',
//     age:30,
//     greet:function(){
//         console.log(this) // here this == user, it basically look for the one who called the method
//         console.log(`hi ${user.name}`) // don't hardcode it
//     }
// }
// const user1={
//     name:'rohit'
// }
// user1.greet=user.greet
// user1.greet()
// user.greet()

// if we want to make a function for 100 users so if we create it in the code it will create repetition and also take extra memory so it's better to create it outside the user

// 'use strict'
// function greet(){
//     console.log(this)
// }
// greet()

// when a method is called we have to look what is at the left of the method so  in this case in non strict mode it will point to global object(it is a bug in older time) but in strict mode there is nothing on the left so it will point to undefined

// "use strict";
// function greet() {
//   console.log(`hi ${this.name}`);
// }

// function incrAge(value, name) {
//   this.age += value;
//   this.name = name;
//   console.log(this.age, this.name);
// }

// const user = {
//   name: "rohan",
//   age: 20,
// };
// const user2 = {
//   name: "rohit",
//   age: 23,
// };

// greet.call(user); // it states that this of greet will points to user which we have passed
// greet.call(user2); // it states that this of greet will points to user which we have passed
// // incrAge.call(user,10,'Sumit') // first will be the user on which we want to apply, 2nd will be the value
// // incrAge.apply(user,[10,'Sumit']) // in this case we give the input in the form of an array

// const incr = incrAge.bind(user, 20, "Akarsh"); // this will work  same as call but in this we can store their reference and bound it and can be called whenever required
// incr()

// ************************************** Class ************************************************

// class Person{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
// }
// // this == {name:'Rohan',age:20}
// const p1=new Person('Rohan',20) // when we create a new object with  new Person it will create a new empty object and this will be referreng to this empty object and assign the values to the given keys

// ************************************** Arrow Functions ************************************************
// this does not exist in arrow function, it takes this from it's lexical scope
// "use strict";
const greet = () => console.log(this);
greet();
function meet() {
  console.log(this);
}
// meet();
