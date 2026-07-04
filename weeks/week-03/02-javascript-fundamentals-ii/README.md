# Week 3 — Session 2: JavaScript Fundamentals II

**Date:** Wednesday, 15 July 2026  
**Duration:** 2 hours  
**Instructor:** Dr Iyad  
**Format:** Hands-on coding workshop with AI-assisted exercises

---

## Session Objectives

By the end of this session, learners will be able to:
- Create and manipulate arrays using common methods (push, pop, map, filter, reduce)
- Build and access objects with dot and bracket notation
- Use `for`, `for...of`, `for...in`, and `while` loops effectively
- Select DOM elements with `querySelector` and `querySelectorAll`
- Modify DOM content, attributes, and styles dynamically
- Continue building the quiz/theme-switcher with interactive features

---

## Agenda (120 min)

| Time | Activity | Description |
|------|----------|-------------|
| 0:00–0:10 | Warm-Up: Recap & Console Review | Quick review of variables, functions from Session 1; open browser console |
| 0:10–0:35 | Arrays & Objects | Creating, reading, updating, and iterating arrays/objects; common methods |
| 0:35–0:50 | Loops | `for`, `for...of`, `for...in`, `while`, `break`, `continue` |
| 0:50–1:00 | Break | |
| 1:00–1:30 | DOM Manipulation | Selecting elements, changing text/HTML/styles/attributes, creating elements |
| 1:30–1:50 | Project: Continue Quiz/Theme-Switcher | Add dynamic features using arrays, objects, loops, and DOM methods |
| 1:50–2:00 | Wrap-Up & Homework | Recap, Q&A, preview of Week 4 |

---

## Key Concepts

### 1. Arrays

```js
// Creating arrays
const fruits = ["apple", "banana", "cherry"];
const numbers = new Array(1, 2, 3);
const mixed = ["text", 42, true, null];

// Accessing & modifying
console.log(fruits[0]);        // "apple"
fruits[1] = "blueberry";       // modify
console.log(fruits.length);    // 3

// Common methods
fruits.push("date");           // add to end     → ["apple","blueberry","cherry","date"]
fruits.pop();                  // remove from end → ["apple","blueberry","cherry"]
fruits.unshift("apricot");     // add to start   → ["apricot","apple","blueberry","cherry"]
fruits.shift();                // remove from start → ["apple","blueberry","cherry"]

// Finding elements
fruits.indexOf("banana");      // -1 (not found)
fruits.includes("apple");      // true
fruits.find(f => f.startsWith("b")); // "blueberry"

// Transforming (these return NEW arrays — they don't mutate)
const uppercased = fruits.map(f => f.toUpperCase());
const longFruits = fruits.filter(f => f.length > 5);
const sorted = [...fruits].sort();
const reversed = [...fruits].reverse();

// reduce — accumulator pattern
const sum = [1, 2, 3, 4, 5].reduce((total, num) => total + num, 0);
// 15

// Spread operator
const moreFruits = [...fruits, "elderberry", "fig"];

// Destructuring
const [first, second, ...rest] = fruits;
```

### 2. Objects

```js
// Creating objects
const person = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25,
  hobbies: ["reading", "coding", "hiking"],
  address: {
    city: "New York",
    zip: "10001"
  },
  greet() {
    return `Hi, I'm ${this.firstName}!`;
  }
};

// Accessing properties
console.log(person.firstName);       // "Alice"  (dot notation)
console.log(person["lastName"]);     // "Smith"  (bracket notation)

const key = "age";
console.log(person[key]);            // 25  (dynamic keys)

// Modifying
person.age = 26;
person["email"] = "alice@example.com"; // adding new property
delete person.hobbies;                 // removing property

// Object methods
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

// Destructuring
const { firstName, age, address: { city } } = person;

// Arrays of objects (common pattern)
const questions = [
  { id: 1, text: "What is 2+2?", answer: 4 },
  { id: 2, text: "What is the capital of France?", answer: "Paris" }
];
```

### 3. Loops

```js
// for loop
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

// for...of (arrays, strings, iterables)
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// for...in (object keys)
const user = { name: "Alice", role: "admin", age: 25 };
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

// while loop
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

