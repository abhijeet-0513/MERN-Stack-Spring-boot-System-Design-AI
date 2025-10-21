document.body.style.backgroundColor = "black";
document.body.style.color = "white";

function handleClick(){
    const id=document.getElementById('first')
    id.textContent='Click Evevt Triggered'
}

const element = document.getElementById("first");
element.onclick = function handleClick() {
  element.textContent = "click event triggered";
};

element.onclick = function handleClick() {
  element.textContent = "overridden event";
};

// we don't apply event listener as mentioned above because it just override the previous one as it is just a method of the object so if we assign any other function it simply remove the previous one and attach the new method to apply all the event we use addeventlistener method with this method we can attach multiple event listeners and all will be executed

element.addEventListener("click", () => {
  element.textContent = "click event triggered, addEvevtlistener";
  element.style.backgroundColor = "brown";
});

element.addEventListener("dblclick", () => {
  element.textContent = "click event triggered, addEvevtlistener";
  element.style.backgroundColor = "brown";
});

element.addEventListener("mouseenter", () => {
  element.textContent = "Hello from Javascropt events";
  element.style.backgroundColor = "";
});

element.addEventListener("mouseleave", () => {
  element.textContent = "click event triggered, addEvevtlistener";
  element.style.backgroundColor = "brown";
});

let a = {
  greet: function (value) {
    console.log(`hello ${value}`);
  },
};

a.greet(10)
a.greet(30)

const child1=document.getElementById('child1')
child1.addEventListener('click',()=>{
    child1.textContent='I am clicked'
})

// const parent = document.getElementById("parent");
// console.log(parent.children);

for (let child of parent.children) {
  child.addEventListener("click", () => {
    child.textContent = "I am clicked";
  });
}

//  the above concept is called event delegation in which we attach event listeners to each child through looping on htmlcollection returned by parent.children method instead of writing separate code for each child, Although this is also not an optimal approach it takes more memory not work with dynamic child etc.

// Event-Bubbling
// // it also has a third argument which takes boolean value, and its default value is false, if we mark it as true then event bubbling will happen in reverse

const gparent=document.getElementById('gparent')
gparent.addEventListener('click',(e)=>{
  console.log('grandparent is clicked')
  console.log(e.target) // returns the element which has triggered the event
},true)

// const parent=document.getElementById('parent')
parent.addEventListener('click',(e)=>{
  console.log('parent is clicked')
  console.log(e)
})

const child=document.getElementById('child')
child.addEventListener('click',(e)=>{
  console.log('child is clicked')
  console.log(e)
  e.stopPropagation()
})

// when a event happens browser knows on which element it has occured, we have window element then comes document then html then body and head then grandparent parent and child, when an element is clicked browser knows which element getc clicked then browser divide it into 3 phases, first it turns on capture phase, target phase and bubbling phase, it start capture phase first when we click it starts traversing the tree from the top like window then document then body the till the target element, then it start bubble phase and look for any event attached to the child element if yes it will execute the move to parent and grandparent and do the same and bubble upto window and execute if any event found
// the last argument tells about capture mode is on or off, if on(true) in that case it do all the same thing but it execute the event listener in capture phase after reaching target element when bubbling start it can't execute event listener as capture is true

// if capture is on then event gets executed in capture phase top-down, if off then event will be executed in bubbling phase down to top, we generally don't use capture mode

// when we attach eventlistener it also gives us an event object which contains a lot of information

// handling multiple elements by single event listener with the help of event object and event.target

// const parent = document.getElementById("parent");
console.log(parent.children);
parent.addEventListener("click", (e) => {
  console.log(e.target);
  e.target.textContent = "I am Clicked";
});

parent.removeEventListener('click',(e)=>{
e.target.textContent='parent'
})

// we also need to remove event listeners
// don't do parent.removeEventListener because both of these are different functions and get different memory as it is also an object, so better approach is create a separate function for this

const parent = document.getElementById("parent");
function handleClick(e) {
  e.target.textContent = "I am clicked";
  parent.removeEventListener("click", handleClick);
}
parent.addEventListener("click", handleClick);
// parent.removeEventListener('click',handleClick) // in this approach both of these are pointing to the same object
