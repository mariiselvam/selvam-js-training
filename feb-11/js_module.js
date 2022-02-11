import { a , str } from "./addition.js";
// Default function export any name 
import mul from "./addition.js";
import {names} from "./addition.js";
import {User} from "./addition.js";

// ------- COMMON JS ------
// const getFullname = require ("./addition.js");

// console.log("getFullname",getFullname("AR", "Rahman"));
console.log(a);
console.log(str);
console.log(mul(10,5));
console.log(names(10 , 5));

var users = new User("Jack","jack@gmail.com");
console.log(users.getInfo());
users.addCourse("Html");
users.addCourse("CSS");
users.addCourse("JS");
console.log("Straight View",users.getCourse());

let cour = users.getCourse();
cour.forEach((course) => {
  console.log("forEach loop view : ",course);
});


// ---------- Module Pattern ------------
// Immediate Invoked Function
// Call the function at runtime and store data in declar value Ex : var add
var add = function (num1, num2) {
  let res = num1 + num2;
  console.log("Immediate Invoked Function :" , res);
}(7, 2);

// #Example - 1
function EmployeeDetails() {
  var name = "Mayank";
  var age = 30;
  var designation = "Developer";
  
  return {
    name: name,
    age: age,
    designation: designation
  };
}

var newEmployee = EmployeeDetails();
var user ={};

user.Name = newEmployee.name;
user.Age = newEmployee.age;
user.Designation = newEmployee.designation;
console.log(user);

// #Example - 2
var metho = (function values() {
  var a = 10;
  var b = 5;
  let str = "Example Of Pattern Using String";
  function multi(){
    return a * b;
  }
  return {
    strings : str, 
    multvalue : multi,
    // Using Function
   
    addvalue : function add() {
      var aa = a;
      var bb = b;
      return aa + bb;
    },
    subvalue : function sub() {
      return a - b;
    },
    
    // Using Str Value
    
  };
})();
// const value = values();
console.log(metho.strings);
console.log(metho.multvalue());
console.log(metho.addvalue());
console.log(metho.subvalue());



