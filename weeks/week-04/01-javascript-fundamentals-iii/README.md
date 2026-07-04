# Week 4 — Session 1: JavaScript Fundamentals III

**Date:** Saturday, 18 July 2026  
**Duration:** 3 hours  
**Instructor:** Dr Iyad  
**Format:** Hands-on coding workshop with AI-assisted debugging

---

## Session Objectives

By the end of this session, learners will be able to:
- Handle browser events (click, submit, keydown, input, change)
- Use event delegation for dynamically created elements
- Prevent default form submission behavior
- Validate form inputs and provide user feedback
- Read from and write to localStorage to persist data
- Complete and improve the quiz/theme-switcher with forms and persistence

---

## Agenda (180 min)

| Time | Activity | Description |
|------|----------|-------------|
| 0:00–0:10 | Recap & Warm-Up | Quick review of DOM manipulation from Session 2 |
| 0:10–0:35 | Events Deep Dive | Event types, listeners, event object, `this` vs `target` |
| 0:35–1:00 | Event Delegation & Patterns | Adding events to multiple elements, delegation for dynamic content |
| 1:00–1:15 | Break | |
| 1:15–1:45 | Forms & Validation | `submit` event, `preventDefault`, form input types, validation |
| 1:45–2:15 | localStorage | Saving/reading data, JSON.stringify/parse, persistence patterns |
| 2:15–2:50 | Project: Complete Quiz/Theme-Switcher | Add form inputs, save score history, improve user experience |
| 2:50–3:00 | Wrap-Up & Homework | Recap, Q&A, preview of Mini Project I |

---

## Key Concepts

### 1. Events & Event Listeners

```js
// Basic event listener
const btn = document.querySelector("#my-btn");
btn.addEventListener("click", function(event) {
  console.log("Button clicked!");
  console.log(event.type);      // "click"
  console.log(event.target);    // the element that was clicked
  console.log(this);            // the element the listener is attached to
});

// Common event types
// click       — mouse click
// dblclick    — double click
// mouseover   — mouse enters element
// mouseout    — mouse leaves element
// keydown     — key pressed
// keyup       — key released
// input       — value changed (input/textarea)
// change      — value committed (input/select)
// submit      — form submitted
// load        — page/resources loaded
// DOMContentLoaded — HTML parsed, no waiting for images

// Keyboard events
document.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key} (code: ${e.code})`);
  if (e.key === "Enter") {
    console.log("Enter was pressed!");
  }
  if (e.key === "Escape") {
    console.log("Escape — closing modal...");
  }
});

// Event object properties
element.addEventListener("click", (e) => {
  e.target        // the element that triggered the event
  e.currentTarget // the element the listener is on
  e.type          // event type string
  e.clientX / e.clientY  // mouse coordinates (for mouse events)
  e.key           // key value (for keyboard events)
  e.preventDefault()  // stop default behavior
  e.stopPropagation() // stop event bubbling
});
```

### 2. Event Delegation

Instead of attaching listeners to each element, attach one to a parent:

```js
// WITHOUT delegation (bad for dynamic elements)
document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("click", () => {
    console.log("Item clicked");
  });
});

// WITH delegation (single listener, works for future elements)
document.querySelector("#list-container").addEventListener("click", (e) => {
  // Check if the click target is (or is inside) an item
  const item = e.target.closest(".item");
  if (item) {
    console.log(`Item clicked: ${item.textContent}`);
    console.log(`Data-id: ${item.dataset.id}`);
  }
});

// Practical example: clicking items in a dynamic list
document.querySelector("#todo-list").addEventListener("click", (e) => {
  if (e.target.matches(".delete-btn")) {
    e.target.closest("li").remove();
  } else if (e.target.matches(".edit-btn")) {
    const text = e.target.closest("li").querySelector(".text");
    text.contentEditable = true;
    text.focus();
  }
});
```

### 3. Forms & Validation

```js
// HTML form
<form id="quiz-form">
  <label for="name">Your Name:</label>
  <input type="text" id="name" name="username" required minlength="2">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="difficulty">Difficulty:</label>
  <select id="difficulty" name="difficulty">
    <option value="easy">Easy</option>
    <option value="medium">Medium</option>
    <option value="hard">Hard</option>
  </select>

  <button type="submit">Start Quiz</button>
</form>

