// Scope, closure and higher order functions

// Scope -> basically defines where a variable can be accessed
// Global -> can be accessed anywhere in the code
// functional -> can only be accessed inside the function
// Block level scope -> can be accessed within the block
// variables declared vith var has global scope if declared in function it has functional scope, it don't respect block scope as it can be accessed outside the block

// function or blocks try to find values within it's block first if not found then move outside of the block
// in case of closures inner function keep the reference or remembet variables which iit uses from its outer scope, whenever a function is created closures are formed
// /real-world usecase of closures

let a = 10;
let b = 20;

// console.log(a, b);
// console.log(e);
if (true) {
  //   console.log(a, b);
  // console.log(e);
}
let global = 30;
function greet() {
  let c = 30;
  var e = 90;
  console.log(a, b);
  let global = 40;
  function meet() {
    console.log(global);
  }
  meet();
  //   console.log(e);
}
// console.log(e)
// console.log(c);
// greet();

function createCounter() {
  let count = 0;
  function increment() {
    // console.log(`I am increment`)
    count++;
    return count;
  }
  // increment()
  return increment;
}
// createCounter()
let count = createCounter();
// console.log(count)
// count()
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())

// let user = {
//   balance: 500,
//   deposit: function (amount) {
//     if (typeof amount === "number" && amount > 0) {
//       this.balance += amount;
//       return this.balance;
//     }
//   },
//   withdraw: function (amount) {
//     if (typeof amount === "number" && amount > 0 && this.balance >= amount) {
//       this.balance += amount;
//       return this.balance;
//     }
//   },
//   getBalance: function () {
//     return this.balance;
//   },
// };
// user.balance = "rohan";
// // console.log(user.deposit(200));
// console.log(user.deposit());

function createBankAccount() {
  let user = {
    balance: 500,
    deposit: function (amount) {
      if (typeof amount === "number" && amount > 0) {
        this.balance += amount;
        return this.balance;
      }
    },
    withdraw: function (amount) {
      if (typeof amount === "number" && amount > 0 && this.balance >= amount) {
        this.balance += amount;
        return this.balance;
      }
    },
    getBalance: function () {
      return this.balance;
    },
  };
  return user;
}

const customer=createBankAccount()
customer.deposit('rohan')
customer.deposit(500)
console.log(customer.getBalance())
console.log(customer)

// this is how closures helps uc create private variables which can only be accessed through methods and prevent from accidental changes

function double(value){
    return function execute(val){
        return value*val
    }
}
const num=double(10)
console.log(num(20))
const n=double(2)(19)
console.log(n)

// function fizbuzz(n) {
//   for (let i = 3; i <= n; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log(i, "fizzbuzz");
//     } else if (i % 5 == 0) {
//       console.log(i, "buzz");
//     } else if (i % 3 == 0) {
//       console.log(i, "fiz");
//     } else console.log(i);
//   }
// }

// fizbuzz(100);
