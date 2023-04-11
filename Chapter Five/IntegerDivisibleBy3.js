let prompt = require("prompt-sync")();
let total = 0;
const count = parseInt(prompt("Enter how many number you want to sum: "));

for (let i = 1; i <= count; i++) {
    const number = parseInt(prompt("Enter number: "));
    if (number >= 1 && number <= 30){
        let divide = number % 3;
        if (divide === 0){
            console.log("The number is divisible by 3: ");
            total += number;
        }else {
            console.log("The number is not divisible by 3: ");
        }
    }
}
console.log(total)
