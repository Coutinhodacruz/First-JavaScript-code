const array = [2,3,3,4,1,1,12,4];
const newArray = [];

for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]){
            isDuplicate = true;
            break
        }
    }
    if (!isDuplicate){
        newArray.push(array[i]);
    }
}
console.log(newArray)


let x = 2;
let sum = function (a,b){
     x = a + b + x
    return x
}
console.log(sum(2,3))
console.log(sum(2,3))

function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7,14)