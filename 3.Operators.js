
let a = 22;
let b = 4;
// arithimetic operators
console.log("BASIC OPERATORS");
console.log("Addition:",a+b);// addition
console.log("Subtraction:",a-b); //subtraction
console.log("Division",a/b); //division
console.log("Modulus",a%b); //modulus


let age=20 
 age = age + 10
 age +=10

 age = age - 10
 age -=10

 age = age / 2
 age /= 2

 age = age * 2
 age *= 2
 
//comparison operators
console.log("Is a > b?", a > b);
console.log("Is a < b?", a < b);
console.log("is a ==b?", a==b);
console.log("is a===b?", a===b)
console.log("is a!=b", a!=b)

//assignment operators
let a = 5; // Simple assignment
a += 3; // Addition assignment: a = a + 3 (a is now 8)
a -= 2; // Subtraction assignment: a = a - 2 (a is now 6)
a *= 4; // Multiplication assignment: a = a * 4 (a is now 24)
a /= 2; // Division assignment: a = a / 2 (a is now 12)

//Ternary Operator
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor"; // status is "Adult"

// string 
let firstname= "Mary"
let lastname =" Nyambura 
let fullname= firstname+ lastname 
console log (full name )// joins the two strings to one string 

// longical operetors
//AND (&&)
// Returns the value the first truthy value or last falsy value if all are falsy 

// falsy value
// false 
// null 
//nan
//0
//undefined


// OR(//)
//returns the value of the fist falsy value or last truthy value if they all are truthy
console.log(""&&"hello")//("") because it is the first falsy AND returns the first falsy value 
console.log(""|| "hello")//("hello" the first truthy value )
console.log(0||7)//(7)the first truthy value OR returns the first truthy
console.log("hey there"&& "false"&& true)//(true)it is the last truthy value AND returns the first falsy value or th
console.log(0||""|| null||"false")//("false") the first truthy value

 let age = 10;

console.log(age >= 18 && age <= 35);// false- it  is the first falsy value . AND returns the first falsy valu
console.log(age < 20 || age > 60);// true - the first truthy, OR returns the first truthy value
console.log(age < 18 && "You are a child");//"your are a child "- the last truthy value - AND returns the last truthy value the all are truthy  
console.log(age >= 18 && "You are an adult");// false- the first falsy value-AND returns the first falsy valu
console.log(age >= 18 && age <= 35 && "You are among the youth");// false- the first falsy value- AND returns the first falsy valu
console.log((age >= 18 && age <= 35) || "You are not youth"); // you are not youth - because it is the first truthy value 
// the first part is  false so this makes it falsy