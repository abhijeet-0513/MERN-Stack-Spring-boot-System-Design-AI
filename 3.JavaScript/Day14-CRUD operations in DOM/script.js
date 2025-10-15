document.body.style.backgroundColor = "black";
document.body.style.color = "white";

const newElement = document.createElement("h2");
newElement.textContent = "Strike is coming on dhanteras";

newElement.id = "second";
// console.log(newElement)

const element = document.getElementById("first");
// element.after(newElement);
element.after(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "Diwali aa rahi hai guyss";
newElement2.id = "third";
newElement2.className = "diwali"; // an class is already a reserved word in Javascript

// classList to handle multiple classes
newElement2.classList.add("holi");
newElement2.classList.remove("holi");
newElement2.style.backgroundColor = "magenta";
newElement2.style.color = "cyan";

// adding to the dom
element.after(newElement2);
// document.body.append(newElement2)
// document.body.appendChild(newElement2);
console.log(newElement2);
console.log(newElement2.getAttribute("class"));

const list1 = document.createElement("li");
list1.textContent = "Soyabean";
const list2 = document.createElement("li");
list2.textContent = "rajma";
const list3 = document.createElement("li");
list3.textContent = "milk";
const list4 = document.createElement("li");
list4.textContent = "butter";

const ul = document.getElementById("list");
ul.append(list1, list2);
ul.prepend(list3);
ul.appendChild(list4);

console.log(ul.childNodes);
console.log(ul.children);
console.log(ul.childElementCount);
ul.children[1].after(list4);

// looping
// ...existing code...

const arr = [
  "Pizza",
  "Burger",
  "Pasta",
  "Sushi",
  "Biryani",
  "Tacos",
  "Noodles",
  "Ice Cream",
  "Sandwich",
  "Salad",
];

// not an optimizet method

// for (let food of arr) {
//   //   console.log(food);
//   const list = document.createElement("li");
//   list.textContent = food;
//   ul.append(list);
// }

const fragment = document.createDocumentFragment();
for (let food of arr) {
  //   console.log(food);
  const list = document.createElement("li");
  list.textContent = food;
  fragment.append(list);
}

ul.append(fragment);

// Assignment - Problem statement what if we don't have fragment how we'll deal with this problem
// how about we create an array and give all the list to that array then update the ui at on tine

const elem1 = document.getElementById("first");
elem1.remove();

const months=document.getElementById('mon')
console.log(mon.childNodes) // don't use these older methods it also include text nodes
console.log(mon.children)

// explore some older dom methods
// never use innerHTML to display user generated things like comments and others things as user can send any html tag or make server calls and it can also send your access token so use textcontent to display user generated texts