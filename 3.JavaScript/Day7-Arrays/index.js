// // Array

let marks1 = 90;
let marks2 = 30;
let marks3 = 70;
let marks4 = 80;

let marks = [90, 30, 70, 80];
console.log(marks);
console.log(marks.length);

let arr = [100, 40, true, "rohit"];
console.log(arr);
console.log(arr[3])
console.log(typeof arr)
arr[1]=45

// // push: add element in the end of array
arr.push('strike')

// // pop: to delete last element or delete element from end
arr.pop()

// // unshift: add element in the beginning of the array
arr.unshift('90')
arr.unshift(900)

// // shift: deletes elements from start
arr.shift()
// // don't use shift or unshift, these are heavy operations which can lead to system failure or lag as we need to shift index of all elements
console.log(arr)

// *********************** Iterating over array ******************************

let arr=[12,54,7,89,54,33,88]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

for(let num of arr)
    console.log(num)

let arr=[12,54,7,89,54,33,88]
let arr2=arr
arr2.push(900)
console.log(arr,arr2)

// array are copy by reference, in case of const we can't assign a new array directly as it's address is different
// const a=[67,34,32]
// a=[65,34,32]

// let arr=[1,2,3,4,5,6,7]
// const arr2=arr.slice(2,5)
// console.log(arr,arr2)

// const arr3=arr.splice(1,4,'rohan',true)
// console.log(arr,arr3)

// const arr=[1,2,3,4]
// const arr2=[5,6,7,8]
// // const arr3=arr.concat(arr2)
// const arr3=[...arr,...arr2]
// console.log(arr3)

// join

const names=['alice','bob','john','charlie','sunny']
console.log(names.toString())
console.log(names.join('-'))
console.log(names.indexOf('john'))
console.log(names.includes('bob'))
names.sort()
names.reverse()
console.log(names)

const arr = ["101", "90", "54", "900", "300"];
console.log(arr.sort((a, b) => a - b));

// flattening an array

const arr=[1,2,3,4,[4,3,4,5,[1,2,3]],4,3,4]
console.log(arr[4][1])
console.log(arr.flat(Infinity))