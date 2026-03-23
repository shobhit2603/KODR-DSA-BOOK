// Project - Guess Game

// Create a simple guess game where the user has to guess a number between 1 and 10. The program should generate a random number and give feedback on whether the user's guess is too high, too low, or correct.

const prompt = require('prompt-sync')();

function guessGame() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess = 0;
    let attempts = 0;
    while (userGuess !== randomNumber) {
        userGuess = prompt("Guess a number between 1 and 10:");
        attempts++;
        if (userGuess < randomNumber) {
            console.log("Too low! Try again.");
        } else if (userGuess > randomNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log(`Correct! You guessed the number in ${attempts} attempts.`);
        }
    }
}

guessGame();