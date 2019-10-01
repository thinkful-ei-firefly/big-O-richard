'use strict';

function iterativePowerCalc(base, exp) {
    if(exp < 0) {
        console.log('exponent should be >=0'); //O(1)
        return '';
    }

    return Math.pow(base, exp); //O(1) what O() is math.pow? Should I do it without math.pow? 
}


console.log(iterativePowerCalc(3, 2)); //9
console.log(iterativePowerCalc(5, 3)); //125

// overall O(1) less than the recursive methode

