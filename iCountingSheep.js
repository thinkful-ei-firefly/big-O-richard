'use strict';

function iterativeCountingSheep(num) {
    for(let i = num; i>=0; i--) {  // O(n)
        if(i>0) { 
            console.log(`${i}: Another sheep jumps over the fence`); //O(1)
        }
        if(i === 0) {
            console.log('All sheep jumped over the fence'); //O(1)
        }
    }
}

iterativeCountingSheep(3);

iterativeCountingSheep(7);

// overall O(n)