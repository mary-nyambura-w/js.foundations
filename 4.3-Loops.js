//for loop(common )
// for (first, condition,change ){code to repeat}
for (let i = 0; i < 3; i++) {
  // Code to be executed 3 times (i = 0, 1, 2)
}

for (let x = 1; x <= 3; x++) {
  console.log("hello");
}


//while
 
let i = 1
while( i<=3 ){ 
  console.log("Hi");i++}
//this will print hi three times 


for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}


for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

//loops and arrays
let names = ["Mary", "Jane", "John"];

for (let name of names) {
  console.log(name);
}
// loops and objects
let user = {
  name: "John Doe",
  age: 30,
  role: "Admin"
};  
for (let key in user) {
  console.log(key + ": " + user[key]);
}

// lops and conditionals
let ages = [12, 20, 15, 30];

for (let age of ages) {
  if (age >= 18) {
    console.log(age + " is adult");
  }
}//this will print only adult ages

//nested loops
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}
//this will print pairs of i and j values
// output:
// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3  
// in nested loops the inner loop runs fully every time the outer loop runs once

// for loop is best when you know how many times you want to loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// while loop is best when you want to loop until a certain condition is met
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
// for...of best with arrays and strings
for (let key in user) {
  console.log(key, user[key]);
}
// for...in best with objects
for (let name of names) {
  console.log(name);
}

// while loop best when the number of iterations is not known in advance
let randomNum;
while (randomNum !== 5) {
  randomNum = Math.floor(Math.random() * 10);
  console.log(randomNum);
}
// This will keep generating random numbers until it gets a 5

// do...while loop best when you want to ensure the loop runs at least once
let input;
do {
  input = prompt("Enter a number greater than 10:");
} while (input <= 10);
// This will keep prompting the user until they enter a number greater than 10  

