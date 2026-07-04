// Quiz data
const questions = [
  {
    question: "What keyword is used to declare a variable in modern JavaScript?",
    options: ["var", "let", "both let and const", "int"],
    answer: 2
  },
  {
    question: "What is the result of typeof null?",
    options: ["null", "undefined", "object", "boolean"],
    answer: 2
  },
  {
    question: "Which operator checks both value AND type?",
    options: ["==", "===", "=", "!="],
    answer: 1
  }
];

// State variables
let currentQuestion = 0;
let score = 0;
let selectedOption = null;

// DOM references
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const submitBtn = document.getElementById("submit-btn");
const nextBtn = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score-display");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const finalScore = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

// Functions
function loadQuestion() {
  // Clear previous options
  optionsContainer.innerHTML = "";
  selectedOption = null;
  submitBtn.disabled = true;
  nextBtn.style.display = "none";

  // Get current question
  const q = questions[currentQuestion];
  questionText.textContent = q.question;

  // Create option buttons
  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.dataset.index = index;
    button.addEventListener("click", selectOption);
    optionsContainer.appendChild(button);
  });
}

function selectOption(e) {
  // Deselect all
  document.querySelectorAll(".option").forEach(btn => {
    btn.classList.remove("selected");
  });

  // Select clicked
  e.target.classList.add("selected");
  selectedOption = parseInt(e.target.dataset.index);
  submitBtn.disabled = false;
}

function submitAnswer() {
  if (selectedOption === null) return;

  const q = questions[currentQuestion];
  const isCorrect = selectedOption === q.answer;

  if (isCorrect) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  }

  // Highlight correct/incorrect
  document.querySelectorAll(".option").forEach((btn, index) => {
    btn.disabled = true;
    if (index === q.answer) {
      btn.style.borderColor = "green";
      btn.style.background = "#e8f5e9";
    } else if (index === selectedOption && !isCorrect) {
      btn.style.borderColor = "red";
      btn.style.background = "#ffebee";
    }
  });

  submitBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
    submitBtn.style.display = "inline-block";
  } else {
    showResults();
  }
}

function showResults() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  finalScore.textContent = `Your score: ${score} / ${questions.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  selectedOption = null;
  scoreDisplay.textContent = "Score: 0";
  quizContainer.style.display = "block";
  resultContainer.style.display = "none";
  loadQuestion();
  submitBtn.style.display = "inline-block";
}

// Event listeners
submitBtn.addEventListener("click", submitAnswer);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

// Initialize
loadQuestion();
