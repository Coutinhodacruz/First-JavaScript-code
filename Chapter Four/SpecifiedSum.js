let targetNumber = parseInt(prompt("Enter a number: "));

let sum = 0;
let counter = 0;

while (sum < targetNumber){
    let num = parseInt(prompt('Enter integer ${counter + 1}: '));
    sum += num;
    counter++;
}
alert(`Target number ${targetNumber} was reached after entering ${counter} integers.`);