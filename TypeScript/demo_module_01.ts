export let s1_exp = "IBM India pvt,Manyata,Banglore";
export let s2_exp = "typescript";

export function fun(name){
    console.log(name);
}

export class Employee{
    constructor(public empid:number,public empname:string){}
    display(){
        console.log("id    "+this.empid);
    }
}