<div id="error-messages" style="color: red;"></div>
```

```js
// JavaScript form handling
const form = document.querySelector("#quiz-form");
const errorDiv = document.querySelector("#error-messages");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop page reload

  // Clear previous errors
  errorDiv.textContent = "";

  // Get form values
  const name = form.elements.username.value.trim();
  const email = form.elements.email.value.trim();
  const difficulty = form.elements.difficulty.value;

  // Validation
  const errors = [];

  if (!name) {
    errors.push("Name is required.");
  } else if (name.length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  if (!email) {
    errors.push("Email is required.");
  } else if (!email.includes("@")) {
    errors.push("Please enter a valid email.");
  }

  if (errors.length > 0) {
    // Show errors
    errorDiv.innerHTML = errors.map(err => `<p>${err}</p>`).join("");
    return;
  }

  // If valid, start the quiz
  console.log("Starting quiz for:", { name, email, difficulty });
  startQuiz(name, difficulty);
});

// Real-time input validation
document.querySelector("#email").addEventListener("input", (e) => {
  const email = e.target.value;
  if (email.includes("@")) {
    e.target.style.borderColor = "green";
  } else {
    e.target.style.borderColor = email.length > 0 ? "red" : "";
  }
});

// FormData API (alternative)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const entries = Object.fromEntries(data.entries());
  console.log(entries);
});
```

### 4. localStorage

```js
// localStorage is persistent across browser sessions
// sessionStorage is cleared when the tab closes

// Storing data
localStorage.setItem("username", "Alice");
localStorage.setItem("highScore", "95");

// Reading data
const name = localStorage.getItem("username");  // "Alice"
const score = localStorage.getItem("highScore"); // "95"
const nothing = localStorage.getItem("nonexistent"); // null

// Removing
localStorage.removeItem("highScore");
// localStorage.clear(); // removes ALL keys

// localStorage only stores strings — use JSON for complex data
const quizHistory = [
  { date: "2026-07-11", score: 8, total: 10 },
  { date: "2026-07-15", score: 9, total: 10 }
];

// Save — convert to JSON string
localStorage.setItem("quizHistory", JSON.stringify(quizHistory));

// Load — parse back to object/array
const saved = localStorage.getItem("quizHistory");
const history = saved ? JSON.parse(saved) : [];

console.log(history[0].score); // 8

// Pattern: persist user preferences
function savePreferences(prefs) {
  localStorage.setItem("quizPrefs", JSON.stringify(prefs));
}

function loadPreferences() {
  const saved = localStorage.getItem("quizPrefs");
  return saved ? JSON.parse(saved) : { theme: "light", difficulty: "medium" };
}

// Usage
let prefs = loadPreferences();
applyTheme(prefs.theme);
```

---

## Project: Complete and Improve Quiz/Theme-Switcher

### Activity 1: Add Start Form with localStorage (25 min)

Add a start screen to the quiz that collects user info and remembers it:

```html
<!-- Add to index.html before quiz-container -->
<div id="start-screen">
  <h2>Welcome to the JavaScript Quiz</h2>
  <form id="start-form">
    <div class="form-group">
      <label for="player-name">Your Name:</label>
      <input type="text" id="player-name" name="playerName" required minlength="2"
             placeholder="Enter your name">
    </div>

    <div class="form-group">
      <label for="player-email">Email (optional):</label>
      <input type="email" id="player-email" name="playerEmail"
             placeholder="your@email.com">
    </div>

    <div class="form-group">
      <label for="difficulty-select">Difficulty:</label>
      <select id="difficulty-select" name="difficulty">
        <option value="easy">Easy (10 questions)</option>
        <option value="medium">Medium (15 questions)</option>
        <option value="hard">Hard (20 questions)</option>
      </select>
    </div>

    <button type="submit">Start Quiz</button>
  </form>

  <div id="history-section" style="display: none;">
    <h3>Your Previous Results</h3>
    <ul id="history-list"></ul>
  </div>
</div>
```

```js
// Enhanced quiz initialization with localStorage

function loadHistory() {
  const saved = localStorage.getItem("quizHistory");
  return saved ? JSON.parse(saved) : [];
}

function saveToHistory(entry) {
  const history = loadHistory();
  history.push(entry);
  localStorage.setItem("quizHistory", JSON.stringify(history));
}

function displayHistory() {
  const history = loadHistory();
  const section = document.querySelector("#history-section");
  const list = document.querySelector("#history-list");

  if (history.length === 0) return;

  section.style.display = "block";
  list.innerHTML = "";

  // Show last 5 results (most recent first)
  const recent = [...history].reverse().slice(0, 5);

  for (const entry of recent) {
    const li = document.createElement("li");
    li.textContent = `${entry.date} — ${entry.name}: ${entry.score}/${entry.total} (${entry.difficulty})`;
    list.appendChild(li);
  }
}

