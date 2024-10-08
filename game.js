// Medical terms list with 75 entries (for brevity, only part of the array is shown here; make sure to include the full list)
const terms = [
    { prefix: "hypo-", root: "glyc", suffix: "-emia", meaning: "Low blood sugar", hint: "Low sugar in the blood" },
    { prefix: "hyper-", root: "tens", suffix: "-ion", meaning: "High blood pressure", hint: "Elevated blood pressure" },
    { prefix: "brady-", root: "card", suffix: "-ia", meaning: "Slow heart rate", hint: "Slowed heart rate" },
    { prefix: "tachy-", root: "card", suffix: "-ia", meaning: "Fast heart rate", hint: "Fast heartbeat" },
    { prefix: "dys-", root: "uria", suffix: "", meaning: "Painful urination", hint: "Difficult or painful urination" },
    { prefix: "peri-", root: "card", suffix: "-itis", meaning: "Inflammation around the heart", hint: "Inflammation of the membrane around the heart" },
    { prefix: "sub-", root: "derm", suffix: "-al", meaning: "Beneath the skin", hint: "Underneath the skin" },
    { prefix: "ante-", root: "partum", suffix: "", meaning: "Before childbirth", hint: "Before labor" },
    { prefix: "poly-", root: "neur", suffix: "-itis", meaning: "Inflammation of many nerves", hint: "Inflammation affecting multiple nerves" },
    { prefix: "hemi-", root: "arthro", suffix: "-plasty", meaning: "Surgical repair of half a joint", hint: "Partial joint replacement surgery" },
    // ... add the remaining terms to complete the list of 75
];

let currentTermIndex = 0;
let score = 0;

// Shuffle the terms using Fisher-Yates algorithm
function shuffleTerms(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize the game
function initializeGame() {
    shuffleTerms(terms); 
    loadTerm();
    generateOptions();
}

// Load the term meaning on the screen
function loadTerm() {
    const currentTerm = terms[currentTermIndex];
    document.getElementById("term-meaning").innerText = currentTerm.meaning;
}

// Generate and display the options for prefixes, roots, and suffixes
function generateOptions() {
    const currentTerm = terms[currentTermIndex];
    const prefixes = ["hypo-", "hyper-", "brady-", "tachy-", "epi-"];
    const roots = ["card", "glyc", "derm", "neur", "scop"];
    const suffixes = ["itis", "-emia", "-ia", "-ion", "-ology"];

    if (!prefixes.includes(currentTerm.prefix)) prefixes.push(currentTerm.prefix);
    if (!roots.includes(currentTerm.root)) roots.push(currentTerm.root);
    if (!suffixes.includes(currentTerm.suffix)) suffixes.push(currentTerm.suffix);

    displayOptions("prefix-options", prefixes);
    displayOptions("root-options", roots);
    displayOptions("suffix-options", suffixes);
}

// Display options in the container
function displayOptions(containerId, options) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    options.sort(() => Math.random() - 0.5);

    options.forEach(option => {
        const div = document.createElement("div");
        div.className = "draggable";
        div.innerText = option;
        div.draggable = true;
        div.ondragstart = drag;
        container.appendChild(div);
    });
}

// Drag-and-drop functionality
function drag(event) {
    event.dataTransfer.setData("text", event.target.innerText);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event, element) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    element.innerText = data;
}

// Submit answer and give feedback
function submitAttempt() {
    const currentTerm = terms[currentTermIndex];
    const prefixValue = document.getElementById("prefix-zone").innerText.trim();
    const rootValue = document.getElementById("root-zone").innerText.trim();
    const suffixValue = document.getElementById("suffix-zone").innerText.trim();

    const correctSound = document.getElementById("correct-sound");
    const incorrectSound = document.getElementById("incorrect-sound");

    if (prefixValue === currentTerm.prefix && rootValue === currentTerm.root && suffixValue === currentTerm.suffix) {
        document.getElementById("result").innerText = "Correct!";
        score += 10;
        document.getElementById("score").innerText = score;
        correctSound.play();
        setTimeout(nextTerm, 1000);
    } else {
        document.getElementById("result").innerText = "Incorrect, try again.";
        incorrectSound.play();
    }
}

// Load the next term
function nextTerm() {
    currentTermIndex = (currentTermIndex + 1) % terms.length;
    loadTerm();
    generateOptions();
}

// Initialize the game on page load
window.onload = function() {
    initializeGame();
};

