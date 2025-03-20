// Step 1: Create an array of Magic 8-Ball responses
const responses = [
    "Yes, definitely!",
    "It is certain.",
    "Without a doubt.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Don't count on it.",
    "My sources say no.",
    "Very doubtful."
];

// Step 2: Function to give a random response
function shake8Ball() {
    let randomIndex = Math.floor(Math.random() * responses.length);
    let randomResponse = responses[randomIndex];

    document.getElementById("answer").textContent = randomResponse;
}

// Step 3: Add an event listener to the button
document.getElementById("shakeBtn").addEventListener("click", shake8Ball);
