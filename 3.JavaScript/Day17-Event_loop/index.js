// JS is a single threaded synchronous language, which means it can execute only one task at a time line by line it blocks the execution of other tasks for that time.
console.log("first");
console.log("second");
console.log("third");

console.log("first");
let sum = 0;
// for(let i=0;i<7300000000;i++){
//     sum+=i
// }
console.log(sum);
console.log("second");

console.log("hello");
setTimeout(() => {
  console.log("inside timeout");
}, 3000); // if js is single threaded then why this timeout is not blocking the execution of next line, and who is counting the time while the executon is blocked
// there is something which is handling these behavior asynchronously.
// here comes the role of web APIs provided by browser or nodejs environment
console.log("hi");

// when we execute the code GEC is created in the call stack and after ecexution is finished it will be removed from the call stack, JS didn' wait for anything as it can freeze our webpage, user can't perform any action to our webpage
// so the web APIs take the responsibility of handling these async tasks like setTimeout, DOM events, fetch api etc.
// API is simply a set of defined rules to communicate between different softwares, or in simple terms it is a function call which help us achieve the defined task, in simple terms it is just a function call, API calls are everywhere in programming
// window is the global object in browser environment and it provides many built in APIs like setTimeout, DOM events, fetch api etc

// when execution of program start GEC is created in call stack and start executing code one by one and when it reaches setTimeout it register the callback function with web API and set the timer for 3 sec and move to next line without waiting for timeout to complete
// after 3 sec the callback function is moved to callback queue
// now the event loop continuously checks whether is there any callback function in the callback queue and the call stack is empty or not if it is empty then it push the first task from callback queue to call stack for execution
// here the call stack is empty after executing all synchronous code so the event loop push the callback function of setTimeout to call stack for execution
// this is how JS handle async tasks without blocking the execution of other tasks
// it wait for the call stack to be empty and then push the callback function from callback queue to call stack for execution for predictable and smooth execution of code and output

// JS is single threaded but browser environment is multi threaded as it can handle multiple tasks at a time using web APIs and event loop

const user = fetch("https://api.github.com/users/abhijeet-0513");
user.then((data) => data.json()).then((res) => console.log(res));
// console.log(user);

// there are three main parts of async JS
// 1. Web APIs: provided by browser or nodejs environment to handle async tasks
// 2. Callback queue: where the callback functions are stored after the async task is completed
// 3. Event loop: which continuously checks whether the call stack is empty or not and push the callback functions from callback queue to call stack for execution

// queue is of two types callback queue and microtask queue
// microtask queue has higher priority than callback queue
// microtask queue is used to store the promises and mutation observers
// after the execution of synchronous code the event loop first check the microtask queue if it has any task then it push the task to call stack for execution and then check the callback queue
// what are the things which goes to microtask queue and callback queue
// promises and mutation observers goes to microtask queue
// setTimeout, setInterval, DOM events goes to callback queue