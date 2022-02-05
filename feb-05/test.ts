// < ----------- Interface --------------- >
interface user {
  firstName: string,
  lastName: string,
  fullName (): string;
}
var person : user = {
  firstName : "mdu",
  lastName : "Madurai",
  fullName : function (){
    return `${this.firstName} ${this.lastName}`;
  }
}
//console.log(person);
console.log(person.fullName());

// < ------------- Intersection Type keyword --------------- >
// let code:any = '123'; 
// let employeeCode =  code as number; 
// console.log(typeof(employeeCode)); //Output: number

// < ------------- Never keyword --------------- > 
// Never is used to return no data type in function 
// Cannot produce return in a function 

// const generatError = (message:string,code:number) => {
//   throw {
//     messag : message,
//     ErrCode : code,
//   };
// };
// console.log(generatError(`An error Accured`, 240));


// < -------------------- Intersection Type keyword ----------------- >
// Intersection Type is used to combaine 2 interfaces in to one 
interface part{
  address:string,
  pincode:number,
}
interface identity{
  id:number,
  name:string
}
interface contact{
  mobile: number,
  email:string,
}

type Employee = identity & contact;

let emp:Employee = {
  id:101,
  name:"Jack",
  mobile:9966558874,
  email:"Jack123@gmail.com"
};
console.log(emp);

type customer = part & contact;
let cus:customer = {
  address:"120,Main Road, Madurai",
  pincode:625004,
  mobile:99887766252,
  email:"New@gmail.com",
}
console.log(cus);

// < --------- Namespace ------------ >
namespace userdetail{
  export class users {
    getname(){
      return "Name is present";
    }
    getjob(){
      return "ticket";
    }
  }
}
let us = new userdetail.users;
console.log(us.getname());
console.log(us.getjob());