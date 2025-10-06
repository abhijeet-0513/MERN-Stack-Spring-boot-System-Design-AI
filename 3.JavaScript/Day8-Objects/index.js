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
console.log(q)

