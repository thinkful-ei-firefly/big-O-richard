'use strict';

function reverseString(string) {
    if (string === '') {
        return ''; // O(1)
    }
    return string.slice(-1) + reverseString(string.slice(0, string.length - 1)); // O(n)
}

console.log(reverseString('hello')); // O(1)

// overall O(n)
