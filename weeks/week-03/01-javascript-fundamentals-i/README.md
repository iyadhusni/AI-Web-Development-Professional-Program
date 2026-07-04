# Week 3 — Session 1: JavaScript Fundamentals I

**Date:** Saturday, 11 July 2026  
**Duration:** 3 hours  
**Instructor:** Dr Iyad  
**Format:** Hands-on coding workshop with AI-assisted exercises

---

## Session Objectives

By the end of this session, learners will be able to:
- Declare variables using `let`, `const`, and understand hoisting with `var`
- Work with JavaScript data types (string, number, boolean, null, undefined)
- Use arithmetic, comparison, and logical operators
- Write conditional statements (`if`, `else if`, `else`, ternary)
- Define and call functions (declarations, expressions, arrow functions)
- Prompt AI to generate, explain, and debug JavaScript code
- Build the foundation of an interactive quiz or theme-switcher

---

## Agenda (180 min)

| Time | Activity | Description |
|------|----------|-------------|
| 0:00–0:15 | Why JavaScript? | Role in web dev, JS vs HTML/CSS, developer tools console |
| 0:15–0:45 | Variables & Data Types | `let`, `const`, `var`; strings, numbers, booleans, `null`, `undefined`; `typeof` operator |
| 0:45–1:00 | Practice: Variable Playground | AI-assisted exercise — declare and log variables of each type |
| 1:00–1:15 | Break | |
| 1:15–1:45 | Operators & Conditionals | Arithmetic, comparison, logical operators; `if`, `else if`, `else`, ternary, switch |
| 1:45–2:15 | Functions | Declarations, expressions, arrow functions, parameters, return values, scope |
| 2:15–2:50 | Project Kickoff: Quiz / Theme-Switcher | Set up project structure; AI-assisted DOM scripting intro |
| 2:50–3:00 | Wrap-Up & Homework | Recap, Q&A, preview of Session 2 |

---

## Key Concepts

### 1. Variables

```js
// let — mutable, block-scoped (preferred)
let name = "Alice";
name = "Bob"; // OK

// const — immutable binding, block-scoped (preferred)
const pi = 3.14;
// pi = 3.15; // Error!

// var — function-scoped, hoisted (avoid in modern JS)
var old = "I'm hoisted";
```

### 2. Data Types

```js
// Primitive types
const name = "Alice";           // string
const age = 25;                 // number
const isStudent = true;         // boolean
const car = null;               // null (intentional absence)
let city;                       // undefined (not yet assigned)
const id = Symbol("id");        // Symbol (unique identifier)

// Checking types
console.log(typeof "hello");    // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof null);       // "object" (JS historical quirk)
console.log(typeof undefined);  // "undefined"

// Template literals
const greeting = `Hello, ${name}! You are ${age} years old.`;
```

### 3. Operators

```js
// Arithmetic
let sum = 5 + 3;      // 8
let diff = 10 - 4;    // 6
let product = 3 * 4;  // 12
let quotient = 20 / 5; // 4
let remainder = 7 % 3; // 1
let power = 2 ** 4;   // 16

// Comparison (always prefer === over ==)
console.log(5 === "5"); // false (strict: type + value)
console.log(5 == "5");  // true (loose: coerces types — avoid)
console.log(5 !== "5"); // true
console.log(10 > 5);    // true
console.log(3 <= 3);    // true

// Logical
const a = true;
const b = false;
console.log(a && b);  // false (AND)
console.log(a || b);  // true  (OR)
console.log(!a);      // false (NOT)
```

### 4. Conditionals

```js
const score = 85;

// if / else if / else
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// Ternary operator (condition ? ifTrue : ifFalse)
const status = score >= 60 ? "Pass" : "Fail";

// Switch statement
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Regular day");
}
```

### 5. Functions

```js
// Function declaration (hoisted)
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression (not hoisted)
const greetExpr = function(name) {
  return `Hello, ${name}!`;
};

// Arrow function (shorthand, no own `this`)
const greetArrow = (name) => `Hello, ${name}!`;

const add = (a, b) => a + b;

// Default parameters
const multiply = (a, b = 1) => a * b;
console.log(multiply(5));    // 5
console.log(multiply(5, 2)); // 10

// Parameters vs arguments
function logInfo(name, age) {  // parameters
  console.log(`${name} is ${age} years old`);
}

logInfo("Alice", 25);          // arguments
```

---

## Project Setup: Interactive Quiz / Theme-Switcher

### Starter HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Quiz</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <header>
      <h1>JavaScript Quiz</h1>
      <p id="score-display">Score: 0</p>
    </header>

    <main id="quiz-container">
      <div id="question-container">
        <h2 id="question-text">Loading question...</h2>
        <div id="options-container"></div>
      </div>

      <div class="controls">
        <button id="submit-btn" disabled>Submit Answer</button>
        <button id="next-btn" style="display: none;">Next Question</button>
      </div>
    </main>

    <div id="result-container" style="display: none;">
      <h2>Quiz Complete!</h2>
      <p id="final-score">Your score: 0 / 0</p>
      <button id="restart-btn">Restart Quiz</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### Starter CSS (`style.css`)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #f0f2f5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e0e0e0;
}

#score-display {
  font-size: 1.25rem;
  font-weight: bold;
  color: #667eea;
}

#question-text {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.option {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}

.option:hover {
  border-color: #667eea;
  background: #f8f9ff;
}

