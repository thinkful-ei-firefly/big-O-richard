'use strict';

function powerCalculater(num, exp) {
    if(exp <= 0) {
        console.log('Exponent should be >= 0'); //O(1)
        return;
    }
    if (exp === 1) {
        return num; // O(1)
    }
    return num * powerCalculater(num, exp-1); // O(n)
}

console.log(powerCalculater(10, 4));

// overall O(n) greater than the iterative methode
