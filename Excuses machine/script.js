// Array of excuses
const excuses = [
    "I got arrested.",
    "I had better things to do.",
    "It's boring.",
    "I couldn't get the lid open.",
    "I was abducted by Aliens",
    "My cat staged an intervention about my screen time.",
    "I got lost in my own mind."
];

// Function to pick a random excuse
function giveExcuse() {
    let randomIndex = Math.floor(Math.random() * excuses.length);
    let randomExcuse = excuses[randomIndex];

    // Display it in the HTML
    document.getElementById("excuse").textContent = randomExcuse;
}

// Function to clear the compliment
function clearExcuse() {
    document.getElementById("excuse").textContent = "";
}

// Select the buttons and add eventlisteners
document.getElementById("excuseBtn").addEventListener("click", giveExcuse);
document.getElementById("clearBtn").addEventListener("click", clearExcuse);