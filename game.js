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
let correctStreak = 0;
let timerInterval;
const termsPerLevel = 10;
const totalTermsToWin = 70;
let currentTermReview = [];

// Initialize the game
function initializeGame() {
    shuffleTerms(terms);
    loadTerm();
    generateOptions();
    startTimer();
    updateProgressBar();
}

// Shuffle function
function shuffleTerms(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Load the current term
function loadTerm() {
    const currentTerm = terms[currentTermIndex];
    document.getElementById("term-meaning").innerText = currentTerm.meaning;
    document.getElementById("result").innerText = '';
}

// Generate options
function generateOptions() {
    const currentTerm = terms[currentTermIndex];
    const prefixes = ["hypo-", "hyper-", "brady-", "tachy-", "epi-", currentTerm.prefix];
    const roots = ["card", "glyc", "derm", "neur", "scop", currentTerm.root];
    const suffixes = ["itis", "-emia", "-ia", "-ion", "-ology", currentTerm.suffix];
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

// Timer function
function startTimer() {
    let timeRemaining = 15; // Set the initial time for each term
    document.getElementById("timer").innerText = timeRemaining; // Display the initial time
    
    // Start a countdown using setInterval
    timerInterval = setInterval(() => {
        timeRemaining--; // Decrement the timer each second
        document.getElementById("timer").innerText = timeRemaining;
        
        if (timeRemaining <= 0) { // When time runs out
            clearInterval(timerInterval); // Stop the timer
            incorrectAnswers++; // Increment the incorrect answer count
            document.getElementById("result").innerText = "Time's up!"; // Display "Time's up!" message
            
            // Log the term result as incorrect due to timeout
            currentTermReview.push({ term: terms[currentTermIndex].meaning, result: "Time ran out" });
            
            checkGameEnd(); // Check if game over or move to the next term
        }
    }, 1000); // Execute every 1000ms (1 second)
}

// Reset timer
function resetTimer() {
    clearInterval(timerInterval); // Clear any existing timer
    startTimer(); // Start a fresh timer for the next term
}

// Check for game end or proceed to the next term
function checkGameEnd() {
    if (incorrectAnswers >= 5) { // If player has 5 incorrect answers
        document.getElementById("result").innerText = "Game over!"; // Show game over message
        showReview(); // Show the end-of-level review
    } else {
        nextTerm(); // Otherwise, proceed to the next term
    }
}

// Move to the next term
function nextTerm() {
    resetTimer(); // Reset and start a new timer for the next term
    currentTermIndex = (currentTermIndex + 1) % terms.length; // Move to the next term in the list
    loadTerm(); // Load the new term's meaning for the player to match
    generateOptions(); // Display new options for prefixes, roots, and suffixes
}

// Submit attempt
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
        correctStreak++;
        if (correctStreak % 3 === 0) score += 5; // Bonus points for streaks
        document.getElementById("score").innerText = score;
        correctSound.play();
        currentTermReview.push({ term: currentTerm.meaning, result: "Correct" });
        updateProgressBar();

        if (correctAnswers % termsPerLevel === 0) {
            showReview();
        } else {
            nextTerm();
        }
    } else {
        incorrectAnswers++;
        correctStreak = 0;
        incorrectSound.play();
        document.getElementById("result").innerText = "Incorrect, try again.";
        currentTermReview.push({ term: currentTerm.meaning, result: "Incorrect" });
        checkGameEnd();
    }
    resetTimer();
}

// Progress bar update
function updateProgressBar() {
    const progress = (correctAnswers % termsPerLevel) / termsPerLevel * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
}

// Hint function
function useHint() {
    const currentTerm = terms[currentTermIndex];
    alert(`Hint: ${currentTerm.hint}`);
    score = Math.max(0, score - 5); // Deduct points but don’t go below zero
    document.getElementById("score").innerText = score;
}

// Review display
function showReview() {
    document.getElementById("review-container").classList.remove("hidden");
    document.getElementById("game-container").classList.add("hidden");
    const reviewList = document.getElementById("review-list");
    reviewList.innerHTML = "";
    currentTermReview.forEach(item => {
        const div = document.createElement("div");
        div.className = "review-item";
        div.innerText = `${item.term}: ${item.result}`;
        reviewList.appendChild(div);
    });
}

// Next level
function nextLevel() {
    level++;
    document.getElementById("level").innerText = level;
    currentTermReview = [];
    document.getElementById("review-container").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
    initializeGame();
}

// Flashcard mode
function startFlashcardMode() {
    document.getElementById("flashcard-container").classList.remove("hidden");
    document.getElementById("game-container").classList.add("hidden");
    const flashcardList = document.getElementById("flashcard-list");
    flashcardList.innerHTML = "";
    terms.forEach(term => {
        const div = document.createElement("div");
        div.className = "flashcard";
        div.innerText = `Term: ${term.meaning}\nHint: ${term.hint}`;
        flashcardList.appendChild(div);
    });
}

// Exit flashcard mode
function exitFlashcardMode() {
    document.getElementById("flashcard-container").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
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

// Initialize the game on page load
window.onload = function() {
    initializeGame();
};