// Load saved preferences on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("playerName");
  const savedDifficulty = localStorage.getItem("preferredDifficulty");

  if (savedName) {
    document.querySelector("#player-name").value = savedName;
  }
  if (savedDifficulty) {
    document.querySelector("#difficulty-select").value = savedDifficulty;
  }

  displayHistory();
});

// Handle form submission
document.querySelector("#start-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#player-name").value.trim();
  const email = document.querySelector("#player-email").value.trim();
  const difficulty = document.querySelector("#difficulty-select").value;

  // Validate
  if (!name || name.length < 2) {
    alert("Please enter a valid name (at least 2 characters).");
    return;
  }

  // Save preferences
  localStorage.setItem("playerName", name);
  localStorage.setItem("preferredDifficulty", difficulty);

  // Start the quiz
  startQuiz(name, difficulty);
});

// Call startQuiz when quiz completes to save the result
function completeQuiz(score, total) {
  const name = localStorage.getItem("playerName") || "Anonymous";
  const difficulty = localStorage.getItem("preferredDifficulty") || "medium";

  const entry = {
    name,
    score,
    total,
    difficulty,
    date: new Date().toISOString().split("T")[0]
  };

  saveToHistory(entry);
  showResults(score, total);
}
```

### Activity 2: Add Keyboard Navigation (15 min)

Enhance the quiz with keyboard support using event delegation:

```js
// Keyboard navigation for quiz
document.addEventListener("keydown", (e) => {
  const quizVisible = document.querySelector("#quiz-container").style.display !== "none";
  if (!quizVisible) return;

  // Number keys 1-4 to select options
  const optionNum = parseInt(e.key);
  if (optionNum >= 1 && optionNum <= 4) {
    const options = document.querySelectorAll(".option");
    if (options[optionNum - 1] && !options[optionNum - 1].disabled) {
      options[optionNum - 1].click();
    }
  }

  // Enter to submit
  if (e.key === "Enter") {
    const submitBtn = document.querySelector("#submit-btn");
    if (submitBtn.style.display !== "none" && !submitBtn.disabled) {
      submitBtn.click();
    }
  }
});
```

### Activity 3: Form Validation Feedback (15 min)

Improve the theme-switcher with a settings form:

```html
<!-- Settings panel for theme-switcher -->
<div class="settings-panel">
  <h2>Settings</h2>
  <form id="settings-form">
    <div class="form-group">
      <label for="bg-color">Background Color:</label>
      <input type="color" id="bg-color" value="#ffffff">
    </div>

    <div class="form-group">
      <label for="font-size">Font Size:</label>
      <input type="range" id="font-size" min="12" max="24" value="16">
      <span id="font-size-value">16px</span>
    </div>

    <div class="form-group">
      <label for="accent-color">Accent Color:</label>
      <select id="accent-color">
        <option value="#667eea">Blue</option>
        <option value="#e65c00">Orange</option>
        <option value="#2ecc71">Green</option>
        <option value="#e74c3c">Red</option>
      </select>
    </div>

    <div class="form-group">
      <label>
        <input type="checkbox" id="dark-mode"> Enable Dark Mode
      </label>
    </div>

    <button type="submit">Save Settings</button>
    <button type="reset">Reset to Defaults</button>
  </form>
</div>
```

```js
// Settings with real-time preview + localStorage persistence

const settingsForm = document.querySelector("#settings-form");
const bgColorInput = document.querySelector("#bg-color");
const fontSizeInput = document.querySelector("#font-size");
const fontSizeDisplay = document.querySelector("#font-size-value");
const accentColorInput = document.querySelector("#accent-color");
const darkModeInput = document.querySelector("#dark-mode");

// Load saved settings
function loadSettings() {
  const saved = localStorage.getItem("themeSwitcherSettings");
  return saved ? JSON.parse(saved) : {
    bgColor: "#ffffff",
    fontSize: 16,
    accentColor: "#667eea",
    darkMode: false
  };
}

// Apply settings to page
function applySettings(settings) {
  document.body.style.backgroundColor = settings.bgColor;
  document.body.style.fontSize = `${settings.fontSize}px`;
  document.documentElement.style.setProperty("--primary-color", settings.accentColor);

  if (settings.darkMode) {
    document.body.style.color = "#e0e0e0";
    document.body.style.backgroundColor = "#1a1a2e";
  }
}

// Save settings
function saveSettings(settings) {
  localStorage.setItem("themeSwitcherSettings", JSON.stringify(settings));
}

// Initialize from saved settings
const savedSettings = loadSettings();
applySettings(savedSettings);

