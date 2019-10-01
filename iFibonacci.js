'use strict';

function iterativeFibonacci(num) {
    let result = []; // O(1)
    for(let i = 0; i < num; i++){ // O(n)
        if(i === 0 || i === 1){
            result.push(1); // O(1)
        }
        else {
            result.push(result[ i - 1 ] + result[ i - 2 ]); // O(1)
        }
    }
    
    console.log(result); //O(1)
} 

iterativeFibonacci(7);

iterativeFibonacci(17);

// overall O(n)