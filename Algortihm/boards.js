// function createBoard(row, column, piece){
//
//     const board = new Array(row).fill(" ").map(() => new Array(column).fill(" "));
//
//
//     pieces.forEach(piece => {
//         const { x, y, value } = piece;
//         board[x][y] = value;
//     });
//
//     return board;
//
// }
//
// const pieces = [
//     { x: 0, y: 0, value: 'X' },
//     { x: 0, y: 1, value: 'X' },
//     { x: 0, y: 2, value: 'O' },
//     { x: 1, y: 0, value: 'O' },
//     { x: 1, y: 2, value: 'X' },
//     { x: 2, y: 0, value: 'X' },
//     { x: 2, y: 1, value: 'O' },
//     { x: 2, y: 2, value: 'O' },
// ];
//
// const displayBoard = createBoard(3, 3, pieces)
// console.table(displayBoard)



// function createBoard(length, width, pieces) {
//     // Create the board array with all empty values
//     const board = [];
//     for (let i = 0; i < length; i++) {
//         const row = [];
//         for (let j = 0; j < width; j++) {
//             row.push(" ");
//         }
//         board.push(row);
//     }
//
//     for (var k = 0; k < pieces.length; k++) {
//         var piece = pieces[k];
//         var newRow = piece.row;
//         var newColumn = piece.col;
//         var value = piece.value;
//         if (newRow >= 0 && newRow < length && newColumn >= 0 && newColumn < width) {
//             board[newRow][newColumn] = value;
//         }
//     }
//
//     return board;
// }
//
// const pieces = [
//     { x: 0, y: 0, value: 'X' },
//     { x: 0, y: 1, value: 'X' },
//     { x: 0, y: 2, value: 'O' },
//     { x: 1, y: 0, value: 'O' },
//     { x: 1, y: 2, value: 'X' },
//     { x: 2, y: 0, value: 'X' },
//     { x: 2, y: 1, value: 'O' },
//     { x: 2, y: 2, value: 'O' },
// ];


// let board = createBoard(3, 3, pieces);
// console.table(board);

// function generate(array){
//     let result = [
//         [" ", " ", " "],
//         [" ", " ", " "],
//         [" ", " ", " "]
//     ];
//     for (let eachSet of array){
//         result[eachSet.row][eachSet.col] = eachSet.value
//     }
//     return result
// }

function createBoard(row, column, pieces) {
    const board = [];
    for (let i = 0; i < row; i++) {
        board[i] = [];
        for (let j = 0; j < column; j++) {
            board[i][j] = " ";
        }
    }

    for (let k = 0; k < pieces.length; k++) {
        const piece = pieces[k];
        const x = piece.x;
        const y = piece.y;
        board[x][y] = piece.value;
    }

    return board;
}

const pieces = [
    { x: 0, y: 0, value: 'X' },
    { x: 0, y: 1, value: 'X' },
    { x: 0, y: 2, value: 'O' },
    { x: 1, y: 0, value: 'O' },
    { x: 1, y: 2, value: 'X' },
    { x: 2, y: 0, value: 'X' },
    { x: 2, y: 1, value: 'O' },
    { x: 2, y: 2, value: 'O' },
];
const displayBoard = createBoard(3, 3, pieces);
console.table(displayBoard);

