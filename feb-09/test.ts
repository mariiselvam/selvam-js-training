// ------------------ FUNCTION OVERLOADING --------------------------

import { getHeapCodeStatistics } from "v8";

//Function overloading is a mechanism or ability to create multiple methods with the same name but different parameter types and return type.
function add(a:string, b:string): string;  
function add(a:number, b:number): number;  
  
function add(a: any, b:any): any {  
    return a + b;  
}  
  
console.log("Addition: " +add("Hello ", "JavaTpoint"));   
console.log("Addition: "+add(30, 20));  

// -------------- Interface using type ----------------
interface OS {  
  name: String;  
  language: String;  
}  
let OperatingSystem = (type: OS): void => {  
console.log('Android ' + type.name + ' has ' + type.language + ' language.');  
};  
let Oreo = {name: 'O', language: 'Java'}  
OperatingSystem(Oreo);  

//------------------- Namespace --------------------

namespace studentCalc{  
  export function AnualFeeCalc(feeAmount: number, term: number){  
  return feeAmount * term;  
  } 
  export function Messfee(feeamt:number, ter:number){
    return feeamt * ter;
  } 
}  
let TotalFee = studentCalc.AnualFeeCalc(1500, 4);  
let Messfees = studentCalc.Messfee(8000, 6);  
  
console.log("Output: " +TotalFee);  
console.log("Output: " +Messfees);  

// TypeScript Generics
//It creates a component that can work with a variety of data types rather than a single data type
function identity<Type>(arg: Type): Type {
  return arg;
}
let myIdentity: <Type>(arg: Type) => Type = identity;

let iden = identity<string>("Mystring");
let iden2 = identity<number>(20);
console.log(iden);
console.log(iden2);

// ------------- Date ---------------
// Create a date in object type
let date: Date = new Date();  
console.log("Date = " + date); 

// --------------- Ambients Declarations ----------------
//TypeScript provides the way to safely and easily use existing JavaScript libraries like jQuery, AngularJS, Node.js, etc. The Ambient declarations allow us to use existing popular JavaScript libraries safely.
//A file with extension  //.d.ts// must have the declare keyword prefixed to each root level definition.

// -------------- Typescript Compilation Context (.ts convert tsconfig.json)---------------
//The compilation context is a term for a grouping of the TypeScript files that will parse and analyze to determine what is valid and what is not valid.
//TypeScript also provides an option to compile multiple .ts files in the large project.

// ----------------- Migrating from JavaScript to TypeScript ---------------------
//First, we need to add a tsconfig.json file in our project. TypeScript uses a tsconfig.json file for managing our project's compilation options, such as which files we want to include and exclude.
// {  
//   "compilerOptions": {  
//       "outDir": "./built",  
//       "allowJs": true,  
//       "target": "es5"  
//   },  
//   "include": [  
//       "./src/**/*"  
//   ]  
// }  
// The /* include */ option reads all files in the src directory.
// The /* allowJs */ option accept all JavaScript files as inputs.
// The /* outDir */ specifies that all of the output files should be redirected in the built folder.
// The /* target */ option specifies that all JavaScript constructs should be translated into an older version like ECMAScript 5.

// ----------- Difference between Null and Undefined --------------- ( Refer )
var a = null;
console.log(typeof(a),a); // Null return object 
var b;
console.log(typeof(b),b); // Undefined return undefined

// ------------- TypeScript Type Annotation ------------------------ 
// We know that JavaScript is not a typed language so we cannot specify the type of a variable such as a number, string, Boolean in JavaScript.
// var variableName: TypeAnnotation = value;  
var age: number = 44;          // number variable  
var name1: string = "Rahul";   // string variable  
var isUpdated: boolean = true; // Boolean variable   

// -------------- TypeScript Type Assertion ---------------- 
let empCode: any = 111;  
let empcode1 = <number> codes; 
let employeeCode = code as number;   
console.log(typeof(employeeCode)); //Output: number  
