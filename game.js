// Medical terms list with 75 entries (provide full list)
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
    { prefix: "para-", root: "thyroid", suffix: "-ectomy", meaning: "Removal of the parathyroid glands", hint: "Surgical removal of parathyroid glands" },
    { prefix: "gastro-", root: "enter", suffix: "-itis", meaning: "Inflammation of the stomach and intestines", hint: "Inflammation of the digestive system" },
    { prefix: "neuro-", root: "path", suffix: "-y", meaning: "Disease of the nervous system", hint: "Disorder of the nerves" },
    { prefix: "rhino-", root: "plasty", suffix: "", meaning: "Surgical repair of the nose", hint: "Nose surgery" },
    { prefix: "osteo-", root: "arthr", suffix: "-itis", meaning: "Inflammation of bones and joints", hint: "Joint inflammation involving the bones" },
    { prefix: "hypo-", root: "tension", suffix: "", meaning: "Low blood pressure", hint: "Decreased blood pressure" },
    { prefix: "hyper-", root: "glycemia", suffix: "", meaning: "High blood sugar", hint: "Increased sugar in the blood" },
    { prefix: "brady-", root: "cardia", suffix: "", meaning: "Slow heart rate", hint: "Slow heartbeat" },
    { prefix: "tachy-", root: "pnea", suffix: "", meaning: "Fast breathing", hint: "Rapid breathing" },
    { prefix: "dys-", root: "pepsia", suffix: "", meaning: "Indigestion", hint: "Difficult digestion" },
    { prefix: "ante-", root: "natal", suffix: "", meaning: "Before birth", hint: "Before birth" },
    { prefix: "sub-", root: "lingual", suffix: "", meaning: "Under the tongue", hint: "Beneath the tongue" },
    { prefix: "poly-", root: "dipsia", suffix: "", meaning: "Excessive thirst", hint: "Abnormally great thirst" },
    { prefix: "cardio-", root: "gram", suffix: "", meaning: "Record of heart activity", hint: "Heart monitoring record" },
    { prefix: "neuro-", root: "logy", suffix: "", meaning: "Study of the nervous system", hint: "Study of nerves" },
    { prefix: "gastro-", root: "scopy", suffix: "", meaning: "Viewing of the stomach", hint: "Visual examination of the stomach" },
    { prefix: "rhino-", root: "scopy", suffix: "", meaning: "Viewing of the nasal cavity", hint: "Nasal examination" },
    { prefix: "osteo-", root: "pathy", suffix: "", meaning: "Disease of the bones", hint: "Bone disease" },
    { prefix: "arthro-", root: "plasty", suffix: "", meaning: "Surgical repair of a joint", hint: "Joint replacement surgery" },
    { prefix: "nephr-", root: "ectomy", suffix: "", meaning: "Surgical removal of a kidney", hint: "Kidney removal surgery" },
    { prefix: "cyst-", root: "itis", suffix: "", meaning: "Inflammation of the bladder", hint: "Bladder inflammation" },
    { prefix: "my-", root: "itis", suffix: "", meaning: "Inflammation of muscles", hint: "Muscle inflammation" },
    { prefix: "endo-", root: "crine", suffix: "-ology", meaning: "Study of endocrine glands", hint: "Study of hormone glands" },
    { prefix: "bi-", root: "lateral", suffix: "", meaning: "Both sides", hint: "Relating to two sides" },
    { prefix: "pre-", root: "operative", suffix: "", meaning: "Before surgery", hint: "Prior to surgery" },
    { prefix: "post-", root: "operative", suffix: "", meaning: "After surgery", hint: "Following surgery" },
    { prefix: "intra-", root: "venous", suffix: "", meaning: "Within a vein", hint: "Inside the veins" },
    { prefix: "peri-", root: "operative", suffix: "", meaning: "Around the time of surgery", hint: "Before, during, or after surgery" },
    { prefix: "extra-", root: "cellular", suffix: "", meaning: "Outside the cell", hint: "Outside of cells" },
    { prefix: "retro-", root: "grade", suffix: "", meaning: "Moving backward", hint: "Reversing the normal flow" },
    { prefix: "hyper-", root: "thermia", suffix: "", meaning: "High body temperature", hint: "Elevated body heat" },
    { prefix: "hypo-", root: "thermia", suffix: "", meaning: "Low body temperature", hint: "Decreased body heat" },
    { prefix: "hem-", root: "orrhage", suffix: "", meaning: "Severe bleeding", hint: "Excessive loss of blood" },
    { prefix: "osteo-", root: "penia", suffix: "", meaning: "Decreased bone density", hint: "Low bone density" },
    { prefix: "encephalo-", root: "pathy", suffix: "", meaning: "Brain disease", hint: "Disease of the brain" },
    { prefix: "derma-", root: "titis", suffix: "", meaning: "Inflammation of the skin", hint: "Skin inflammation" },
    { prefix: "hema-", root: "lysis", suffix: "", meaning: "Destruction of red blood cells", hint: "Red blood cell destruction" },
    { prefix: "chole-", root: "lith", suffix: "-iasis", meaning: "Gallstones", hint: "Formation of stones in the gallbladder" },
    { prefix: "arthro-", root: "scopy", suffix: "", meaning: "Viewing of a joint", hint: "Joint examination" },
    { prefix: "thrombo-", root: "lysis", suffix: "", meaning: "Dissolution of a blood clot", hint: "Breaking down of a blood clot" },
    { prefix: "angi-", root: "plasty", suffix: "", meaning: "Surgical repair of a blood vessel", hint: "Blood vessel surgery" },
    { prefix: "cyto-", root: "logy", suffix: "", meaning: "Study of cells", hint: "Examination of cell structure" },
    { prefix: "laryngo-", root: "scopy", suffix: "", meaning: "Examination of the larynx", hint: "Larynx examination" },
    { prefix: "broncho-", root: "spasm", suffix: "", meaning: "Spasm of the airways", hint: "Sudden tightening of airway muscles" },
    { prefix: "phlebo-", root: "tomy", suffix: "", meaning: "Incision into a vein", hint: "Vein surgery" },
    { prefix: "myelo-", root: "pathy", suffix: "", meaning: "Disease of the spinal cord", hint: "Spinal cord disease" },
    { prefix: "gluco-", root: "genesis", suffix: "", meaning: "Formation of glucose", hint: "Creation of glucose" },
    { prefix: "hemo-", root: "globin", suffix: "", meaning: "Protein in red blood cells", hint: "Oxygen-carrying protein" },
    { prefix: "leuko-", root: "cyte", suffix: "", meaning: "White blood cell", hint: "White blood cell type" },
    { prefix: "uro-", root: "logy", suffix: "", meaning: "Study of the urinary system", hint: "Study of urinary organs" },
    { prefix: "necro-", root: "sis", suffix: "", meaning: "Death of tissue", hint: "Tissue death" },
    { prefix: "a-", root: "phasia", suffix: "", meaning: "Inability to speak", hint: "Loss of speech ability" },
    { prefix: "bio-", root: "psy", suffix: "", meaning: "Removal of tissue for examination", hint: "Tissue sample for diagnosis" }
];

let currentTermIndex = 0;
let score = 0;
let level = 1;
let correctAnswers = 0;
let incorrectAnswers = 0;
const termsPerLevel = 10;
const totalTermsToWin = 70;

let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

// Shuffle function
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

// Load the current term
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
            updateLeaderboard();
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




// Function to advance to the next level
function advanceLevel() {
    level += 1;  // Increment the level
    correctAnswers = 0;  // Reset correct answers count for new level
    document.getElementById('level-number').innerText = `Level ${level}`;  // Update level display
    document.getElementById('progress-bar').value = 0;  // Reset the progress bar
}


// Update progress based on correct answers
function updateProgress(increment) {
    correctAnswers += increment;
    let progressBar = document.getElementById('progress-bar');
    progressBar.value = (correctAnswers / termsPerLevel) * 100;

    // Check if the progress bar is full, then advance level
    if (correctAnswers >= termsPerLevel) {
        advanceLevel();
    }
}

