
function squareOfCharacters(side, fillCharacter) {
    for (let i = 0; i < side; i++) {
        console.log(fillCharacter.repeat(side));
    }
}
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Enter the side length of the square: ", (input) => {
    const side = parseInt(input);
    readline.question("Enter the fill character: ", (fillChar) => {
        squareOfCharacters(side, fillChar);
        readline.close();
    });
});