// do...while (runs at least once)
let x = 0;
do {
  console.log(x);
  x++;
} while (x < 3);

// break and continue
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // skip 3
  if (i === 7) break;    // stop at 7
  console.log(i);
}
// Output: 0, 1, 2, 4, 5, 6
```

### 4. DOM Manipulation

```js
// Selecting elements
const header = document.querySelector("h1");
const container = document.querySelector(".container");
const allOptions = document.querySelectorAll(".option");
const firstOption = document.getElementById("option-1");

// Traversing
const parent = element.parentElement;
const children = element.children;
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;

// Changing content
element.textContent = "New text";           // plain text (safe)
element.innerHTML = "<strong>HTML</strong>"; // parsed HTML (careful with user input)
element.innerText = "Visible text only";    // respects CSS display

// Changing styles
element.style.color = "red";
element.style.backgroundColor = "#f0f0f0";
element.style.display = "none";
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("selected");
element.classList.contains("active"); // true/false

// Changing attributes
element.setAttribute("disabled", true);
element.getAttribute("data-index");
element.removeAttribute("disabled");

// Creating & appending elements
const newDiv = document.createElement("div");
newDiv.textContent = "I'm new!";
newDiv.classList.add("box");
container.appendChild(newDiv);

// Event listeners (preview — full coverage in Week 4)
element.addEventListener("click", () => {
  console.log("Clicked!");
});

// Example: rendering a list from an array
const items = ["Apple", "Banana", "Cherry"];
const list = document.querySelector("#fruit-list");

// Clear existing
list.innerHTML = "";

// Populate with loop
for (const item of items) {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
}
```

---

## Project: Continue Quiz / Theme-Switcher

### Activity 1: Refactor Quiz with Arrays of Objects (15 min)

Replace the simple `questions` array from Session 1 with a richer data structure:

```js
const quizData = {
  title: "JavaScript Fundamentals",
  timePerQuestion: 30,
  categories: ["variables", "functions", "dom"],
  questions: [
    {
      id: 1,
      category: "variables",
      question: "Which keyword creates a variable that cannot be reassigned?",
      options: ["let", "const", "var", "static"],
      correctAnswer: 1,
      explanation: "const creates an immutable binding that cannot be reassigned."
    },
    {
      id: 2,
      category: "functions",
      question: "What is the output of: (a, b) => a + b ?",
      options: [
        "A function that adds two numbers",
        "Syntax error",
        "The sum of a and b",
        "undefined"
      ],
      correctAnswer: 0,
      explanation: "This is an arrow function expression that returns the sum of a and b."
    }
  ]
};
```

**Tasks:**
1. Update your `script.js` to use this `quizData` object structure
2. Use `for...of` to iterate and render questions
3. Display the category label for each question
4. After answering, show the explanation

### Activity 2: Theme-Switcher with DOM Manipulation (25 min)

**Goal:** Build a theme-switcher alongside the quiz, or as an alternative project.

#### Starter HTML for Theme-Switcher

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Theme Switcher</title>
  <link rel="stylesheet" href="theme-style.css">
</head>
<body>
  <div class="app">
    <header>
      <h1>Theme Switcher</h1>
      <div class="theme-controls">
        <button class="theme-btn" data-theme="light">☀️ Light</button>
        <button class="theme-btn" data-theme="dark">🌙 Dark</button>
        <button class="theme-btn" data-theme="ocean">🌊 Ocean</button>
        <button class="theme-btn" data-theme="sunset">🌅 Sunset</button>
      </div>
    </header>

    <main>
      <section class="card">
        <h2>About This Demo</h2>
        <p>This page demonstrates DOM manipulation with JavaScript. Click a theme button above to change the entire page's appearance.</p>
      </section>

      <section class="card">
        <h2>Feature Cards</h2>
        <div class="card-grid" id="card-grid">
          <!-- Cards will be generated by JavaScript -->
        </div>
      </section>
    </main>
  </div>

  <script src="theme-switcher.js"></script>
</body>
</html>
```

#### Theme-Switcher JavaScript (`theme-switcher.js`)

