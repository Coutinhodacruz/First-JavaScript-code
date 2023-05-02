let prompt = require("prompt-sync")();

function squareOfAsterisks(side) {
    for (let i = 0; i < side; i++) {
        console.log("*".repeat(side));
    }
}


const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Enter the side length of the square: ", (input) => {
    const side = parseInt(input);
    squareOfAsterisks(side);
    readline.close();
});
