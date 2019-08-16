"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s1_exp = "IBM India pvt,Manyata,Banglore";
exports.s2_exp = "typescript";
function fun(name) {
    console.log(name);
}
exports.fun = fun;
class Employee {
    constructor(empid, empname) {
        this.empid = empid;
        this.empname = empname;
    }
    display() {
        console.log("id    " + this.empid);
    }
}
exports.Employee = Employee;
