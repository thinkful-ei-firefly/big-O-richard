'use strict';

function iterativeFactorial(num) {
    let result = 1;                 // O(1)
    for(let i=1; i<=num; i++) {     // O(n)
        result *= i;                // O(1)
    }
    console.log(result);            // O(1)
}

iterativeFactorial(5); //120
iterativeFactorial(4); //14

// overall O(n)

