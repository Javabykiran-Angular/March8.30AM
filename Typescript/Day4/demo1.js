var temp = function () {
    console.log("Function is called...");
};
//  temp();
var temp1 = function (a, b) {
    return (a + b);
};
//  console.log("Addition is "+temp1(2,3));
// Fat arrow function/Arrow function
var temp2 = function () {
    console.log("Fat arrow function is called");
};
// temp2();
var temp3 = function (a, b) {
    return (a + b);
};
// console.log("Fat arrow with arg. & with return type "+temp3(4,5));
// Optional Parameter Function
function add1(a, b) {
    console.log("Value of a is " + a); //5
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NaN
}
// add1(5);
// Default  parameter function
function add2(a, b) {
    if (b === void 0) { b = 2; }
    console.log("Value of a is " + a); //6
    console.log("Value of b is " + b); //2
    console.log("Addition of a+b is " + (a + b)); //8
}
//   add2(6);
function add3(a, b) {
    if (a === void 0) { a = 3; }
    console.log("Value of a is " + a); //6
    console.log("Value of b is " + b); //2
    console.log("Addition of a+b is " + (a + b)); //8
}
//   add3(7,7);
function add4(a, b) {
    if (b === void 0) { b = 4; }
    console.log("Value of a is " + a); //undefined
    console.log("Value of b is " + b); //4
    console.log("Addition of a+b is " + (a + b)); //nan
}
add4();
