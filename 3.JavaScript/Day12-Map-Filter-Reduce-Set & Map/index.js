//  forEach, fliter, reduce, map, set

const arr = [10, 20, 30, 35, 40];

// arr.forEach((num,index,arr) => {
//   console.log(num,index,arr);
// });
// console.log(arr);

// filter

const newArr = arr.filter((n) => n > 20);
console.log(newArr);

// arr.filtering = function (compare) { // this method is applicable to this array only
Array.prototype.filtering = function (compare) {
  // now it is applicable to all array( but it is not recommended cause clashes)
  const ans = [];
  for (let num of this) {
    if (compare(num)) {
      ans.push(num);
    }
  }
  return ans;
};

const fil = arr.filtering((n) => n > 30);
console.log(fil);

const a = [1, 2, 3, 4, 5, 6];
b = a.filtering((a) => a < 4);
console.log(b);

// map

const mapArr = [1, 32, 56, 87, 23, 43, 67, 44, 23];
const newMapArr = mapArr.map((num) => num + 2);
console.log(newMapArr);

// real scenario
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    category: "Electronics",
    inStock: true,
    rating: 4.8,
    brand: "Apple",
  },
  {
    id: 2,
    name: "Nike Air Max",
    price: 129,
    category: "Footwear",
    inStock: true,
    rating: 4.5,
    brand: "Nike",
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 79,
    category: "Appliances",
    inStock: false,
    rating: 4.2,
    brand: "Keurig",
  },
  {
    id: 4,
    name: "Gaming Laptop",
    price: 1299,
    category: "Electronics",
    inStock: true,
    rating: 4.6,
    brand: "Asus",
  },
  {
    id: 5,
    name: "Yoga Mat",
    price: 25,
    category: "Fitness",
    inStock: true,
    rating: 4.3,
    brand: "Gaiam",
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: 199,
    category: "Electronics",
    inStock: true,
    rating: 4.7,
    brand: "Sony",
  },
  {
    id: 7,
    name: "Backpack",
    price: 49,
    category: "Accessories",
    inStock: true,
    rating: 4.4,
    brand: "North Face",
  },
  {
    id: 8,
    name: "Smart Watch",
    price: 299,
    category: "Electronics",
    inStock: false,
    rating: 4.6,
    brand: "Samsung",
  },
  {
    id: 9,
    name: "Protein Powder",
    price: 39,
    category: "Nutrition",
    inStock: true,
    rating: 4.2,
    brand: "Optimum",
  },
  {
    id: 10,
    name: "Desk Chair",
    price: 199,
    category: "Furniture",
    inStock: true,
    rating: 4.5,
    brand: "Herman Miller",
  },
  {
    id: 11,
    name: "Water Bottle",
    price: 20,
    category: "Accessories",
    inStock: true,
    rating: 4.1,
    brand: "Hydro Flask",
  },
  {
    id: 12,
    name: "Running Shoes",
    price: 89,
    category: "Footwear",
    inStock: true,
    rating: 4.4,
    brand: "Adidas",
  },
  {
    id: 13,
    name: "Bluetooth Speaker",
    price: 79,
    category: "Electronics",
    inStock: true,
    rating: 4.3,
    brand: "JBL",
  },
  {
    id: 14,
    name: "Sunglasses",
    price: 150,
    category: "Accessories",
    inStock: true,
    rating: 4.6,
    brand: "Ray-Ban",
  },
  {
    id: 15,
    name: "Dumbbell Set",
    price: 299,
    category: "Fitness",
    inStock: false,
    rating: 4.7,
    brand: "Bowflex",
  },
  {
    id: 16,
    name: "Camera",
    price: 799,
    category: "Electronics",
    inStock: true,
    rating: 4.8,
    brand: "Canon",
  },
  {
    id: 17,
    name: "Hiking Boots",
    price: 129,
    category: "Footwear",
    inStock: true,
    rating: 4.5,
    brand: "Timberland",
  },
  {
    id: 18,
    name: "Smart Bulb",
    price: 25,
    category: "Smart Home",
    inStock: true,
    rating: 4.2,
    brand: "Philips",
  },
  {
    id: 19,
    name: "Tennis Racket",
    price: 159,
    category: "Sports",
    inStock: true,
    rating: 4.4,
    brand: "Wilson",
  },
  {
    id: 20,
    name: "Wireless Mouse",
    price: 49,
    category: "Electronics",
    inStock: true,
    rating: 4.3,
    brand: "Logitech",
  },
];

const filteredProducts = products
  .filter((product) => product.price > 500)
  .sort((a, b) => a.price - b.price);
console.log(filteredProducts);

const maparr = products.map((product) => ({
  name: product.name,
  price: product.price,
}));
console.log(maparr);

// create own custom map method

// reduce method
const total = products.reduce((acc, curr) => acc + curr.price, 0);
console.log(total);

// Set: Data structure(an  array which contain unique values)

const ar = [1, 2, 3, 4, 5, 6, 7, 6, 54, 2, 3];

const s1 = new Set(ar);
s1.add(30); // add element to set
console.log(s1.has(3)); // return true if element exist else false
s1.delete(54); // to delete a particular element
console.log(s1.size); // returns the length of set
s1.clear(); // removes all the element from the set

console.log(s1);

// realworld usecase of set is to remove duplicates
const emails = [
  "john.doe@gmail.com",
  "sarah.smith@yahoo.com",
  "john.doe@gmail.com",
  "mike.wilson@hotmail.com",
  "sarah.smith@yahoo.com",
  "emma.davis@gmail.com",
  "mike.wilson@hotmail.com",
  "alex.turner@gmail.com",
  "emma.davis@gmail.com",
  "john.doe@gmail.com",
  "peter.jones@yahoo.com",
  "sarah.smith@yahoo.com",
  "lisa.brown@hotmail.com",
  "alex.turner@gmail.com",
  "peter.jones@yahoo.com",
];

// Remove duplicates using Set
const uniqueEmails = new Set(emails);
console.log("Original emails count:", emails.length); // 15
console.log("Unique emails count:", uniqueEmails.size); // 8

// Convert back to array if needed
const uniqueEmailsArray = [...uniqueEmails];
console.log("Unique emails:", uniqueEmailsArray);

for (let item of uniqueEmailsArray) console.log(item);

// Map: Data Structure(it is like object where key can be anything)

const m1=new Map([
    ['Rohit',40],
    [2,'rohan'],
    [true,11],
    [[10,20,11],'Mohit']
])

m1.set({name:'mahesh',age:20},true)
// Get values using different key types
console.log(m1.get('Rohit'));        // 40
console.log(m1.get(2));              // 'rohan'
console.log(m1.get(true));           // 11
console.log(m1.get([10,20,11]));     // undefined (because arrays are compared by reference)

// Set new key-value pairs
m1.set('newKey', 'newValue');
m1.set(42, 'meaning of life');

// Delete entries
m1.delete('Rohit');    // returns true if key existed and was deleted
m1.delete('nonexistent');  // returns false

// Get size of map
console.log('Map size:', m1.size);    // number of key-value pairs

// Check if key exists
console.log(m1.has(2));              // true
console.log(m1.has('nonexistent'));  // false
console.log(m1)

for(let [key,value]of m1){
    console.log(key,':',value)
}