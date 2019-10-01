'use strict';
//5 => 5 + 4 + 3 + 2 + 1

function triangularNumb(num) {
    if(num === 0) {
        return 0; // O(1)
    }

    return num + triangularNumb (num-1); // O(n)
}

console.log(triangularNumb(5)); // 15
console.log(triangularNumb(30)); //465

// overall O(n)

