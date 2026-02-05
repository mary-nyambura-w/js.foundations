// objects in js is a way to store multiple values in a single variable
// is a way to group related  informanations and actions together 
 let phone ={
    brand :"samsung",
    model :"galaxy S21",
    color :"black",
    price :1200,
    storage :"128GB",
    call : function(){
       return "calling...";
    }
    takePhoto : function(){
         return "taking photo...";
    }

 }
 //objects inside objects
 let user = {
    name :"John Doe",
    age :30,
    address :{
        street :"123 Main St",
        city :"New York",
        zip :"10001"
    },
    getFullAddress : function(){
        return this.address.street + ", " + this.address.city + ", " + this.address.zip;
    }
 }

 // object on arrays
 let users = [
  { name: "Mary", role: "Admin" },
  { name: "Jane", role: "User" },
  { name: "John", role: "Editor" }
];

const person = { firstName: "John", lastName: "Doe",age:25 }; 
//accessing object properties
// task - to decribe a car using object
console.log(firstName);// John 
console.log(lastName);// Doe
console.log(age)

let car = {
    make :"Toyota",
    model :"Camry",
      year :2020,

      color :"blue",

      start : function(){
        return "car started";
      }

}
