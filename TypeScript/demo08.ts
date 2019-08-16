//Interfaces in TypeScript
function interfaceDemo(){
    //Interface basic structure
    interface Person{
        name:string;
        gender:string;
        qualification ?:string;//by using '?' we can make a property opptional for the interface
        email ?:string;
        age:string;
    }

    let emp1:Person = {
        name:"sam",
        gender:"male",
        qualification:"BE",
        email:"sam@gmail.com",
        age:"39"
    }

    let customer1:Person = {
        name:"harish",
        gender:"male",
        //qualification:"BE",//as it is opptional we can skip it
        email:"harish@gmail.com",
        age:"29"
    }

    let student1:Person = {
        name:"tony",
        gender:"male",
        //qualification:"BE",
        //email:"sam@gmail.com",
        age:"19"
    }

    console.log(emp1);
    console.log(customer1);
    console.log(student1);
}

interfaceDemo();