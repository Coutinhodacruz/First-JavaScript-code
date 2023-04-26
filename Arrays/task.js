let prompt = require("prompt-sync")();
function rangeFunction(start, end){
    let newArray = [];
    for (let i = start; i <= end; i++) {
        newArray.push(i);
    }
    return newArray;
}
let startNumber = prompt("enter start number");
let endNumber = prompt("enter end number");

console.log(rangeFunction(startNumber, endNumber))
