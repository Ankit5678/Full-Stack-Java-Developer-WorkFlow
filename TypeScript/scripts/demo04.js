"use strict";
function isPrime() {
    var a = 17;
    var count = 0;
    if (a == 2) {
        console.log("prime");
    }
    if (a > 2) {
        for (var i = 3; i < a / 2; i++) {
            if (a % i == 0) {
                count++;
            }
        }
        if (count > 0) {
            console.log("not prime");
        }
        else {
            console.log("prime");
        }
    }
}
isPrime();
