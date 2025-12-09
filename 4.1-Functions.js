//functions that say something
function sayHi() {
  console.log("Hi!");
}

//a function that needs  more information
function greet(name) {
  console.log("Hello " + name);
}
greet("Mary");

// a function that gives back an answer
function add(a, b) {
  return a + b;
}
let result = add(3, 2);
console.log(result);// the result will be 5

// the arrow function 
const add = (a, b) => a + b;