```js
// Theme definitions (array of objects)
const themes = [
  {
    name: "light",
    colors: {
      bg: "#ffffff",
      text: "#333333",
      primary: "#667eea",
      cardBg: "#f8f9ff",
      border: "#e0e0e0"
    }
  },
  {
    name: "dark",
    colors: {
      bg: "#1a1a2e",
      text: "#e0e0e0",
      primary: "#bb86fc",
      cardBg: "#16213e",
      border: "#0f3460"
    }
  },
  {
    name: "ocean",
    colors: {
      bg: "#e8f4f8",
      text: "#023047",
      primary: "#0077b6",
      cardBg: "#caf0f8",
      border: "#90e0ef"
    }
  },
  {
    name: "sunset",
    colors: {
      bg: "#fff5eb",
      text: "#5c2a00",
      primary: "#e65c00",
      cardBg: "#ffedd5",
      border: "#fed7aa"
    }
  }
];

// Feature card data
const features = [
  { title: "DOM Manipulation", desc: "Change styles, content, and structure with JS." },
  { title: "Event Handling", desc: "Respond to clicks, hovers, and keyboard input." },
  { title: "Dynamic Styling", desc: "Apply CSS variables and class changes on the fly." }
];

// DOM references
const root = document.documentElement;
const themeButtons = document.querySelectorAll(".theme-btn");
const cardGrid = document.getElementById("card-grid");

// Function: apply theme
function applyTheme(themeName) {
  const theme = themes.find(t => t.name === themeName);
  if (!theme) return;

  // Set CSS custom properties
  root.style.setProperty("--bg-color", theme.colors.bg);
  root.style.setProperty("--text-color", theme.colors.text);
  root.style.setProperty("--primary-color", theme.colors.primary);
  root.style.setProperty("--card-bg", theme.colors.cardBg);
  root.style.setProperty("--border-color", theme.colors.border);

  // Update active button styling
  themeButtons.forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.theme === themeName) {
      btn.classList.add("active");
    }
  });

  // Log theme change (good for debugging)
  console.log(`Theme changed to: ${themeName}`);
}

// Function: render feature cards using a loop
function renderCards() {
  cardGrid.innerHTML = "";

  for (const feature of features) {
    const card = document.createElement("div");
    card.classList.add("feature-card");

    const title = document.createElement("h3");
    title.textContent = feature.title;

    const desc = document.createElement("p");
    desc.textContent = feature.desc;

    card.appendChild(title);
    card.appendChild(desc);
    cardGrid.appendChild(card);

    // Animate in with a small delay
    card.style.opacity = "0";
    setTimeout(() => {
      card.style.transition = "opacity 0.5s ease";
      card.style.opacity = "1";
    }, 100);
  }
}

// Attach event listeners to theme buttons
for (const btn of themeButtons) {
  btn.addEventListener("click", () => {
    applyTheme(btn.dataset.theme);
  });
}

// Initialize
renderCards();
applyTheme("light");
```

#### Theme-Switcher CSS (`theme-style.css`)

```css
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --primary-color: #667eea;
  --card-bg: #f8f9ff;
  --border-color: #e0e0e0;
  --transition: 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: var(--bg-color);
  color: var(--text-color);
  transition: background var(--transition), color var(--transition);
  min-height: 100vh;
}

.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.theme-controls {
  display: flex;
  gap: 0.5rem;
}

.theme-btn {
  padding: 0.5rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  background: var(--card-bg);
  color: var(--text-color);
  cursor: pointer;
  transition: all var(--transition);
}

.theme-btn:hover {
  border-color: var(--primary-color);
}

.theme-btn.active {
  border-color: var(--primary-color);
  background: var(--primary-color);
  color: white;
}

.card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: background var(--transition), border-color var(--transition);
}

.card h2 {
  margin-bottom: 0.5rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.feature-card {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  transition: background var(--transition), border-color var(--transition);
}

.feature-card h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}
```

---

## Activity Guide

### Activity 1: Array & Object Practice (15 min)

Open the console and work through these:

1. Create an array of your top 5 movies
2. Use `map` to create an array of movie titles in ALL CAPS
3. Use `filter` to keep only movies with titles longer than 5 characters
4. Create an object representing a movie with properties: title, year, director, ratings (array)
5. Create an array of 3 movie objects and use `for...of` to print each title

