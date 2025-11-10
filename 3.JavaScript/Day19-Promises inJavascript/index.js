// Promises

console.log("start");

// code

// const users = fetch("https://api.github.com/users");
// // it is a async request it take some time but js can't wait it will provide it to the web api and move forward, fetch returns promise

// // console.log(users); // initially pending, we should consume it only when it is fulfilled or rejected

// // promise is a object, its initial state is pending, and we should read the values from it only when it is fulfilled or rejected

// const response = users.then((response) => {
//   //   console.log(response);
//   return response.json();
// });
// // console.log(response);
// response.then((data) => {
//   console.log(data);
// }); // we can make chain of promise

// fetch("https://api.github.com/usrs")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("Data is not present in the server");
//     }
//     res.json();
//   })
//   .then((data) => {
//     const parent = document.getElementById("first");
//     for (let i = 0; i < data.length; i++) {
//       const image = document.createElement("img");
//       image.src = data[i]["avatar_url"];
//       image.style.height = "70px";
//       image.style.width = "70px";
//       parent.append(image);
//     }
//   })
//   .catch((error) => {
//     const parent = document.getElementById("first");
//     parent.textContent = error.message;
//   });

// console.log("End");

// json is javascript object notation it cs understood by any language, it is a lightweight data intercgange format, we cant write undefined null, or even function in jsom, in json key and value are string.

// why JSON is required:
// as we know in frontend we use javascript but backend can be in any language like c/c++ java python so if every language uses it own format it will be difficult to understand, so we have to come with a common format which can be understood by every language, also it is in string format which is easy to transmit over the internet

// const JSObject = {
//   name: "rohan",
//   age: 23,
//   address: "delhi",
//   val: null,
//   val2: undefined,
// };
// const json = JSON.stringify(JSObject);
// console.log(json);

// const jsonFormat = `{"name":"rohan","age":23,"address":"delhi","val":null}`;
// const jsobj = JSON.parse(jsonFormat);
// console.log(jsobj);

// why JSON uses string format

// whenever server responds that case will always fall in fulfilled case, go in reject state only when we are not able to talk to the server,
// reject condition runs only in case when internet is down, server is down or dns is down, otherwise it will be considered as fulfilled, as server don't understands fulfilled rejects etc, it's our responsiblity how gracefully we handle those things

// Promise creation

const p1 = new Promise((res, rej) => {
  res("hello");
});
console.log(p1);

const p2 = new Promise((res, rej) => {
  rej("hello");
});
p2.then((res) => {
  console.log(res);
}).catch((err) => console.log(err.message));
console.log(p2);



// const j1 = {
//     name: "Rohit",
//     age: 30,
//     address: "dwarka",
// }


// // convert to json

// const jsonFormat = JSON.stringify(j1);

// console.log(jsonFormat);


// const jsonFormat = `{
//     "name":"Rohit",
//     "age": 30,
//     "address": "dwarka"
// }`;


// // java script object

// const JsObject = JSON.parse(jsonFormat);

// console.log(JsObject);

// zomato application

const orderDetail = {
    orderId: 123123,
    food:["Pizza","biryani","coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
}

function placedOrder(orderDetail){
    console.log(`${orderDetail.cost} Payment is in progress`);
    
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
     
      if(Math.random()>0.1){
      console.log("Payment is received and order get placed");
      orderDetail.status = true;
       resolve(orderDetail);
      }
      else{
        reject("Payment is failed");
      }

    },3000)
    })
   
}



function preparingOrder(orderDetail){
    console.log(`Your food preparation started of ${orderDetail.food}`);
    
    return new Promise((resolve,reject)=>{
  
     setTimeout(()=>{

        if(Math.random()>0.05){ 
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        resolve(orderDetail);
        }
        else{
            reject("Food item is not persent at restaurant");
        }
        
    },3000);
    })
    
}


function pickupOrder(orderDetail){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);
    
    return new Promise((resolve,reject)=>{


        setTimeout(()=>{
         if(Math.random()>0.05){   
        console.log("I have picked up the order");
        orderDetail.received = true;
        resolve(orderDetail);
        }
        else{
           reject("Delivery boy Unable to reach restaurant")
        }
    },3000);
    })
    
}


function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);
    
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("Order delivered succesfully");
        orderDetail.delivery = true;
        resolve(orderDetail);
    },3000)
    })
    
}


placedOrder(orderDetail)
.then((orderDetail)=>preparingOrder(orderDetail))
.then((orderDetail)=>pickupOrder(orderDetail))
.then((orderDetail)=>deliverOrder(orderDetail))
.then((orderDetail)=>{
    console.log(orderDetail);
})
.catch((error)=>{
    console.log("Error: ", error);
}).
finally(()=>{
    console.log("I am doing cleanup");
})
