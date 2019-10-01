'use strict';

function iterativeReverseString(string) {
    let reverseString = ''; // O(1)
    for(let i=0; i < string.length; i ++) { // O(n)
        reverseString = string.charAt(i) + reverseString;
    }
    console.log(reverseString); // O(1)
} 

iterativeReverseString('hello'); //olleh

// overall O(n)