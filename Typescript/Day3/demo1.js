//operators
//assisgnment = +=
// relational => ==, => =< < > !=
// Arithemathic => +,*,-,/,%
// logical => && || != 
// ternary operator => condition?expression1:expression2
// bitwise => &, | ^ ! ~ << >>
// incr & decr= > pre & post ++a a++ --a a--
var temp = 21 < 4 ? 'Hi' : 'bye';
// console.log("Value of temp is "+temp);
//Loops
// if , if-else switch,break , continue
// while, do-while , for, foreach
if (2 < 4) {
    // console.log("condition is true");
}
else {
    console.log("condition is false");
}
for (var i = 0; i < 4; i++) {
    console.log("Value of i " + i);
}
// var has global scope
// let has scope  nearest within that block {}
// console.log("Value of Outside the loop "+i);
var j = 12;
// const has global scope
var b = 4;
while (b != 0) {
    console.log("Value of b is " + b);
    b--;
}
