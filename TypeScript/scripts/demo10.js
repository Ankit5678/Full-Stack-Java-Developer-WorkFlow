"use strict";
let mySet = new Set();
mySet.add("IBM");
mySet.add("IBM");
mySet.add("India");
mySet.add("India");
mySet.add("Pvt");
mySet.add("Pvt");
mySet.add("Ltd");
mySet.add("Ltd");
console.log(mySet);
console.log("size:     " + mySet.size);
mySet.delete("Ltd");
console.log(mySet);
console.log("is there or not:  " + mySet.has("Pvt"));
mySet.clear();
console.log(mySet);
console.log("is there or not:  " + mySet.has("Pvt"));
let ob1 = {};
let ob2 = {};
mySet.add(ob1); //object storing
mySet.add(ob2); //object diff from ob1 so will store both of them
console.log(mySet);
