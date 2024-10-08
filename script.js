const terms = [
    // The full terms array of 75 entries as provided
];

let currentTermIndex = 0;
let score = 0;
let level = 1;
const termsPerLevel = 15;

// Shuffle function for randomizing terms
function shuffleTerms(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize the game and start with the first level
function initializeGame() {
    shuffleTerms(terms);
    loadTerm();
    generateOptions();
}

// Load the current term
function loadTerm() {
    const currentTerm = terms[currentTermIndex];
    document.getElementById("term-meaning").innerText = currentTerm.meaning;
}

// Generate options for prefixes, roots, and suffixes
function generateOptions() {
    const currentTerm = terms[currentTermIndex];
    const prefixes = new Set(["hypo-", "hyper-", "brady-", "tachy-", "epi-"]);
    const roots = new Set(["card", "glyc", "derm", "neur", "scop"]);
    const suffixes = new Set(["itis", "-emia", "-ia", "-ion", "-ology"]);

    prefixes.add(currentTerm.prefix);
    roots.add(currentTerm.root);
    suffixes.add(currentTerm.suffix);

    displayOptions("prefix-options", Array.from(prefixes));
    displayOptions("root-options", Array.from(roots));
    displayOptions("suffix-options", Array.from(suffixes));
}

// Display options on the game board
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

// Drag-and-drop functions
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

// Submit the answer and provide feedback
function submitAttempt() {
    const currentTerm = terms[currentTermIndex];
    const prefixValue = document.getElementById("prefix-zone").innerText.trim();
    const rootValue = document.getElementById("root-zone").innerText.trim();
    const suffixValue = document.getElementById("suffix-zone").innerText.trim();

    const correctSound = document.getElementById("correct-sound");
    const incorrectSound = document.getElementById("incorrect-sound");

    if (prefixValue === currentTerm.prefix && rootValue === currentTerm.root && suffixValue === currentTerm.suffix) {
        document.getElementById("result").innerText = "Correct!";
        score += 1;
        document.getElementById("score").innerText = score;
        correctSound.play();
        
        if (score % termsPerLevel === 0) {
            document.getElementById("nextLevelBtn").style.display = "block";
        } else {
            setTimeout(nextTerm, 1000); // Move to the next term if not on level-up
        }
    } else {
        document.getElementById("result").innerText = "Incorrect, try again.";
        incorrectSound.play();
    }
}

// Advance to the next term
function nextTerm() {
    currentTermIndex = (currentTermIndex + 1) % terms.length;
    loadTerm();
    generateOptions();
}

// Advance to the next level
function nextLevel() {
    if (level < 5) {
        level += 1;
        document.getElementById("level").innerText = level;
        document.getElementById("nextLevelBtn").style.display = "none";
        nextTerm();
    } else {
        document.getElementById("result").innerText = "Congratulations! You’ve completed all levels!";
    }
}

// Initialize the game when the window is loaded
window.onload = function() {
    initializeGame();
};

