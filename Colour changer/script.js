const clourBtn =document.getElementById(colourBtn);

const colours = [
    "#FF5733", 
    "#33FFBD", 
    "#335BFF", 
    "#FF33A8", 
    "#A6E22E"
];

colourBtn.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * colours.length);
    let randomColour = colours[randomIndex];
    document.getElementById("hex-code").textContent = randomColour;
});