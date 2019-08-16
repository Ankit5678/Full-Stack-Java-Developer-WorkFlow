function mapDemo(){
    let myMap = new Map();

    myMap.set(1,"one");
    myMap.set(2,"two");
    myMap.set(3,"two");
    myMap.set(4,"three");
    myMap.set(5,"four");

    console.log(myMap);
    myMap.set(1,"oneee");
    console.log(myMap);
    console.log("mymap.size:   "+myMap.size);
    console.log(myMap.get(5));
    myMap.delete(1);
    console.log(myMap);
    //myMap.clear();
    console.log(myMap);

    for(let k of myMap.keys()){
        console.log(k);
    }

    for(let v of myMap.values()){
        console.log(v);
    }

    for(let e of myMap.entries()){
        console.log(e);
    }
}
mapDemo();