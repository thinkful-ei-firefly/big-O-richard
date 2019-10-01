'use strict';

function iteratateNthTriNum(num) {
    let result = 0; // O(1)
    for(let i = 1; i <= num; i++) { // O(n)
        result += i;
    }
    console.log(`The nth triangular number for ${num} is ${result}.`); // O(1)
}

iteratateNthTriNum(3); // 6
iteratateNthTriNum(6); //21

// overall O(n)