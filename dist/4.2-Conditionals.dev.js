"use strict";

// the if statement-
//let age = 18;
//
//if and else statement(BASIC CONDITIONALS)
//let marks = 40;
if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
} //let age = 16 
//if (age >=18) {"you are an adult"}
//else{ 
// console.log("you are a child")
//}
// only one block of code will be executed never both 
//the ouput will be  "fail"
// javascript checks the condition if its true it runs it if it false it skips it
// if statement 


var isHungry = true;

if (isHungry) {
  console.log("Eat food");
}

console.log("Continue with day"); // the if statement is true so it will print 'Eat food' and Continue with your day
// else if (multiple choices)

var score = 70;

if (score >= 75) {
  console.log("Grade A");
} else if (score >= 60) {
  console.log("Grade B");
} else {
  console.log("Fail");
} //this will print Grade B since the score fall it falls in that category
//IF ELSEIF ELSE 
// 3-9 -> lower primary
// 10-14 -> upper primary
// 15-18 -> secondary
//19-23  -> university
//24-... -> not in 8-4-4 


var age = 2;

if (age >= 3 && age <= 9) {
  console.log("Lower primary");
} else if (age >= 10 && age <= 13) {
  console.log("Upper primary");
} else if (age >= 14 && age <= 18) {
  console.log("Secondary");
} else if (age >= 19 && age <= 23) {
  console.log("University");
} else {
  console.log("Not in 8-4-4 system");
}

if (age >= 3) {
  if (age <= 9) {
    console.log("Lower primary");
  } else if (age <= 13) {
    console.log("Upper primary");
  } else if (age <= 18) {
    console.log("Secondary");
  } else if (age <= 23) {
    console.log("University");
  } else {
    console.log("Not in 8-4-4 system");
  }
} else {
  console.log("Not in 8-4-4 system");
} //switch case statement


var light = "green";

switch (light) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Get ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid light");
} // the output will be Go since the light is green