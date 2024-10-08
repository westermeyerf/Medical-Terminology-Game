// Medical terms list with 75 entries (provide full list)
const terms = [
    { prefix: "hypo-", root: "glyc", suffix: "-emia", meaning: "Low blood sugar", hint: "Low sugar in the blood" },
    { prefix: "hyper-", root: "tens", suffix: "-ion", meaning: "High blood pressure", hint: "Elevated blood pressure" },
    { prefix: "brady-", root: "card", suffix: "-ia", meaning: "Slow heart rate", hint: "Slowed heart rate" },
    { prefix: "tachy-", root: "card", suffix: "-ia", meaning: "Fast heart rate", hint: "Fast heartbeat" },
    //... add remaining terms
];

let currentTermIndex = 0;
let score = 0;
let level = 1;
let correctAnswers = 0;
let incorrectAnswers = 0;
const termsPerLevel = 10;
const totalTermsToWin = 70;

let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

// Shuffle terms
function shuffleTerms(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize game
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

// Generate options for prefixes, roots, and suffixes
function generateOptions() {
    const currentTerm = terms[currentTermIndex];
    const prefixes = ["hypo-", "hyper-", "brady-", "tachy-", "epi-"];
    const roots = ["card", "glyc", "derm", "neur", "scop"];
    const suffixes = ["itis", "-emia", "-ia", "-ion", "-ology"];

    prefixes.push(currentTerm.prefix);
    roots.push(currentTerm.root);
    suffixes.push(currentTerm.suffix);

    displayOptions("prefix-options", prefixes);
    displayOptions("root-options", roots);
    displayOptions("suffix-options", suffixes);
}

// Display options
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

// Drag and drop functions
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

// Submit answer
function submitAttempt() {
    const currentTerm = terms[currentTermIndex];
    const prefixValue = document.getElementById("prefix-zone").innerText.trim();
    const rootValue = document.getElementById("root-zone").innerText.trim();
    const suffixValue = document.getElementById("suffix-zone").innerText.trim();

    const correctSound = document.getElementById("correct-sound");
    const incorrectSound = document.getElementById("incorrect-sound");

    if (prefixValue === currentTerm.prefix && rootValue === currentTerm.root && suffixValue === currentTerm.suffix) {
        correctAnswers++;
        score += 10;
        document.getElementById("score").innerText = score;
        correctSound.play();
        
        if (correctAnswers === totalTermsToWin) {
            updateLeaderboard();
            return;
        }

        if (correctAnswers % termsPerLevel === 0) {
            level++;
            document.getElementById("level").innerText = level;
        }
        
        setTimeout(nextTerm, 1000);
    } else {
        incorrectAnswers++;
        document.getElementById("result").innerText = "Incorrect, try again.";
        incorrectSound.play();
        
        if (incorrectAnswers >= 5) {
            resetGame();
        }
    }
}

// Move to next term
function nextTerm() {
    currentTermIndex = (currentTermIndex + 1) % terms.length;
    loadTerm();
    generateOptions();
}

// Reset the game
function resetGame() {
    currentTermIndex = 0;
    score = 0;
    level = 1;
    correctAnswers = 0;
    incorrectAnswers = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("level").innerText = level;
    initializeGame();
}

// Update leaderboard
function updateLeaderboard() {
    const playerName = document.getElementById("playerName").value || "Player";
    leaderboard.push({ name: playerName, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10); // Keep only top 10
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    showLeaderboard();
}

// Display leaderboard
function showLeaderboard() {
    const container = document.getElementById("leaderboard-container");
    const list = document.getElementById("leaderboard");
    list.innerHTML = '';
    
    leaderboard.forEach((entry, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${index + 1}. ${entry.name} - ${entry.score} ${getMedal(index)}`;
        list.appendChild(listItem);
    });
    
    container.style.display = "block";
}

// Medal icons
function getMedal(index) {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return '';
}

// Initialize the game when the window is loaded
window.onload = function() {
    initializeGame();
};

