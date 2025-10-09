// Execution Context
// Memory allocation
// a = undefined
// b = undefined
// add = funnctionCode
// result1 = undefined
// result2 = undefined

// Execution phase
// console.log(add(a, b));
// console.log(a);
// var a = 10;
// var b = 20;

function add(a, b) {
  return a + b;
}

// var result1 = add(a, b);
// var result2 = add(14, 67);

// console.log(result1, result2);

// let const
// Memory allocation
// a = <uninitialised> (Temporal dead zone) can't be accessed until get initialized with actual value
// b = <uninitialised> (Temporal dead zone) can't be accessed until get initialized with actual value
// addNumber = <uninitialised> (Temporal dead zone) as it ia const type, it font get fnCode
// console.log(add(a, b));
let a = 10;
const b = 20;

const addNumber = function (a, b) {
  return a + b;
};

result = addNumber(a, b);
console.log(result);
