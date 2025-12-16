"use strict";

// 1. function to greet a person
function greet(name) {
  console.log("Hello " + name);
}

greet("Mary"); //2.  Function to add two numbers

function add(a, b) {
  return a + b;
}

var result = add(2, 3);
console.log(result); // 3.Function to check even or odd

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7)); // 4. Function to multiply two numbers

function multiply(a, b) {
  return a * b;
}

console.log(multiply(7, 3)); // 5. Function to convert Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
  var fahrenheit = celsius * 9 / 5 + 32;
  return fahrenheit;
}

console.log(celsiusToFahrenheit(100)); // 212
//6. fizzbuzz fiction

function fizzBuzz(n) {
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
} //7. Function to check for leap year


function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2020)); // true

console.log(isLeapYear(1900)); // false