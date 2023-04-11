// Ask the user to enter an integer
let num = parseInt(prompt("Enter an integer: "));

// Determine if the number is divisible by 3
if (num % 3 === 0) {
    console.log(`${num} is divisible by 3`);
} else {
    console.log(`${num} is not divisible by 3`);
}
