

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

// TUBLE
let sn:[string,number];
sn = ["one",1];
console.log(sn);

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