// console.log(sum(2,3));
//
// let sum = (firstNumber, secondNumber) =>{
//     return firstNumber + secondNumber
// }



// console.log(sum(2,3));
//
// function sum (firstNumber, secondNumber){
//     return firstNumber + secondNumber
// }

// let number = [1,2,3,4];
//
// let sum = 0
// for(let i = 0; i < number.length; i++){
//     sum += number[i];
//     var square = 1
//     square += number[i];
// }
// console.log(sum);
// console.log(square);


// function printName(name){
//     function printHello(){
//         console.log(`Hello ${name}`)
//     }
//     printHello();
//
// }
// printName();
// printName("Legend")

// function favour(){
//     let a = 10;
//     function inem(){
//         let b = 20;
//         console.log(a,b);
//         function legend(){
//             let c = 30;
//             console.log(a,b,c)
//         }
//         legend();
//     }
//     inem();
//     console.log(b);
// }
// favour();


// function makeFun(){
//     const name = "Mozilla";
//     function displayName(){
//         console.log(name);
//     }
//     return displayName;
// }
//
// const myFunc = makeFun();
// myFunc();

function index(base){
    return (number) => number * base;
}
let baseTwo = index(2);
let baseThree = index(3);

console.log(typeof baseTwo(3))
console.log(baseTwo(4))
