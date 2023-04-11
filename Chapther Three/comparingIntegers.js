let num = parseInt(prompt("Enter an integer: "));

// Calculate the square of the number
let square = num ** 2;

// Compare the number and its square to 100
if (num + square > 100) {
    console.log("The number and its square are greater than 100");
} else if (num + square === 100) {
    console.log("The number and its square are equal to 100");
} else if (num + square !== 100) {
    console.log("The number and its square are not equal to 100");
} else {
    console.log("The number and its square are less than 100");
}