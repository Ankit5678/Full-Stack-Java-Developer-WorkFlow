import {s1_exp,s2_exp,fun,Employee} from './demo_module_01';
console.log("this id module 02");
console.log("Module_01 s1   "+s1_exp);
console.log("Module_01 s2   "+s2_exp);
console.log(`${s1_exp}`);
console.log(`${s2_exp}`);
fun("ankit");
let e1_imp = new Employee(1,"sam");
e1_imp.display();