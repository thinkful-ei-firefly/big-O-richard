'use strict';

function factorial(n) {
    if (n === 1) {                  // O(1)
        return 1;                   // O(1)
    }
    return n * factorial(n - 1);    // O(n)
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(15));

// overall O(n)
