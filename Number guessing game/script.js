const guessInput = document.querySelector("#guessInput");
const guessBtn = document.querySelector("#guessBtn");
const resultText = document.querySelector("#result");

guessBtn.addEventListener("click", function() {
    let userGuess = Number(guessInput.value);
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber === userGuess) {
        resultText.textContent = "You guessed right!";
    } else {
        resultText.textContent = "Nope, it was " + randomNumber;
    }
});