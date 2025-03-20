// Step 1: Create an array of compliments
const compliments = [
    "You're doing amazing!",
    "You have a brilliant mind!",
    "Your creativity is inspiring!",
    "You make the world a better place!",
    "You're stronger than you think!",
    "Your kindness is contagious!"
];

// Step 2: Function to pick a random compliment
function giveCompliment() {
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    // Step 3: Display it in the HTML
    document.getElementById("compliment").textContent = randomCompliment;
}

//Step 4: function to clear the compliment
function clearCompliment() {
    document.getElementById("compliment").textContent = "";
}

//Step 5: Select the buttons and add eventlisteners
document.getElementById("complimentBtn").addEventListener("click", giveCompliment);
document.getElementById("clearBtn").addEventListener("click", clearCompliment);