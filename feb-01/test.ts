

var message:string = "Testing for ts";
console.log(message);

var rt:string = "Testing for rt";
console.log(rt);

function addnum(a:number,b:number){
  return a+b;
}
var sum = addnum(15,25);
console.log(sum);

function greeter(x:any , y:any) {  
  return "Hello, " + x + y ;  
}  
console.log(greeter("Vijay","kumar"));
console.log(greeter(3 , 6));  

// ARRAY
var list:number [] = [1,2,3,4,5];
console.log(list);

var list2: Array<string> = ["hai","1","2","3"];
console.log(list2);

const anys = [];
anys.push(1);
anys.push("Pass String");
anys.push({ Laptop: "Dell" });
console.log(anys);

// TUBLE
let sn:[string,number];
sn = ["one",1];
console.log(sn);

// < ----------------- Interface ---------------->
interface User {
  id: number;
  Name: string;
  Dept?:string;
  getfullname?:() => string,
}
const user1: User = {
  id: 12,
  Name: "Josh",
};
console.log(user1);
const user2: User = {
  id: 13,
  Name: "Jack",
  Dept:"Admin",
  
};
console.log(user2);

let _num :number = 10.345;
_num.toFixed(2); // "10.35"
_num.valueOf(); // 10.345
_num.toString(); // "10.345"
_num.toPrecision(2); //"10"

export interface Employee{
  firstName: string;
  lastName: string;
  fullName(): string;
}
let employee: Employee = {
  firstName :"Ajith",
  lastName : "Kumar",
  fullName() : string{
      return this.firstName + " " + this.lastName;
  }
}
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.fullName());

// Class 
class Employees{
  id:number;
  fname:string;
  lname:string;
  
  constructor(ids:number,firstnames:string,lastnames:string){
    this.id = ids;
    this.fname = firstnames;
    this.lname = lastnames;
  }
  getfullna(){
    return this.fname + " " + this.lname  
  }
}
let employe = new Employees(100, 'Ramesh', 'Fadatare');
console.log(employe);
console.log(employe.getfullna());

// < ---------------- Union --------------------------- >
// TypeScript allows us to use more than one data type for a variable or a function parameter. This is called union type.

let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
console.log("Union",code);

let empId: string | number;
empId = 111; // OK
empId = "E111"; // OK

// < ---------------- Enum --------------------------- >
enum PrintMedia {
  Newspaper = 1,
  Newsletter = 5,
  Magazine = Newsletter * 3,
  Book = 10
}
enum Letter {
  Newspaper = "News",
  Book = "Book"
}
console.log(Letter.Book);
console.log(PrintMedia);

// < --------------- Array readonly ------------------ > Read only in array
// let a1: ReadonlyArray<number> = [1, 2, 3]; ------- a1.push(102); // error
// let b1: readonly number[] = [1, 2, 3]; --------- b1[0] = 101; // error

// < ------------- Const --------------->Const value fixed the a.push value not assign in a[]
let a = [1, 2, 3] as const;
// a.push(102); // error
// a[0] = 101; // error


// < -------------- Inheritance --------------- >
class first{
  speak():void{
    console.log("First Inheritance Run");
  }
}
class second extends first{
  learn(): void {
      console.log("Second Inheritance Run")
  }
}
class third extends second{
  go():void{
    console.log("Third Inheritance Run");
  }
}

let obje = new third();
obje.speak();
obje.learn();
obje.go();

// < ------------- Method Overloading -------------->
// to create multiple methods with the same name but different parameter types and return type. 
function add(a:any, b:any):void {  
  return a + b;  
}  
 
console.log("Addition: " + add("Hello ", "JavaTpoint"));  
console.log("Addition: " + add(30, 20));  