// Operators

// Arithmetic operators
// console.log(20+10)
// console.log(20-10)
// console.log(20*10)
// console.log(20/10)
// console.log(20%6)  // returns remainder
// console.log(20**3) // exponentiation 20*20*20

// Assignment operators
// let x = 10;
// x = x + 5;
// x += 5; // x=x+5
// x -= 5; // x=x-5
// x *= 5; // x=x*5
// x /= 5; // x=x/5
// x %= 5; // x=x%5
// x **= 5; // x=x**5
// console.log(x);

// comparison operators

// let x=10
// let y=20
// console.log(x==y)  // false
// console.log(x!=y)  // true
// console.log(x===y) // false;
// console.log(x!==y) // true
// console.log(x>y)   // false
// console.log(x<y)   // true
// console.log(x>=y)  // false
// console.log(x<=y)  // true

// type conversion

// console.log('5' + 5) // 55
// let x = '5'
// x = Number(x) // converts string to number
// console.log(x + 5) // 10
// console.log(typeof x) // number

// let x=10
// let y='10'
// console.log(x==y)  // true check valye only convert y to number called type coersion
// console.log(x===y) // false; check value and type both no type coersion

// NaN - not a number (it's a number type but not a valid number)

// let a='123ab'
// a=Number(a)
// console.log(a) // NaN
// console.log(typeof a) // number
// console.log(isNaN(a)) // true

// let c=true
// c=Number(c)
// console.log(c) // 1
// console.log(typeof c) // number

// console.log(Number(false)) // 0
// console.log(Number('hello')) // NaN
// console.log(Number(' ')) // 0
// console.log(Number('123')) // 123
// console.log(Number('null')) // 123
// console.log(Number(null)) // 0
// console.log(Number(undefined)) // NaN

// who makes the rules for JS? - ECMA international

// conversions in boolean
// console.log(Boolean(1)) // true
// console.log(Boolean(0)) // false
// console.log(Boolean('hello')) // true
// console.log(Boolean('')) // false
// console.log(Boolean(' ')) // true
// console.log(Boolean(null)) // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean(NaN)) // false

// truthy and falsy values
// falsy values - 0, '', null, undefined, NaN, false
// truthy values - ' ', 'hello', 123, true, '0', 'false', [], {}

// computer science challenge with decimal numbers
// let num1=0.1
// let num2=0.2
// let sum=num1+num2
// console.log(sum) // 0.30000000000000004
// console.log(sum==0.3) // false

// null is loosely equal to undefined only with == operator
// console.log(null == undefined); // true
// console.log(null === undefined); // false
// console.log(null == 0); // false
// console.log(null == ""); // false
// console.log(null == false); // false
// console.log(null == true); // false
// console.log(undefined == 0);
// console.log(undefined == "");
// console.log(undefined == false);

//  >, <, >=, <= (null -> number, undefined -> NaN)
// console.log(null>=0) // true
// console.log(null<=0) // true
// console.log(null>0)  // false
// console.log(null<0)  // false

// console.log(undefined>=0) // false
// console.log(null>=undefined) // false
// console.log(null<=undefined) // false
// console.log(null==undefined) // true

// console.log("Rohan" > "Rohit"); // false (compares ascii values)
// console.log("Rohan" < "Rohit"); // true
// console.log("Rohan" >= "Rohit"); // false
// console.log("Rohan" <= "Rohit"); // false

// console.log('hi'==true)
// console.log(true==true)

// console.log(NaN==NaN) // false

// loops

// for loop
// for (let i = 1; i <= 5; i++) {
//   console.log(i); // 1 2 3 4 5
// }

// post increment ->  i++; post decrement -> i--

// while loop
// let j = 1;
// while (j <= 5) {
//   console.log(j); // 1 2 3 4 5
//   j++;
// }

// do-while loop

// let k = 1;
// do {
//   console.log(k); // 1 2 3 4 5
//   k++;
// } while (k <= 5);

// conditionals

// if-else
// let age = 15;
// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("You can't vote");
// }

// let age = 20;
// if (age < 18) {
//   console.log("you are a kid");
// } else if (age >= 60) {
//   console.log("you are an old person");
// } else {
//   console.log("you are an adult");
// }

// logical operator

// AND -> && -> if first value is false it will return the first value itself, if both or first value are true it will return the second value

// Logical AND (&&)
// - If the first value is falsy, it returns the first value.
// - If the first value is truthy, it returns the second value.


// console.log(true && true); // true
// console.log(true && false);
// console.log(false && true);
// console.log(false && false); // false

// let a = "";
// let a = "Rohan";
// let b = "kumar";
// console.log(a && b);

// OR -> || -> if first value is true it will return the first value itself, if both or first value are false it will return the second value
// Logical OR (||)
// - If the first value is truthy, it returns the first value.
// - If the first value is falsy, it returns the second value.
// console.log(true || true); // true
// console.log(true || false);
// console.log(false || true);
// console.log(false || false); // false

// NOT -> !

// console.log(!true); // false
// console.log(!false); // true

// // !=
// console.log(5 != 6); // true
// console.log(5 != 5); // false
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false