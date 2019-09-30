'use strict';

//7 create fibArr with 7 numbers
//7 6 5 4 3 2 1


function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    return fibonacci(num-1) + fibonacci(num-2);
}

console.log(fibonacci(7)); //13
console.log(fibonacci(6)); //8
console.log(fibonacci(8)); //21