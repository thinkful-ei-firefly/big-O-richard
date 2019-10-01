'use strict';

//7 create fibArr with 7 numbers
//7 6 5 4 3 2 1

let solution = [1, 1];

function fibonacci(num, solution = [1, 1]) {
    if(num <= 2) {
        return solution; // O(1)
    }
    solution.push(solution[solution.length-1] + solution[solution.length-2]);
    return fibonacci(num-1, solution); // O(n)
}

console.log(fibonacci(7)); //13

// overall O(n)