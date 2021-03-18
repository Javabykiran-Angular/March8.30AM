"use strict";
exports.__esModule = true;
exports.pi = exports.add = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    function Myclass(fname, lname, id) {
        this.fname = fname;
        this.lname = lname;
        this.id = id;
    }
    Myclass.prototype.dispaly = function () {
        console.log("\n            First Name :: " + this.fname + "\n            Last name :: " + this.lname + "\n            Id        :: " + this.id + "\n        ");
    };
    return Myclass;
}());
exports.Myclass = Myclass;
//  var obj=new Myclass('Sumit','Raokhande',9);
//  obj.dispaly();
function add(a, b) {
    return (a + b);
}
exports.add = add;
exports.pi = 3.14;
