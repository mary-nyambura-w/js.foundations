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

console.log(isLeapYear(1900)); // false//an array of numbers that checks the highest price and  the lowest price

var prize = [120, 80, 200, 50, 300]; // array of numbers

var highest = prize[0]; // initialize highest with the first element

var lowest = prize[0]; // initialize lowest with the first element

for (var i = 1; i < prize.length; i++) {
  if (prize[i] > highest) {
    highest = prize[i];
  } /// if the current element is greater than the highest, update highest


  if (prize[i] < lowest) {
    lowest = prize[i];
  }
} // if the current element is less than the lowest, update lowest
//BUBBLE SORT CODE


var prices = [100, 200, 400, 300, 1000];

for (var _i = 0; _i < prices.length - 1; _i++) {
  for (var j = 0; j < prices.length - 1 - _i; j++) {
    if (prices[j] > prices[j + 1]) {
      // swap prices[j] and prices[j + 1]
      var temp = prices[j];
      prices[j] = prices[j + 1];
      prices[j + 1] = temp;
    }
  }
}

console.log(prices); // Output: [100, 200, 300, 400, 1000]
// desending order

var costs = [500, 150, 300, 250, 400];

function bubbleSortDescending(arr) {
  for (var _i2 = 0; _i2 < arr.length - 1; _i2++) {
    for (var _j = 0; _j < arr.length - 1 - _i2; _j++) {
      if (arr[_j] < arr[_j + 1]) {
        // swap arr[j] and arr[j + 1]
        var _temp = arr[_j];
        arr[_j] = arr[_j + 1];
        arr[_j + 1] = _temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSortDescending(costs)); // Output: [500, 400, 300, 250, 150]
// makes the code reusable by defining a function
//EXAMPLE 2 OF BUBBLE SORT

var scores = [85, 92, 78, 90, 88]; //

for (var _i3 = 0; _i3 < scores.lenghth - 1; _i3++) {
  for (var _j2 = 0; _j2 < scores.length - 1 - _i3; _j2++) {
    if (scores[_j2] > scores[_j2 + 1]) {
      var _temp2 = scores[_j2];
      scores[_j2] = scores[_j2 + 1];
      scores[_j2 + 1] = _temp2;
    }
  }
}

console.log(scores); // Output: [78, 85, 88, 90, 92]/
// to make the code reusable we can define a function

function bubbleSort(arr) {
  for (var _i4 = 0; _i4 < arr.length - 1; _i4++) {
    for (var _j3 = 0; _j3 < arr.length - 1 - _i4; _j3++) {
      if (arr[_j3] > arr[_j3 + 1]) {
        // swap arr[j] and arr[j + 1]
        var _temp3 = arr[_j3];
        arr[_j3] = arr[_j3 + 1];
        arr[_j3 + 1] = _temp3;
      }
    }
  }

  return arr;
}

console.log(bubbleSort(scores)); // Output: [78, 85, 88, 90, 92]
// given an arrayof prices of x , and a range from y to z , find the prices that fall within the range. 
// eg x = [20, 400,7,50, 77 , 1000], y=40, z =100
//output =  [50, 77]
// steps 1; deifine the array and the range 
// 2; 

var x = [20, 400, 7, 50, 77, 1000];
var y = 40;
var z = 100;
var pricesInRange = [];

for (var _i5 = 0; _i5 < x.length; _i5++) {
  if (x[_i5] >= y && x[_i5] <= z) {
    pricesInRange.push(x[_i5]);
  }
}

console.log(pricesInRange); // Output: [50, 77]
//x[i] → the current price
//>= y → not less than 40
//<= z → not more than 100
//&& → both conditions must be true
// given  a list of items with name and price. write  a program that prints the name and price of the most and least expensive items.

var items = [{
  name: "Item1",
  price: 150
}, {
  name: "Item2",
  price: 80
}, {
  name: "Item3",
  price: 300
}, {
  name: "Item4",
  price: 50
}];
var mostExpensive = items[0];
var leastExpensive = items[0];

for (var _i6 = 1; _i6 < items.length; _i6++) {
  if (items[_i6].price > mostExpensive.price) {
    mostExpensive = items[_i6];
  }

  if (items[_i6].price < leastExpensive.price) {
    leastExpensive = items[_i6];
  }
}

console.log("Most Expensive Item: " + mostExpensive.name + " - Price: " + mostExpensive.price);
console.log("Least Expensive Item: " + leastExpensive.name + " - Price: " + leastExpensive.price);