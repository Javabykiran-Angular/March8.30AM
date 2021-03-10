console.log("Hello World....");

var a1;
// data type
// number (int,long,double,float),string (char,string,""/''),boolean(true,false),any (number,string,boolean),void 
// misesc. undefined & null => it works as data type as well as to assign a value to variable or object

var a2:number=10;  //forward declaration & defination
var a3:string;     //declaration

console.log('Value of A2 is '+a2);
var a4:any;

a4=10.5;
console.log('Value of a4 is '+a4);
a4='Sumit Raokhande';
console.log('Value of a4 is '+a4);

var a5:number;
console.log("Value of a5 is "+a5);

//type assertion
var a6:any;
// we use type assetion using 2 way
// 1 angle bracket
// 2 as syntax

// 1 angle bracket

var temp1= (<string> a6);
// temp1.

//2 as syntax

var temp2=(a6 as string);
// temp2.