"use strict";
//Detailed Inheritance in TypeScript without using 'public' parameter in constructor
function classDemo() {
    class Employee {
        constructor(empId, empName, dept, desg) {
            this.empId = empId;
            this.empName = empName;
            this.dept = dept;
            this.desg = desg;
        }
        display() {
            console.log("Id" + this.empId);
            console.log("name" + this.empName);
            console.log("dept" + this.dept);
            console.log("desg" + this.desg);
        }
        static testMethodStatic() {
            console.log("this is a static method");
        }
    }
    class Manager extends Employee {
        constructor(empId, empName, dept, desg, allo) {
            super(empId, empName, dept, desg);
            this.allo = allo;
        }
        display() {
            console.log("Id" + this.empId);
            console.log("name" + this.empName);
            console.log("dept" + this.dept);
            console.log("desg" + this.desg);
            console.log("allo" + this.allo);
        }
    }
    let emp1 = new Employee(9179, "sam", "training", "trainer");
    console.log(emp1);
    emp1.display();
    Employee.testMethodStatic();
    let m1 = new Manager(9178, "harish", "training", "trainer", 1000);
    console.log(m1);
    m1.display();
}
classDemo();
