// Objects: stored as key: value pair

const user = {
  name: "Sunny",
  age: 20,
  emailId: "sunny12@gmail.com",
  amount: 1200,
  "home address": "vasant kunj",
};

console.log(user, typeof user);

// CRUD: create read update delete

// read
console.log(user.emailId);

// update
user.uId = 986893489685;
user.amount = 3000;
console.log(user);

// delete
delete user.uId;
console.log(user);

// it stores the ket as string behind the scene
console.log(user["age"]);
console.log(user.age);

console.log(user["home address"]);

// objects are copied by reference()
let user2 = user;
user2.name = "Anmol";
console.log(user, user2);

// ************************************** Important **************************************
// to access keys of an object
console.log(Object.keys(user)); // returns an array containing keys
// to access Values of an object
console.log(Object.values(user)); // returns an array containing values
// to access both keys and values
console.log(Object.entries(user)); // it returns a 2d array containing each key value pair in string format

// iterating on objects
for (let key in user) {
  console.log(key, ":", user[key]);
}

// object destructuring

// const name=user.name
// const age=user.age

const { name: username, age: userage } = user;
console.log(username, userage);

// array destructuring
let arr = [10, 20, 30, 40, 50];
const [a, b] = arr;
console.log(a, b);

// we can't use for-of loop directly on objects
for (let key of Object.keys(user)) {
  console.log(key);
}
for (let value of Object.values(user)) {
  console.log(value);
}
for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}

// methods in objects
let user3 = {
  name: "Sunny",
  age: 20,
  emailId: "sunny12@gmail.com",
  amount: 1200,
  "home address": "vasant kunj",
  greeting: function () {
    // console.log(`strike is coming on 18 october ${user3.name}`);
    console.log(`strike is coming on 18 october ${this.name}`);
    return 20;
  },
};

let q = user3.greeting();
console.log(q);

// in methods use this keyword because if we create another object that holds the reference of it's own object not the new object, using this it keep the reference of the object which called the object

let user12 = { name: "Ramesh", amount: 300 };
user12.greeting = user3.greeting;
console.log(user12.greeting());

// nested objects
let nested = {
  name: "Sunny",
  age: 20,
  emailId: "sunny12@gmail.com",
  amount: 1200,
  address: {
    city: "patna",
    state: "Bihar",
    pincode: 800001,
  },
};
console.log(nested);
console.log(nested.address);
let {
  address: { city, state, pincode },
} = nested;
console.log(city, state, pincode);

let nested2 = { ...nested }; // creates shallow copy works at one level only not for nested objects
nested2.name = "anmol";
console.log(nested, nested2);

nested.address.city = "delhi";

// to create deep vopy we should use structure clone

let nested3 = structuredClone(nested);

nested3.address.city = "Gurugram";
console.log(nested, nested2, nested3);

// we can also use numbers as keys in objects
const numberKeysObject = {
  1: "First",
  2: "Second",
  100: "Hundred",
  42: {
    description: "Answer to everything",
    author: "Douglas Adams",
  },
  7: ["Lucky", "Prime", "Magic"],
};

// Accessing values with numeric keys
console.log(numberKeysObject[1]); // "First"
console.log(numberKeysObject["2"]); // "Second"
console.log(numberKeysObject[42].description); // "Answer to everything"
console.log(numberKeysObject[7][0]); // "Lucky"

// in js object keys can only be string, but in 2015 update object keys can be string or symbol

const sym = Symbol("id");

let symUser = {
  name: "Sunny",
  age: 20,
  emailId: "sunny12@gmail.com",
  amount: 1200,
  // to use symbol we use []=> [sym]:value
  [sym]:'I am symbol'
};
console.log(symUser[sym])

// we don't use symbol generally, we use this in case we create our own JS library

// How Objects are stored in memory

// array consist of 3 pointers: map pointer, property pointer, element pointer, how these things works