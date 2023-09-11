// Defining function using arrows
function someFunction() {

}

const someFunction = () => {

}

// if u want to export, just add export to arrow
export default function someFunction() {

}

export const someFunction = () => {

}

// this below is react example
const MyComponent = () => {
    return <div> </div>
};

// second example : anon function
// which it dont have any function name to it
<button 
    onClick={() => {
        console.log("hello world");
    }}
></button>;


// Ternary operation
// example simple one of js
let age = 10;
let name = "Aqil";

if (age > 10) {
    name = "Aqil"
} else {
    name = "Jack"
}

// basically shortent the if else sentences
//  "if age is bigger than 10, the name would be Aqil, if not it is Jack"
let age2 = 16;
let name2 = age2 > 10 && "Aqil"; 
let name3 = age2 > 10 ? "Aqil" : "Jack"; 

const Component = () => {
    return age > 10 ? <div> Aqil </div> : <div> Jack </div>;
};


// Objects
// this usual is taking too much space
const person = {
    name: "meow",
    age: 20,
    isMarried: false,
};

const name = person.name
const age = person.age
const isMarried = person.isMarried

// use destructuring property of objects in react
const { name, age, isMarried} = person;

// if u want to set the object to get a value of the same variable name
const name = "Aqil"
const age = 20;

const person = {
    name,
    age,
};

// If u want things in object same as object 2
const game = {
    name: "SAO",
    releaseDate: 20,
    avaDevice: "android"
};

const game2 = {...game, name: "meow"};

// same thing as array, add value in an array
// bike + drag = bike2
const bike = ["sport", "city"];
const bike2 = [...bike, "drag"];


// 3 Function that can manipulate array
// .map() .filter() .reduce()

// what is map? map is like taking every element like using 'while, for each, for'
let names = ["Pedro", "Jesicca", "Carol"];
// for each element that exist in the element will be executed 
// example to change every element to plus 1 exp: Pedro1, Jesicca1, Carol1
names.map((name) => { 
    return name + "1";
    console.log(name);
})
// exp in React
// it basically print every name with h1
names.map((name) => { 
    return <h1> {name} </h1>
})


// what is filter? filter can remove or quarantine certain value in the variable
names.filter((name) => {
    return name !== "Pedro";
    console.log(name);
    // return output = [Jesicca and Carol]
})
