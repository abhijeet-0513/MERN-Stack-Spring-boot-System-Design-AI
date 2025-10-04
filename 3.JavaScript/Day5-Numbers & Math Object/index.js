// Number
let a = 10;
let b = 324.6869;
let c = b.toFixed(2);
console.log(typeof c);
console.log((657.4645).toPrecision(5));

let d = 7584.849;
console.log(typeof d.toString());
console.log(d,typeof d)

//
// let a=20
// let b=20
// console.log(a==b)
// console.log(a===b)

// let a = new Number(20);
// let b = new Number(20);

// console.log(typeof a, typeof b);

// console.log(a == b, a === b);

// console.log({})

console.log(Boolean(0)) // checking for address only; that's why it mark it as true
console.log(Boolean(2))
console.log(Boolean(new Number()))
console.log(Boolean(new Number(null)))

// let a = 10;
// let b = a;
// console.log(a === b);

// *******************************       Math Object       *************************************

console.log(Math.abs(-4));
console.log(Math.PI.toFixed(2));
console.log(Math.LN10);
console.log(Math.SQRT2);

console.log(Math.ceil(3.3))
console.log(Math.floor(2.9))
console.log(Math.log10(20))
console.log(Math.max(46,67693,74539,3564847782))

let rand = Math.random(); // generate no betn 0-1, where 0 is included 1 is not included
console.log(rand);

let random = Math.floor(Math.random() * 10) + 1;
console.log(random);

let dice = Math.floor(Math.random() * 6 + 1);
console.log(dice);

// formula to generate random numbers in a given range
// Math.floor(Math.random()*totalNumberOfOutcomes)+shift
// Math.floor(Math.random()*(max-min+1))+min

// 15-25

// let random = Math.floor(Math.random() * 11) + 15;
// console.log(random);

// OTP Generation: 4 digit: 1000-9999
console.log(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);

// Function to generate a random number between min and max (inclusive) without using Math.random
function pseudoRandomNumber(min, max) {
  // Use current time and a simple hash for pseudo-randomness
  const now = Date.now();
  const seed = (now * 9301 + 49297) % 233280;
  const rnd = seed / 233280;
  return Math.floor(rnd * (max - min + 1)) + min;
}

// Example usage:
console.log(pseudoRandomNumber(1, 100));