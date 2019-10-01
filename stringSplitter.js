'use strict';

function stringSplitter(str, separator) {
    if (str.length === 0) {
        return ''; // O(1)
    }
    return str[0] === separator //O(n)
        ? '' + stringSplitter(str.slice(1, str.length), separator)
        : str[0] + stringSplitter(str.slice(1, str.length), separator);
}

console.log(stringSplitter('02/20/2020', '/'));


// overall O(n)