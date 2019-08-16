//Inheritance in TypeScript
function classDemo2(){

    class Address{
        constructor(public doorNo:number,public streetNo:number,public area:string,
            public city:string,public pin:number,public state:string){}

        // display(){
        //     console.log(this.doorNo);
        // }
    }

    class Employee{
        constructor(public empId:number,public empName:string,public dept:string,
            public desg:string,public address:Address){}
        display(){
            console.log("empId:  "+this.empId);
            console.log("empName:  "+this.empName);
            console.log("dept:  "+this.dept);
            console.log("desg:  "+this.desg);
            console.log("doorNo:  "+this.address.doorNo);
            console.log("streetNo:  "+this.address.streetNo);
            console.log("area:  "+this.address.area);
            console.log("city:  "+this.address.city);
            console.log("pin:  "+this.address.pin);
            console.log("state:  "+this.address.state);
        }
    }

    class Manager extends Employee{
        constructor(empId:number,empName:string,dept:string,desg:string,
            address:Address,public allo:number){
                super(empId,empName,dept,desg,address);
            }
    }

    let add1 = new Address(91,1,"nagavara","banglore",560001,"karnataka");
    let add2 = new Address(92,2,"nagavara","banglore",560001,"karnataka");
    let e1 = new Employee(9179,"sam","training","trainer",add1);
    let m1 = new Manager(9178,"harish","sales","manager",add2,1000);
    console.log(e1);
    console.log("----------------");
    e1.display();
    console.log("=================");
    console.log(m1);
    console.log("-----------------");
    m1.display();
}

classDemo2();