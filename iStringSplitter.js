'use strict';

function iterativeStringSplitter(string, seperator) {

    let result = '';
    for(let i = 0; i < string.length; i++) { // O(n)
        if(string.charAt(i) === seperator) { // O(1)
            //do nothing
        }
        else {
            //add the string char to result
            result = result + string.charAt(i); // O(1)
        }
    }

    console.log(result); // O(1)
}

iterativeStringSplitter('20/02/2020', '/');

// overall O(n)

