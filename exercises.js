// 1. function to greet a person
function greet(name) {
  console.log("Hello " + name);
}
 greet("Mary");
//2.  Function to add two numbers
function add(a, b) { 
  return a + b;
}
let result = add(2, 3);
console.log(result);

 // 3.Function to check even or odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkEvenOdd(4));  
console.log(checkEvenOdd(7)); 
 // 4. Function to multiply two numbers
function multiply(a,b) {
    return a * b
}
console.log(multiply(7, 3));  
 
// 5. Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
 
console.log(celsiusToFahrenheit(100)); // 212

//6. fizzbuzz fiction
 function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        } else {/
            console.log(i);
        }
    }
}
   
  //7. Function to check for leap year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  } 
}
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false//an array of numbers that checks the highest price and  the lowest price

let prize = [120, 80, 200, 50, 300]; // array of numbers
let highest = prize[0]; // initialize highest with the first element
let lowest = prize[0]; // initialize lowest with the first element
for (let i = 1; i < prize.length; i++) {
  if (prize[i] > highest) {
    highest = prize[i];
  } /// if the current element is greater than the highest, update highest

  if (prize[i] < lowest) {
    lowest = prize[i];
  }
} // if the current element is less than the lowest, update lowest
  
   

  //BUBBLE SORT CODE
  let prices = [100, 200, 400, 300, 1000];
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = 0; j < prices.length - 1 - i; j++) {
      if (prices[j] > prices[j + 1]) {
        // swap prices[j] and prices[j + 1]
        let temp = prices[j];
        prices[j] = prices[j + 1];
        prices[j + 1] = temp;
      }

    }
  }
  console.log(prices); // Output: [100, 200, 300, 400, 1000]

  // desending order
  let costs = [500, 150, 300, 250, 400];
  function bubbleSortDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
          // swap arr[j] and arr[j + 1]
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  console.log(bubbleSortDescending(costs)); // Output: [500, 400, 300, 250, 150]
  // makes the code reusable by defining a function



//EXAMPLE 2 OF BUBBLE SORT

let scores = [85, 92, 78, 90, 88];
//
for(let i = 0 ; i<scores.lenghth -1 ;i ++){
  for (let j = 0 ; j < scores.length -1 -i;j++){
    if (scores[j] > scores[j+1]){
      let temp = scores [j];
      scores[j] = scores [j+1];
      scores [j+1] = temp;
    }
  }
}
console.log(scores); // Output: [78, 85, 88, 90, 92]/
// to make the code reusable we can define a function
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap arr[j] and arr[j + 1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
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
let x = [20, 400, 7, 50, 77, 1000];
let y = 40;
let z = 100;
let pricesInRange = [];
for (let i = 0; i < x.length; i++) {
  if (x[i] >= y && x[i] <= z) {
    pricesInRange.push(x[i]);
  }
}
console.log(pricesInRange);

// Output: [50, 77]
//x[i] → the current price

//>= y → not less than 40

//<= z → not more than 100

//&& → both conditions must be true

// given  a list of items with name and price. write  a program that prints the name and price of the most and least expensive items.

let items = [
  { name: "Item1", price: 150 },
  { name: "Item2", price: 80 },
  { name: "Item3", price: 300 },
  { name: "Item4", price: 50 }
];
let mostExpensive = items[0];
let leastExpensive = items[0];
for (let i = 1; i < items.length; i++) {
  if (items[i].price > mostExpensive.price) {
    mostExpensive = items[i];
  }
  if (items[i].price < leastExpensive.price) {
    leastExpensive = items[i];
  }



}
console.log("Most Expensive Item: " + mostExpensive.name + " - Price: " + mostExpensive.price);
console.log("Least Expensive Item: " + leastExpensive.name + " - Price: " + leastExpensive.price);  