// Populate form fields
bgColorInput.value = savedSettings.bgColor;
fontSizeInput.value = savedSettings.fontSize;
fontSizeDisplay.textContent = `${savedSettings.fontSize}px`;
accentColorInput.value = savedSettings.accentColor;
darkModeInput.checked = savedSettings.darkMode;

// Real-time preview
bgColorInput.addEventListener("input", (e) => {
  document.body.style.backgroundColor = e.target.value;
});

fontSizeInput.addEventListener("input", (e) => {
  const size = e.target.value;
  fontSizeDisplay.textContent = `${size}px`;
  document.body.style.fontSize = `${size}px`;
});

// Form submission
settingsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const settings = {
    bgColor: bgColorInput.value,
    fontSize: parseInt(fontSizeInput.value),
    accentColor: accentColorInput.value,
    darkMode: darkModeInput.checked
  };

  saveSettings(settings);
  applySettings(settings);
  alert("Settings saved!");
});

// Reset
settingsForm.addEventListener("reset", () => {
  // Clear saved settings
  localStorage.removeItem("themeSwitcherSettings");
  // Reload page to apply defaults
  location.reload();
});
```

---

## AI Prompts for Debugging

### Web Assistant (ChatGPT, Claude, Gemini)

Paste the broken code into the chat and ask what's wrong.

### Event Listeners Not Working
```
My event listener isn't firing. Here's my code:

<button id="myBtn">Click me</button>

const btn = document.querySelector("#myBtn");
btn.addEventListener("click", myFunction());
function myFunction() {
  console.log("Clicked!");
}

What's wrong and why?
```

### Form Submission Reloads Page
```
When I submit my form, the page reloads instead of running my JavaScript. Here's my code:

<form id="myForm">
  <input type="text" name="name">
  <button type="submit">Submit</button>
</form>

const form = document.querySelector("#myForm");
form.addEventListener("submit", validateForm);
function validateForm() {
  console.log("Validating...");
}

How do I prevent the page reload?
```

### localStorage Not Working
```
I'm trying to save an object to localStorage but when I retrieve it, I get "[object Object]". What am I doing wrong?

const user = { name: "Alice", score: 100 };
localStorage.setItem("user", user);
const saved = localStorage.getItem("user");
console.log(saved);
```

### Event Delegation Bug
```
I have a list where I dynamically add items, but click events only work on items that existed when the page loaded. New items don't respond. How do I fix this?

const list = document.querySelector("#list");
document.querySelector("#add-btn").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "New item";
  list.appendChild(li);
});

document.querySelectorAll("#list li").forEach(li => {
  li.addEventListener("click", () => li.remove());
});
```

### General Debugging Strategy
```
Here's my JavaScript. It has a bug and I can't figure out why it's not working. Can you walk me through how you would debug this step by step? What console.log statements should I add?

[Paste your code here]
```

### CLI / IDE Agent (OpenCode, Claude Code, Copilot)

Run from your project directory:

**Event Listeners Not Working:**
```
Read script.js. The button's click event listener isn't firing. Find the bug and fix it. Check for: correct selector, function reference vs function call, and DOM readiness.
```

**Form Submission Reloads Page:**
```
Read script.js. When the form is submitted, the page reloads instead of running validateForm. Fix it to prevent the default behaviour and run validation.
```

**localStorage Not Working:**
```
Read script.js. Saving an object to localStorage returns "[object Object]" instead of JSON. Fix the serialization and show the corrected code.
```

**Event Delegation Bug:**
```
Read script.js. Click events on dynamically added list items don't fire — only the original items work. Fix with event delegation on the parent <ul>.
```

**General Debugging:**
```
Read script.js — it has a bug. Walk me through your debugging process step by step. What console.log statements would you add? Find and fix the issue.
```

---

## Homework

1. **Complete the start form** — Add a form to your quiz that collects a player name and difficulty level before starting
2. **Persist with localStorage** — Save the player's name, high score, and settings; display historical results
3. **Add keyboard navigation** — Allow users to select answers with number keys (1-4) and submit with Enter
4. **Form validation** — Add real-time validation feedback (green/red borders, error messages) to your quiz form
5. **Event delegation** — Refactor at least one part of your code to use event delegation instead of individual listeners
6. **Debug with AI** — Intentionally introduce a bug (e.g., wrong variable name, missing event parameter) and use AI to find and fix it. Write down the AI's debugging steps.

---

## Resources

- [MDN: Events Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [MDN: addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN: Event Delegation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation)
- [MDN: Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [MDN: KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
