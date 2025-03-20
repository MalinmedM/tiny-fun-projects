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
    let ball = document.getElementById("shakeBtn"); // Target the button

    // Add the shaking class
    ball.classList.add("shaking");

    // Wait for the shake animation to finish (0.5s), then show the answer
    setTimeout(() => {
        let randomIndex = Math.floor(Math.random() * responses.length);
        let randomResponse = responses[randomIndex];

        document.getElementById("answer").textContent = randomResponse;
        
        // Remove the shaking class so it can be triggered again
        ball.classList.remove("shaking");
    }, 500); // Matches animation duration (0.5s)
}

// Step 3: Add an event listener to the button
document.getElementById("shakeBtn").addEventListener("click", shake8Ball);

