let number = prompt("Enter a five-digit integer:");

while (number.length !== 5) {
    alert("Error: Input must be a five-digit integer");
    number = prompt("Enter a five-digit integer:");
}

if (number === number.split("").reverse().join("")) {
    console.log(number + " is a palindrome!");
} else {
    console.log(number + " is not a palindrome.");
}
