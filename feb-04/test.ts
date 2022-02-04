const user = {
  firstName: "Angela",
  lastName: "Los",
  role: "Professor",
}
console.log(user);
console.log(user.firstName);


// Var & Let Using Function Name
function varTest(){
  var num1 =10;	    
  console.log(num1);  
  if(true){
   var num2=20;       
   console.log(num2); 
  }
  console.log(num1);  
  console.log(num2); 
}

var num:number = 10; 
var result = num > 0 ?"positive":"negative" ;
console.log(typeof(result),result);


var person: any = {Fname:"Rajeev", Lname:"Johari", Age:40};
var perproperty;
for (perproperty in person) {
console.log(perproperty + ": " + 
person[perproperty ]);
}

// Function()

function paramTest(rollNo:number,name:string): void { 
  console.log(rollNo);
  console.log(name);
} 
paramTest(645,"Jai");

// Optional parameter
function dispDetails(fname:string,lname?:string) {  
  console.log("Fisrt Name",fname); 

  if(lname!=undefined)  
  console.log("Last Name",lname); 
}
dispDetails("Asmita");
dispDetails("Nidhi", "Gupta");

// Add mutiple Parameters
function showNames(...names:string[]) {    
  for(var i = 0;i<names.length;i++) { 
     console.log(names[i]);
  } 
} 
showNames("Rajeev","Gunjan","Vikram","Asmita"); 
showNames("Mahesh", "Jai", "Narender", "Hilil", "Hemant");

// Numbers
var numb = new Number(7.723456);
console.log(numb.toExponential());
console.log(numb.toFixed());
console.log(numb.toPrecision(4)); 
console.log(numb.valueOf());

function numTest(num1:any){
  console.log(num1); 
}
var num1 = new Number(123);
var num2 = new Number("Hello");
numTest(num1);
numTest(num2);

//Date
function dateTest(date:Date):void{
  var hours=date.getHours();
  var minutes=date.getMinutes();
  var seconds=date.getSeconds();
  console.log("Current Time: "+hours+":"+minutes+":"+seconds); 
}
var date=new Date();
dateTest(date);

// Array 
function arrayTest(names:any):void{
  for (var i=0;i<names.length;i++){  
    console.log(names[i]); 
  }
}
var names:string[] = new Array("Jai","Vivek","Mahesh","Narender","Hoili","Hemant");
arrayTest(names);

// Union
function unionTest(value:string|number):void{
  console.log(value); 
}
unionTest("Jai");
unionTest(123);

// Interface
interface IPerson { 
  firstName:string, 
  lastName:string, 
  sayHi: ()=>string 
} 

var customer:IPerson = { 
  firstName:"Ajay",
  lastName:"Mah", 
  sayHi: ():string =>{return "Hi"} 
} 

console.log("Customer Object Details: ");
console.log(customer.sayHi()); 
console.log(customer.firstName); 
console.log(customer.lastName); 

// Class 
class Employee { 
  name:string; 
  constructor(name:string) { 
     this.name = name; 
  }  
  display():void { 
     console.log("Employee Name: "+this.name);
  } 
} 
var obj = new Employee("Jai");
console.log("Employee Name: "+obj.name);  
obj.display();

// Static 
// Call a class in directly without create object ( or ) Interface
class Circle {
  static pi = 3.14;
  pi = 3;
}
console.log(Circle.pi); // returns 3.14
let circleObj = new Circle();
console.log(circleObj.pi); // returns 3

// Abstract
abstract class Department {
  constructor(public name: string) {}
 
  printName(): void {
    console.log("Department name: " + this.name);
  }
 
  abstract printMeeting(): void; // must be implemented in derived classes
}
 
class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // constructors in derived classes must call super()
  }
 
  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }
 
  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}
 
let department: Department; // ok to create a reference to an abstract type
// ------- department = new Department(); // error: cannot create an instance of an abstract class
// Cannot create an instance of an abstract class.
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
// ------- department.generateReports(); // error: department is not of type AccountingDepartment, cannot access generateReports
//Property 'generateReports' does not exist on type 'Department'.



// Object
class Employees { 
  //field 
  name:any; 
  empId:any;  
} 
//function
var display = function(obj: {name:string, empId:string}) { 
 console.log("Employee Name: "+obj.name);
 console.log("Employee EmpId: "+obj.empId);
} 

//create an object 
var obj1:Employees = {name:"Jai", empId:"EMP024"};

//access the function
display(obj1);

// Duck Typing
class Sparrow {
  sound = "cheep";
}
class Parrot {
  sound = "squawk";
}
class Duck {
  sound = "quack";
  swim(){
      console.log("Going for a dip!");
  }
}
var parrot: Parrot = new Sparrow(); // substitutes
var sparrow: Sparrow = new Parrot(); // substitutes
var parrotTwo: Parrot = new Duck();
//var duck: Duck = new Parrot(); // IDE & compiler error

console.log("Parrot says: "+parrot.sound);
console.log("sparrow says: "+sparrow.sound);
console.log("parrot says: "+parrotTwo.sound);