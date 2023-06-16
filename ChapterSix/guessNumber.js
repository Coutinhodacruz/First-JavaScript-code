let prompt = require("prompt-sync")()

function guessTheNumber() {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    let guess;
    let tries = 0;

    do {
        guess = Number(prompt("Guess a number between 1 and 1000 "));
        tries++;
        if (guess < randomNumber) {
            console.log("Too low. Try again.");
        } else if (guess > randomNumber) {
            console.log("Too high. Try again.");
        }
    } while (guess !== randomNumber);

    console.log(`Congratulations! You guessed the number in ${tries} tries.`);

    const playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        guessTheNumber();
    } else {
        console.log("Thanks for playing! ");
    }
}

guessTheNumber();
