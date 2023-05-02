let prompt = require("prompt-sync")();
function isDivisible(num) {
    return num % 5 === 0;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Enter 10 integers (separated by spaces): ", (input) => {
    const integers = input.split(" ").map((str) => parseInt(str));
    console.log("Divisible by 5:");
    integers.forEach((num) => {
        if (isDivisible(num)) {
            console.log(num);
        }
    });
    readline.close();
});
