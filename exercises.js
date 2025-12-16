//create a function that takes a name as the parameter and returns a greeting message
function greet(name) {
  console.log("Hello " + name);
}

greet("Mary");

function add(a, b) {
  return a + b;
}
let result = add(2, 3);
console.log(result);

 // Function to check even or odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkEvenOdd(4)); // Even
console.log(checkEvenOdd(7)); // Odd
 
