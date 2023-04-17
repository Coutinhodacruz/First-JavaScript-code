// prompt user for input
let principal = parseInt(prompt("Enter principal amount: "));
let rate = parseInt(prompt("Enter annual interest rate (as a percentage): "));
let years = parseInt(prompt("Enter number of years: "));


rate = rate / 100;
let interest = principal * rate * years;
let finalAmount = principal + interest;

let dollars = Math.floor(finalAmount / 100);
let cents = finalAmount % 100;

// display the result as dollars and cents
alert("Compound interest after " + years + " years: $" + dollars + "." + cents);
