// const element = React.createElement("h1", { id: "title" }, "Hello from react");

// const element2 = React.createElement(
//   "div",
//   null,
//   React.createElement("h1", null, "Hello  react"),
//   React.createElement("h1", null, "Hello from element2")
// );

// JSX: Javascript XML: looks like HTML

// const element = <h1 id="title">Hello From JSX</h1>;
// const element2 = (
//   <div>
//     <h1>hELLO BABEL</h1>
//     <h2>Hello JSX</h2>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element2);

// wrap multiline code in ()
// functional  component is react is just a function which takes input as props and return jsx to make the structure of page, we keep the component in pascal case so it can  differentiate between html tag and component or custom built component

// to write any JS expression(which produces a single value) in JSX we have to use {}

// whenever we pass values in components it wraps it in a object, with key and value which is called props or properties, it can be called anything

// to write inline styles <App style={{backgroundColor:'black',color:'white'}}/>

function Header() {
  return <h1>Welcome to the Header section</h1>;
}
function Main() {
  return <h1>Welcome to the Main section</h1>;
}
function Footer() {
  return <h1>Welcome to the Footer section</h1>;
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}


// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");

// const element2 = React.createElement('div',null, 
//     React.createElement('h1',null,"Hello"), 
//     React.createElement('h2',null,"hi"));


// JSX: javascript XML: Look like HTML (Babel)
// JSX --> React.createELement() --> React Element(JS Object) --> Real DOM(HTML ELEMENT)
//     babel                    React                        RectDOM

// <h1 id="title">Hello Coder Army</h1> --> React.createElement('h1',{id:'title'},"Hello Coder Army") --> {type:"h1", props:{id:"title", children:"Hello Coder Army"}} --> <h1 id="title">Hello Coder Army</h1>
// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");

// const element = <h1 id="title" className="first">Hello Coder Army</h1>;
// console.log(element);


// const element2 = (<div>
//     <h1>Hell</h1>
//     <h2>hi</h2>
// </div>);

// React.createElement('div',null,
//     React.createElement("h1",null,"Hello Coder Army"),
//     React.createElement("h2",null,"Kaise ho")
// )



// React Element
// const element3 = (<div>
//     <h1>Hello Coder Army</h1>
//     <h2>Kaise ho</h2>
//     </div>
// )

// React Component

// function App(name){

//     return (
//         <h1>Hello Coder Army {10+20}</h1>
//     );
// }



// const a = App("Rohit");
// text/element: Javascript ka expression aap iske andar likh sakte hain
// Number, string, true false, null, undefined, array, object

// Number, string, array
// true false null undefined (render honge lekin kuch display nahi hoga)
// Object: Error

// const age= 10;
// const isLoggedIn = true;
// const element = <h1>Hello Coder {isLoggedIn?<h2>Logged In</h2>:<h2>Kindly SignIn</h2>}</h1>

// React.createElement("ul",null,[React.createElement("ul",null,<li>HTML</li>)
// ,React.createElement("ul",null,<li>CSS</li>)])

// const courses = ["HTML","CSS","Javascript","React"];
// // [<li>HTML</li>,<li>CSS</li>,<li>JavaScript</li>,<li>React</li>]
// const element = (
// <ul>
//     {courses.map(course=><li>{course}</li>)}
// </ul>
// )

// const ab = {backgroundColor:"orange", color:"white"}
// const element = <h1 id="title" className="first" style={{backgroundColor:"orange", color:"white"}}>Hello Coder Army</h1>

// function App(props){
    
//     return (
//         <h1>Hello Coder Army {props.name} {props.age}</h1>
//     )
// }

// {
//     name:"Rohit",
//     age:30
// }

// React.createElement("h1")
// const element = <App  name="Rohit" age={30}></App>


function Header({name}){

    return (
        <h1>{name} Welcome to Indian Election Commission Website</h1>
    )
}

// const props = {
//     name:"Rohit"
// }

// const {name} = props;

function Main({user}){

    return (
        <>
        <h2>Hi {user.name}</h2>
        <h3>{user.age>18? "Ypur are eligible for vote": "Your are not eligible for vote"}</h3>
        <p>Your city is {user.city}</p>
        </>
        
    )
}

function Footer(){

    return (
        <h3>Thansk for visiting our website</h3>
    )
}

// function Card(){

// }


function App(){

    return (
        <>
       <Header name="Rohit"></Header>
       <Main user={{name:"Rohit",age:30,city:"Kotdwar"}}></Main>
       <Footer />
       </>
    )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App/>);

// App()
// <App/>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
