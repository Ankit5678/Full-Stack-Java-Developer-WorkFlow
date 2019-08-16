"use strict";
//Interfaces in TypeScript
function interfaceDemo() {
    let emp1 = {
        name: "sam",
        gender: "male",
        qualification: "BE",
        email: "sam@gmail.com",
        age: "39"
    };
    let customer1 = {
        name: "harish",
        gender: "male",
        //qualification:"BE",//as it is opptional we can skip it
        email: "harish@gmail.com",
        age: "29"
    };
    let student1 = {
        name: "tony",
        gender: "male",
        //qualification:"BE",
        //email:"sam@gmail.com",
        age: "19"
    };
    console.log(emp1);
    console.log(customer1);
    console.log(student1);
}
interfaceDemo();
