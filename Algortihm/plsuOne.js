//
// let x = [9];
// let number = 1;
// let result = [];
//
// for (let i = x.length - 1; i >= 0; i--) {
//     let sum = x[i] + number;
//
//     number = sum > 9 ? 1 : 0;
//     result.unshift(sum % 10);
// }
// if (number){
//     result.unshift(number);
// }
//
// console.log(result);



let x = [4,2,1];
let carry = 1;
let result = [];
for (let i = x.length - 1; i >= 0; i--) {
    let sum = x[i] + carry;

    let newCarry = 0;
    if (sum > 9) {
        newCarry = 1;
    }

    let digit = sum % 10;
    result.splice(0, 0, digit);

    carry = newCarry;
}

if (carry) {
    result.splice(0, 0, carry);
}

console.log(result);