**AI Prompt (Web Assistant):** paste your data:
```
I have an array of movie objects with title, year, and rating. I want to:
1. Sort by rating (highest first)
2. Get only titles of movies released after 2020
3. Find the average rating

Here's my data: [ { title: "Inception", year: 2010, rating: 8.8 }, ... ]

Show me how to do all three.
```

**AI Prompt (CLI / IDE Agent):**
```
Read the array data in script.js. Sort by rating descending, filter to titles after 2020, and calculate the average rating. Add the code to the file and show what you did.
```

### Activity 2: DOM Manipulation Practice (15 min)

1. Create a simple HTML page with a `<ul id="list">` and an empty `<div id="output">`
2. In the script, create an array of 5 names
3. Loop through the array and add each name as an `<li>` inside the `<ul>`
4. Add a click listener to each `<li>` that displays the clicked name in the `<div>`

**AI Prompt (Web Assistant):** paste your code:
```
I'm trying to add click listeners to list items that I create dynamically with a loop. Here's my code — it always logs the last item. What's wrong and how do I fix it?

for (const name of names) {
  const li = document.createElement("li");
  li.textContent = name;
  li.addEventListener("click", () => {
    output.textContent = name;
  });
  list.appendChild(li);
}
```

**AI Prompt (CLI / IDE Agent):**
```
Read script.js. The click listeners on dynamically created list items always log the last item. Find the bug, fix it, and explain what was wrong with the closure behaviour. Show the diff.
```

---

## AI Prompts for JavaScript Help

### Web Assistant (ChatGPT, Claude, Gemini)

**Arrays & Objects:**
```
Explain the difference between .map() and .forEach() with real examples. When would I use one over the other?
```

```
I need to group an array of objects by a property. For example, given an array of people with city properties, return an object where keys are city names and values are arrays of people from that city.
```

**Loops:**
```
What's the difference between for...of and for...in? Show me examples of when each would be appropriate.
```

**DOM Manipulation:**
```
What's the best way to create a large number of DOM elements efficiently? Should I use innerHTML, createElement, or something else?
```

**Debugging:**
```
This code should change the background color when I click the button, but nothing happens. What's wrong?

const btn = document.querySelector("button");
const body = document.querySelector("body");
btn.addEventListener("click", changeBackground());
function changeBackground() {
  body.style.backgroundColor = "blue";
}
```

*(Hint: the issue is passing a function call instead of a function reference)*

### CLI / IDE Agent (OpenCode, Claude Code, Copilot)

**Arrays & Objects:**
```
Explain the difference between .map() and .forEach() with real examples. When would I use one over the other?
```

```
Read the array data in script.js. Group the objects by a specified property and create a new data structure where keys are group names and values are arrays of matching items.
```

**Loops:**
```
Explain the difference between for...of and for...in with examples showing when each is appropriate.
```

**DOM Manipulation:**
```
Read script.js. The DOM creation is slow when adding many elements. Refactor it to use the most efficient approach (DocumentFragment, innerHTML, or createElement). Show the diff.
```

**Debugging:**
```
Read script.js. The button click should change the background colour to blue, but nothing happens. Find the bug, fix it, and explain what was wrong. Show the diff.
```

---

## Homework

1. **Extend the quiz** — Refactor your quiz to use the `quizData` object format with categories and explanations
2. **Add dynamic features** — Add at least 3 of these to your quiz or theme-switcher:
   - A progress bar that updates as the user answers questions
   - A question counter showing "Question 3 / 10"
   - Cards rendered from an array of objects (like the theme-switcher feature cards)
   - A shuffled question order using `Math.random()` and `.sort()`
3. **Build one from scratch** — Choose either the quiz or theme-switcher, delete your script, and rebuild it from scratch using arrays, objects, loops, and DOM methods
4. **AI reflection** — Ask an AI tool: "What is the difference between `element.textContent` and `element.innerHTML`? When should I use each?" Write down the answer in your notes

---

## Resources

- [MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [MDN: Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [MDN: Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN: querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN: classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [JavaScript Event Loop Visualizer](https://www.jsv9000.app/)
