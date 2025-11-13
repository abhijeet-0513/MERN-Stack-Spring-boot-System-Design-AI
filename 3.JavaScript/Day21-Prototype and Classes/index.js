// Prototypes and Classes

const obj = {
  name: "Rohit",
  age: 28,
  greet: function () {
    console.log("Hello Ji");
  },
};

console.log(obj);
console.log(obj.name);
console.log(obj.age);
obj.greet();
console.log(obj.hasOwnProperty("name"));

console.log(obj.toString());

const arr = [10, 20, 30];

console.log(arr.length);

const obj2 = {
  account: 30,
};

obj2.__proto__ = obj;
console.log(obj2.account);
console.log(obj2.name);

// whenever we create any object Object.prototype got attached to it, from which we can inherit additional methods

// whenever we create any Array Array.prototype got attached to it, from which we can inherit additional methods, If we move one level up we find Array.prototype is inheriting additional methods from Object.prototype thats why arrays are implemented as objects in js, if we apply any methods to array it will first look in Array.prototype then move to Object.prototype and above that Null is present which means stop

// function also inherits prototype from Object.prototype, and its main reason behind this is following DRY principle, don't write the same code again and again.

// Array.prototype < Object.prototype < null

// to go 1 level up: arr.__proto__

function func() {}
console.log(func.__proto__);

console.log(Function.prototype.__proto__);

// Classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    return `Hi ${this.name}`;
  }
}

const p1 = new Person("Sakshi", 27);
console.log(p1.name, p1.age, p1.sayHi());

// when we create class Person it will create a prototype  Person.prototype and stores all the methods of person class

class Bank extends Person {
  constructor(name, age, account, balance) {
    super(name, age);
    this.account = account;
    this.balance = balance;
  }
  accinfo() {
    return this.account;
  }

  checkBalance() {
    return this.balance;
  }
}

const c1 = new Bank("Sakshi", 23, 8679867890, 16000);

console.log(c1)
console.log(c1.accinfo(),c1.checkBalance())

const obj3=Object.create(obj)
obj3.account=123
console.log(obj3)