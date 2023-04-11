const numberIntegers = parseInt(prompt("How many number do you want to enter: "));

let max = 0;
let min = 0;

for (let i = 0; i < numberIntegers; i++) {
    let number = parseInt(prompt('Enter Integer ${i+1}: '));
    if (min === 0 || number < min){
        min = number;
    }
    if (max === 0 || number < max){
        max = number;
    }
}
const sum = max + min;

console.log(`Minimum value: ${min}`);
console.log(`Maximum value: ${max}`);
console.log(`Sum of extremes: ${sum}`);