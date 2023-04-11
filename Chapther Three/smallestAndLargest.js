// Ask the user to enter three integers
let num1 = parseInt(prompt("Enter the first integer: "));
let num2 = parseInt(prompt("Enter the second integer: "));
let num3 = parseInt(prompt("Enter the third integer: "));

// Calculate the sum, average, and product of the numbers
let sum = num1 + num2 + num3;
let average = sum / 3;
let product = num1 * num2 * num3;

// Find the smallest and largest of the numbers
let smallest = Math.min(num1, num2, num3);
let largest = Math.max(num1, num2, num3);

// Print the results to the console
console.log(`Sum: ${sum}`);
console.log(`Average: ${average}`);
console.log(`Product: ${product}`);
console.log(`Smallest number: ${smallest}`);
console.log(`Largest number: ${largest}`);
