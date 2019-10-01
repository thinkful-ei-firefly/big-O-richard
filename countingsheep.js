'use strict';

function countSheep(sheep) {
    if (sheep === 0) { 
        console.log('All sheep jumped over the fence'); // O(1)
        return;
    }
    console.log(`${sheep}: Another sheep jumps over the fence`);
    countSheep(sheep - 1); //O(n)
}
countSheep(3);


// overall O(n)