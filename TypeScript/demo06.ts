//class concept in TypeScript
function classDemo1(){
    class Employee{
        //empId:number;
        //empName:string;
        //dept:string;
        //desg:string;
        constructor(public empId:number,public empName:string,public dept:string,public desg:string){
            //this.empId = empId;
            //this.empName = empName;
            //this.dept = dept;
            //this.desg = desg;
        }

        display(){
            console.log("Id"+this.empId);
            console.log("name"+this.empName);
            console.log("dept"+this.dept);
            console.log("desg"+this.desg);
        }

        static testMethodStatic(){
            console.log("this is a static method");
        }
    }

    let emp1 = new Employee(9179,"sam","training","trainer");
    console.log(emp1);
    emp1.display();
    Employee.testMethodStatic();
}
classDemo1();