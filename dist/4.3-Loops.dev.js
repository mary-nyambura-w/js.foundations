"use strict";

//for loop(common )
// for (first, condition,change ){code to repeat}
for (var _i = 0; _i < 3; _i++) {// Code to be executed 3 times (i = 0, 1, 2)
}

for (var x = 1; x <= 3; x++) {
  console.log("hello");
} //while


var i = 1;

while (i <= 3) {
  console.log("Hi");
  i++;
} //this will print hi three times 


for (var _i2 = 1; _i2 <= 5; _i2++) {
  if (_i2 === 3) {
    break;
  }

  console.log(_i2);
}

for (var _i3 = 1; _i3 <= 5; _i3++) {
  if (_i3 === 3) {
    continue;
  }

  console.log(_i3);
} //loops and arrays


var names = ["Mary", "Jane", "John"];

for (var _i4 = 0, _names = names; _i4 < _names.length; _i4++) {
  var name = _names[_i4];
  console.log(name);
} // loops and objects


var user = {
  name: "John Doe",
  age: 30,
  role: "Admin"
};

for (var key in user) {
  console.log(key + ": " + user[key]);
} // lops and conditionals


var ages = [12, 20, 15, 30];

for (var _i5 = 0, _ages = ages; _i5 < _ages.length; _i5++) {
  var age = _ages[_i5];

  if (age >= 18) {
    console.log(age + " is adult");
  }
} //this will print only adult ages
//nested loops


for (var _i6 = 1; _i6 <= 2; _i6++) {
  for (var j = 1; j <= 3; j++) {
    console.log(_i6, j);
  }
} //this will print pairs of i and j values
// output:
// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3  
// in nested loops the inner loop runs fully every time the outer loop runs once
// for loop is best when you know how many times you want to loop


for (var _i7 = 0; _i7 < 5; _i7++) {
  console.log(_i7);
} // while loop is best when you want to loop until a certain condition is met


var count = 0;

while (count < 5) {
  console.log(count);
  count++;
} // for...of best with arrays and strings


for (var _key in user) {
  console.log(_key, user[_key]);
} // for...in best with objects


for (var _i8 = 0, _names2 = names; _i8 < _names2.length; _i8++) {
  var _name = _names2[_i8];
  console.log(_name);
} // while loop best when the number of iterations is not known in advance


var randomNum;

while (randomNum !== 5) {
  randomNum = Math.floor(Math.random() * 10);
  console.log(randomNum);
} // This will keep generating random numbers until it gets a 5
// do...while loop best when you want to ensure the loop runs at least once


var input;

do {
  input = prompt("Enter a number greater than 10:");
} while (input <= 10); // This will keep prompting the user until they enter a number greater than 10