.option.selected {
  border-color: #667eea;
  background: #eef0ff;
}

.controls {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
}

button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  transform: translateY(-1px);
}

#submit-btn {
  background: #667eea;
  color: white;
}

#submit-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
}

#next-btn {
  background: #764ba2;
  color: white;
}

#restart-btn {
  background: #667eea;
  color: white;
}
```

### Starter JavaScript (`script.js`)

```js
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
```

---

## Activity Guide

### Activity 1: Variable Playground (15 min)

**Goal:** Practice declaring variables and logging data types.

1. Open your browser console (F12 → Console)
2. Declare variables of each type: string, number, boolean, null, undefined
3. Use `console.log()` and `typeof` to print each value and its type
4. Try reassigning a `const` variable — observe the error
5. Use template literals to create a sentence with your variables

**AI Prompt (Web Assistant):**
```
I need practice with JavaScript variables. Generate 5 exercises where I:
1. Declare variables using let and const
2. Use template literals
3. Check types with typeof

Give me the exercises one at a time.
```

**AI Prompt (CLI / IDE Agent):**
```
Generate 5 JavaScript variable exercises for a beginner. Write them to exercise.js one at a time, waiting for my answer before showing the next question. Use let, const, template literals, and typeof.
```

### Activity 2: Conditional Logic (15 min)

**Goal:** Use conditionals to solve problems.

1. Write a function `getGrade(score)` that returns "A", "B", "C", "D", or "F"
2. Write a function `isEven(num)` that returns true if a number is even
3. Write a function `maxOfThree(a, b, c)` using ternary operators

**AI Prompt (Web Assistant):**
```
Here's my JavaScript function for getting a letter grade. Can you review it and tell me if there's a bug?

function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
```

**AI Prompt (CLI / IDE Agent):**
```
Read script.js in this project. Review the getGrade function for bugs and edge cases. Check what happens with negative scores, non-numeric input, and boundary values. Show me the fixed version.
```

### Activity 3: Project Kickoff (35 min)

**Goal:** Set up the quiz project with a partner, then extend it.

Tasks:
1. Create the three files (`index.html`, `style.css`, `script.js`) with starter code
2. Get it running in the browser — see the first question appear
3. Work with AI to add a new feature:

**AI Prompts for the Quiz Project:**

**Web Assistant:**
```
I have a quiz app with multiple-choice questions. I want to add a timer that counts down from 30 seconds for each question. How can I implement this using setInterval?
```

```
I want to add a difficulty selector (easy/medium/hard) that changes the questions shown. How should I structure my data?
```

**CLI / IDE Agent:**
```
Read script.js in this project. Add a countdown timer (30s per question) using setInterval. Modify the file and show the diff.

Then add a difficulty selector (easy/medium/hard) that filters which questions are shown. Restructure the data as needed. Show the changes.
```

---

## AI Prompts for JavaScript Help

### Web Assistant (ChatGPT, Claude, Gemini)

**Getting Started:**
```
I'm new to JavaScript. Explain the difference between let, const, and var with simple examples. Use analogies a beginner would understand.
```

**Explaining Code:**
```
What does this line of JavaScript do, step by step?

document.querySelectorAll(".option").forEach(btn => {
  btn.classList.remove("selected");
});
```

**Debugging:**
```
This JavaScript isn't working. I expected the function to return "Hello, Alice!" but it returns undefined. What's wrong?

function greet(name) {
  const message = `Hello, ${name}!`;
}

console.log(greet("Alice"));
```

**Code Generation:**
```
Write a JavaScript function called "shuffleArray" that takes an array and returns a new array with the elements in random order. Use the Fisher-Yates algorithm.
```

**Refactoring:** paste your code:
```
Here's my JavaScript code. Can you refactor it to use arrow functions and template literals?

function fullName(first, last) {
  return first + " " + last;
}
```

### CLI / IDE Agent (OpenCode, Claude Code, Copilot)

**Getting Started:** Ask from your terminal:
```
Explain the difference between let, const, and var with simple examples and analogies for a beginner.
```

**Explaining Code:**
```
Read script.js in this project. Explain what each line of code does, step by step.
```

**Debugging:**
```
Read script.js. It's supposed to return "Hello, Alice!" but returns undefined. Find the bug, fix it, and explain what was wrong.
```

**Code Generation:**
```
Add a shuffleArray function to script.js that takes an array and returns a new array with elements in random order using the Fisher-Yates algorithm. Show the diff.
```

**Refactoring:**
```
Read script.js and refactor it to use arrow functions and template literals where appropriate. Keep the same behaviour. Show the diff.
```

---

1. **Complete the quiz starter** — Get the provided quiz project running in your browser
2. **Add 3 new questions** — Edit the `questions` array with questions covering variables, operators, and functions
3. **Write 3 functions** — Create and test these in the console:
   - `factorial(n)` — returns n! (e.g., factorial(5) → 120)
   - `fizzBuzz(n)` — prints numbers 1 to n, replacing multiples of 3 with "Fizz", 5 with "Buzz", both with "FizzBuzz"
   - `reverseString(str)` — returns the string reversed
4. **AI exploration** — Use an AI tool to get an explanation of **hoisting** and write a small example demonstrating it

---

## Resources

- [MDN: JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [MDN: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [JS Identifiers (variables) vs parameters vs arguments](https://www.jsv9000.app/) — JS visualizer tool
