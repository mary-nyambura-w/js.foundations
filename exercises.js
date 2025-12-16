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
console.log(checkEvenOdd(4));  
console.log(checkEvenOdd(7)); 
 
function multiply(a,b) {
    return a * b
}
console.log(multiply(7, 3));  
 
// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
 
console.log(celsiusToFahrenheit(100)); // 212
