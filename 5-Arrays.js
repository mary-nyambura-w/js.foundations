//the 10 most common array methods in javascript
 

// push() - adds an element to the end of an array
//returns the new length of the array
//it mutates the original array
 ;

let colors = ["red", "blue"];
colors.push("green");
console.log(colors); // ["red", "blue", "green"]
console.log(colors.length); // 3    



//pop() - removes the last element from an array
//returns the removed element
//it mutates the original array
let fruits = ["apple", "banana", "orange"];
let removedFruit = fruits.pop(); // fruits is now ["apple", "banana"]
console.log(fruits);
console.log(removedFruit); // "orange"

 

//shift() - removes the first element from an array
//returns the removed element
//it mutates the original array
let animals = ["cow","goat" , "pig"];
let removedElement = arr.shift(); // arr is now [2, 3]
console.log(arr);
console.log(removedElement);

//unshift() - adds an element to the beginning of an array
//returns the new length of the array
//it mutates the original array
let patients = ["Patient B", "Patient C"];
patients.unshift("Patient A");

console.log(patients);
console.log(patients.length); // 3
//indexOf() - returns the first index of a specified element in an array
//returns -1 if the element is not found
//it does not mutate the original array
let seats = ["A1", "A2", "A3", "A4"];

console.log(seats.indexOf("A3")); // 2


//lastIndexOf() - returns the last index of a specified element in an array
//returns -1 if the element is not found
//it does not mutate the original array
let letters = ["a", "b", "c", "b", "d"];

console.log(letters.lastIndexOf("b")); // 3
 

//slice() - returns a shallow copy of a portion of an array into a new array
//does not mutate the original array
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 4); // newArr is [2, 3, 4]
console.log(newArr);    
console.log(arr);

//splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements
//mutates the original array
let numbers = [10, 20, 30, 40];
let removed = numbers.splice(1, 2, 25, 35); 
// Remove 2 elements at index 1, add 25 & 35
console.log(numbers); // [10, 25, 35, 40]
console.log(removed); // [20, 30]
       

//forEach() - executes a provided function once for each array element
//does not mutate the original array
let emails = ["a@mail.com", "b@mail.com"];
emails.forEach(email => console.log("Reminder sent to", email));
console.log(emails);

//map() - creates a new array populated with the results of calling a provided function on every element in the calling array
//does not mutate the original array
let prices = [100, 200, 300];
let withVAT = prices.map(price => price * 1.16);

console.log(withVAT); // [116, 232, 348]
console.log(prices); // [100, 200, 300]

//filter() - creates a new array with all elements that pass the test implemented by the provided function
//does not mutate the original array
let products = [
  { name: "Shoes", available: true },
  { name: "Bag", available: false }
];

let availableProducts = products.filter(p => p.available);
console.log(availableProducts); // [{ name: "Shoes", available: true }]
console.log(products);
//reduce() - executes a reducer function on each element of the array, resulting in a single output value
//does not mutate the original array
let scores = [10, 20, 30];
let total = scores.reduce((acc, score) => acc + score, 0);
console.log(total); // 60
console.log(scores); // [10, 20, 30]


//ARRAYS AND CONDITIONALS 
let users = [
  { name: "Mary", role: "admin" },
  { name: "Jane", role: "user" },
  { name: "John", role: "guest" }
];

for (let user of users) {
  if (user.role === "admin") {
    console.log(user.name + " has full access");
  } else {
    console.log(user.name + " has limited access");
  }
}
 

