export const a = [1,2,3,4,5];
export const str = "Export & Import Module";

// Default function 
export default function (a,b) {
  return a * b;
}

// Named function 
export function names(c,d){
  return c + d;
}

// Class 
export class User {
  
  constructor(name,email){
    this.uname = name;
    this.mail = email;
  }
  courseList = [];
  getInfo(){
    return { name:this.uname , email : this.mail };
  }

  addCourse(name){
    this.courseList.push(name);
  }

  getCourse(){
    return this.courseList;
  }
}
const getFullname = (name, sname) =>{
  return name + ' ' + sname;
};
module.export = getFullname;
