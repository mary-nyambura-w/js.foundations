//CODE INSIDE A FUNCTION WILL NEVER BE EXECUTED UNTIL A FUNCTION IS EXECUTED UNTIL THE FUNCTION IS CALLED /INVOKED
//functions that say something

console.log("Hey");

function callMe() {
  console.log("i have been called");
}

console.log("Hey there ");

callMe();
// by default the javacript runs the code from top to bottom 
// it will first run the console.log(Hey )
//the java goes to the next code but in fuction it will have to to be called to be executed , since this is not called it will not be executed
//the goes to the next code which will be executed to "Hey there"
//goes to the next code which calls out the function  this will lead to function to be executed to "Ihave been called"

console.log("Hey");

function callMe() {
  console.log("i have been called");
}
callMe();
console.log("Hey there ");

// What will be executed will be , I have been called, Hey, hey  there
