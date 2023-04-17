// console.log("n\tSum");
//
// for (let n = 1; n <= 100; n++) {
//     const sum = (n * (n + 1)) / 2;
//     console.log(`${n}\t${sum}`);
// }

// let sum = function(num1, num2){
//     return num1 + num2
//     (2,3)
// }
// console.log(sum);

// function multiply (number){
//     return number * 2
// }
function  sum (number, func){
    return number + func(number)
}
let answer = sum(4,(number) =>{
    return number * 2
    }
);
console.log(answer)