// Ask the user to enter two integers
let firstNumber = parseInt(prompt("Enter the first integer: "));
let secondNumber = parseInt(prompt("Enter the second integer: "));

// Determine if the first number tripled is a multiple of the second number doubled
if ((firstNumber * 3) % (secondNumber * 2) === 0) {
    console.log(`${firstNumber} tripled is a multiple of ${secondNumber} doubled`);
} else {
    console.log(`${firstNumber} tripled is not a multiple of ${secondNumber} doubled`);
}
