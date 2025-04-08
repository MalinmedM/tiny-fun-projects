const guessInput = document.querySelector("#guessInput");
const guessBtn = document.querySelector("#guessBtn");
const resultText = document.querySelector("#result");
const resetBtn = document.querySelector("#resetBtn");
let guessesLeft = 3;

guessBtn.addEventListener("click", function() {
    if (guessesLeft > 0) {
        let userGuess = Number(guessInput.value);
        let randomNumber = Math.floor(Math.random() * 10);

        if (randomNumber === userGuess) {
            resultText.textContent = "You guessed right!";
            resultText.style.color = "green";
        } else {
            guessesLeft--;
            resultText.textContent = `Nope, it was ${randomNumber}. You have ${guessesLeft} guesses left.`;
            resultText.style.color = "red";
        }

        //clears input field
        guessInput.value = "";

        if (guessesLeft === 0) {
            guessBtn.disabled = true;
            resultText.textContent += " Game over!"
        }
    }
    
});

//reset button to play more times
resetBtn.addEventListener("click", function() {
    guessesLeft = 3;
    resultText.textContent = "";
    guessBtn.disabled = false;
});