function largest(){
    var a:number = 10;
    var b:number = 20;
    var c:number = 30;

    if(a>b && a>c){
        if(b>c){
            console.log("largest="+a);
            console.log("second largest="+b);
        }
        else{
            console.log("largest="+a);
            console.log("second largest="+c);
        }
    }
    else if(b>a && b>c){
        if(a>c){
            console.log("largest="+b);
            console.log("second largest="+a);
        }
        else{
            console.log("largest="+b);
            console.log("second largest="+c);
        }
    }
    else if(a>b){
        console.log("largest="+c);
        console.log("second largest="+a);
    }
    else{
        console.log("largest="+c);
        console.log("second largest="+b);
    }
}

largest();
