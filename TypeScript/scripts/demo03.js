"use strict";
function largest() {
    var a = 10;
    var b = 20;
    var c = 30;
    if (a > b && a > c) {
        if (b > c) {
            console.log("largest=" + a);
            console.log("second largest=" + b);
        }
        else {
            console.log("largest=" + a);
            console.log("second largest=" + c);
        }
    }
    else if (b > a && b > c) {
        if (a > c) {
            console.log("largest=" + b);
            console.log("second largest=" + a);
        }
        else {
            console.log("largest=" + b);
            console.log("second largest=" + c);
        }
    }
    else if (a > b) {
        console.log("largest=" + c);
        console.log("second largest=" + a);
    }
    else {
        console.log("largest=" + c);
        console.log("second largest=" + b);
    }
}
largest();
