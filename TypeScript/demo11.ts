function setDemo(){
    let mySet = new Set([1,2,3,4,4,4,5,6,6,7,7,7,8]);
    console.log(mySet);
    console.log("mySet.size:   "+mySet.size);

    let newSet = new Set();
    newSet.add([1,2,3,4]);
    newSet.add([1,2,3,4]);
    console.log(newSet);
    console.log("newSet.size:   "+newSet.size);
}

setDemo();