'use strict';

let mySmallMaze = [
    [' ', ' ', ' '], 
    [' ', '*', ' '], 
    [' ', ' ', 'e']];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

//s ask e => base R => 0, 0+1, D => 0+1, 0

function solveMaze(maze, row=0, column=0) {
    let mazeCopy = maze.map(row => [...row]);
    console.log(mazeCopy);
    
    if (mazeCopy[row][column] === 'e') {
        return mazeCopy;
    }
    //test if go right
    if (mazeCopy[row][column + 1] === ' ' || mazeCopy[row][column + 1] === 'e') {
        mazeCopy[row][column] = 'R';
        solveMaze(mazeCopy, row, column + 1);
    }
    //test if go down
    if (mazeCopy[row + 1][column] === ' ' || mazeCopy[row + 1][column] === 'e') {
        mazeCopy[row][column] = 'D';
        solveMaze(mazeCopy, row + 1, column);
    }
    //test if go left
    if (mazeCopy[row][column - 1] === ' '  || mazeCopy[row][column - 1] === 'e') {
        mazeCopy[row][column] = 'L';
        solveMaze(mazeCopy, row, column - 1);
    }
    //test if go up
    // if (mazeCopy[row - 1][column] === ' ' || mazeCopy[row - 1][column] === 'e') {
    //     mazeCopy[row][column] = 'U';
    //     solveMaze(mazeCopy, row - 1, column);
    // }
}

console.log(solveMaze(mySmallMaze));

// console.log(solveMaze(maze));
