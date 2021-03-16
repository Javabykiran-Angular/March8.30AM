
var a1=[11,22,33,44];
var a2:number[]=[12,13,14,15];


// for(let i=0;i<a1.length;i++){
//     console.log(` 
//     Value of A1=> ${a1[i]} `);
// }

// console.log(`
//         Array Value is ${a1}
// `);

// console.log(" Array is  "+a1.join(' '));
// console.log(" Array is  "+a1.join(' # '));

//For Each Loop

// a1.forEach((myvalue,index)=>{
//     console.log(`
//         a1[${index}]=${myvalue}
//     `);
// });

var a3:number[]=[];
//  we can insert value dynamically in two way 
// 1 using Push & pop Method (LIFO Principle)
// 2 Using Splice Method

// 1 using Push & pop method
// a3.push(10);
// console.log(a3);
// a3.push(20,30,40);
// console.log(a3);
// var temp=a3.pop()
// console.log(a3);
// console.log("Value of temp "+temp);

//2 Using Splice Method

var a4=[11,12,13];
console.log(a4)
a4.splice(1,0,20);
console.log(a4);
a4.splice(4,0,22,33,44)
console.log(a4);
// a4.splice(11,0,55);
// console.log(a4);

var temp2=a4.splice(5,1);
console.log(a4);
console.log("Temp is "+temp2);
a4.splice(3,1,88);
console.log(a4);
a4.splice(4,2);
console.log(a4)
// w3school.com
// angular.io
// microsoft
