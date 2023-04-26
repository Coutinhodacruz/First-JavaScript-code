let prompt = require("prompt-sync")();

// function range(start, end, step = 1) {
//     const arr = [];
//     if (step > 0) {
//         for (let i = start; i <= end; i += step) {
//             arr.push(i);
//         }
//     } else {
//         for (let i = start; i >= end; i += step) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// let start = prompt("Enter start number ");
// let end = prompt("Enter end number ");
// range(start,end)
// console.log(range(1, 10, 2));
// console.log(range(5, 2, -1));
// console.log(range(1, 5));
let startingPoint = parseInt(prompt("Enter the start"))
let endingPoint = parseInt(prompt("Enter the end"))
let inputStep = parseInt(prompt("Enter the step"))
let newArr = [];
function Output(start, end, step) {
    if (isNaN(step) && end > start) step = 1;
    if (isNaN(step) && end < start) step = -1;

    return appendIntoNewArray(start, end, step);
}

function appendIntoNewArray(start, end, step) {
    start > end ? forLoopWhenStartIsGreater(start, end, step)
        : forLoopWhenEndIsGreater(start, end, step);

    return newArr;
}

function forLoopWhenStartIsGreater(start, end, step) {
    for (let i = start; i >= end; i -= step) newArr.push(i);
}

function forLoopWhenEndIsGreater(start, end, step) {
    for (let j = start; j < end; j += step) newArr.push(j);
}

console.log(Output(startingPoint, endingPoint, inputStep));
