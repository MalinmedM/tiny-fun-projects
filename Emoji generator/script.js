const emojis = [
    "🙄",
    "😱",
    "🥴",
    "🤬",
    "😭",
    "😊"
];

// Function to pick random emoji

emojiBtn.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * emojis.length);
    let randomEmoji = emojis[randomIndex];
    document.getElementById("emoji").textContent = randomEmoji;
});