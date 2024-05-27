// EXERCISE 1: GUESS THE NUMBER

// Write a program to generate a random number and store it in a variable.
// The program then takes an input from user to tell them whether the guess was correct, greater or lesser than the original number.
// 100 - (number of guesses) is the score of user.
// The program is expected to terminate once the number is guessed.
// Number should be between 1 to 100.

let start = () => {

    let randInt = parseInt(Math.random() * 100);
    console.log(randInt);

    let userGuess;
    let score = 100;
    let guesses = 0;

    while (userGuess != randInt) {
        userGuess = parseInt(prompt(`Enter your guess: `));

        if (userGuess > randInt) {
            alert(`The number that you have guessed is greater than the mystery value`);
        }
        else if (userGuess < randInt) {
            alert(`The number that you have guessed is lesser than the mystery value`);
        }
        guesses++;
    }

    score -= guesses;

    if (userGuess == randInt) {
        alert(`You win!!! \nYour score: ${score} \nIt took you ${guesses} tries to guess the correct number`);
    }
}

document.querySelector('#start').addEventListener("click", () => {
    start();
})
