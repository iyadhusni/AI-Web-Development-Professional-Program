# Week 5, Session 1: Intermediate JS & Mini Project II

- **Date:** Saturday, 25 July 2026
- **Duration:** 3 hours
- **Instructor:** Dr Iyad
- **Topics:** Weather/To-Do app completion, API integration, code refactoring with AI

---

## Objectives

By the end of this session, students will be able to:

- Integrate a third-party API (weather) into a vanilla JS application
- Complete a functional To-Do app with CRUD operations and localStorage persistence
- Refactor existing code with AI assistance for cleaner architecture
- Debug common JavaScript issues using browser devtools and AI analysis
- Structure a multi-feature frontend project with separate concerns

---

## Agenda (180 minutes)

| Time | Activity | Duration |
|------|----------|----------|
| 0:00 – 0:20 | Warm-up: Review Mini Project I, common pain points | 20 min |
| 0:20 – 0:50 | API Integration: Fetching weather data, handling promises | 30 min |
| 0:50 – 1:30 | Building To-Do App: CRUD, localStorage, DOM rendering | 40 min |
| 1:30 – 1:40 | Break | 10 min |
| 1:40 – 2:20 | Code Refactoring with AI: Extract functions, clean up | 40 min |
| 2:20 – 2:55 | Debugging Strategies: Console, breakpoints, AI error analysis | 35 min |
| 2:55 – 3:00 | Wrap-up & Homework | 5 min |

---

## Activity Guide: Completing the Weather & To-Do Apps

### Part 1: Weather App — API Integration (20 min – 50 min)

**Starter Code** (`weather-app/`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Weather App</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; display: grid; place-items: center; min-height: 100vh; background: #f0f4f8; }
    .card { background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1); width: 90%; max-width: 400px; }
    h1 { font-size: 1.5rem; margin-bottom: 1rem; text-align: center; }
    input, button { width: 100%; padding: 0.6rem; margin: 0.3rem 0; border-radius: 0.5rem; border: 1px solid #ccc; }
    button { background: #3b82f6; color: white; font-weight: 600; cursor: pointer; border: none; }
    button:hover { background: #2563eb; }
    .weather-result { margin-top: 1rem; text-align: center; }
    .weather-result img { width: 80px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Weather Check</h1>
    <input type="text" id="cityInput" placeholder="Enter city name" />
    <button id="searchBtn">Get Weather</button>
    <div class="weather-result" id="weatherResult"></div>
  </div>
  <script src="app.js"></script>
</body>
</html>
```

**1. Fetch weather data from OpenWeatherMap**

Use the free API at `https://api.openweathermap.org/data/2.5/weather`. Students will need a free API key (register at openweathermap.org).

```js
// app.js — Step 1: Fetch weather
const API_KEY = 'YOUR_API_KEY'; // replace with your key

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherResult = document.getElementById('weatherResult');

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`City not found (${response.status})`);
  }
  return response.json();
}
```

**2. Display weather data**

```js
function displayWeather(data) {
  const { name, main, weather, wind } = data;
  weatherResult.innerHTML = `
    <h2>${name}</h2>
    <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}" />
    <p><strong>${Math.round(main.temp)}°C</strong> — ${weather[0].description}</p>
    <p>Humidity: ${main.humidity}% | Wind: ${wind.speed} m/s</p>
  `;
}
```

**3. Wire up the button**

```js
searchBtn.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (!city) return;
  weatherResult.innerHTML = '<p>Loading...</p>';
  try {
    const data = await getWeather(city);
    displayWeather(data);
  } catch (err) {
    weatherResult.innerHTML = `<p style="color:red">${err.message}</p>`;
  }
});

// Allow Enter key
cityInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') searchBtn.click();
});
```

**4. Add loading state & error handling**

Wrap fetch in try/catch. Show a spinner or "Loading..." text. Catch network errors separately from API errors.

---

### Part 2: To-Do App — CRUD + localStorage (50 min – 1:30)

**Starter Code** (`todo-app/`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>To-Do App</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; display: grid; place-items: center; min-height: 100vh; background: #f9fafb; }
    .container { background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1); width: 90%; max-width: 500px; }
    h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
    .todo-form { display: flex; gap: 0.5rem; margin: 1rem 0; }
    .todo-form input { flex: 1; padding: 0.6rem; border: 1px solid #ccc; border-radius: 0.5rem; }
    .todo-form button { padding: 0.6rem 1.2rem; background: #10b981; color: white; border: none; border-radius: 0.5rem; cursor: pointer; }
    .todo-form button:hover { background: #059669; }
    .todo-item { display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 0; border-bottom: 1px solid #eee; }
    .todo-item.completed span { text-decoration: line-through; color: #9ca3af; }
    .todo-item input[type="checkbox"] { margin-right: 0.5rem; }
    .todo-item .delete-btn { background: #ef4444; color: white; border: none; border-radius: 0.3rem; padding: 0.3rem 0.6rem; cursor: pointer; }
    .filters { display: flex; gap: 0.5rem; margin: 1rem 0; }
    .filters button { flex: 1; padding: 0.4rem; border: 1px solid #ccc; border-radius: 0.3rem; cursor: pointer; background: white; }
    .filters button.active { background: #3b82f6; color: white; border-color: #3b82f6; }
  </style>
</head>
<body>
  <div class="container">
    <h1>To-Do List</h1>
    <div class="todo-form">
      <input type="text" id="todoInput" placeholder="Add a new task..." />
      <button id="addBtn">Add</button>
    </div>
    <div class="filters">
      <button class="active" data-filter="all">All</button>
      <button data-filter="active">Active</button>
      <button data-filter="completed">Completed</button>
    </div>
    <div id="todoList"></div>
    <p id="todoCount">0 items left</p>
  </div>
  <script src="app.js"></script>
</body>
</html>
```

**Core JS — CRUD Operations:**

```js
// todo-app/app.js
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');
const filterBtns = document.querySelectorAll('.filters button');

// === CRUD ===

// Create
function addTodo(text) {
  const todo = {
    id: Date.now().toString(),
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };
  todos.push(todo);
  save();
}

// Read (filtered)
function getFilteredTodos() {
  if (currentFilter === 'active') return todos.filter(t => !t.completed);
  if (currentFilter === 'completed') return todos.filter(t => t.completed);
  return todos;
}

// Update — toggle completed
function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    save();
  }
}

// Delete
function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  save();
}

// Persist
function save() {
  localStorage.setItem('todos', JSON.stringify(todos));
  render();
}

// === Render ===
function render() {
  const filtered = getFilteredTodos();
  todoList.innerHTML = filtered.map(todo => `
    <div class="todo-item ${todo.completed ? 'completed' : ''}">
      <label>
        <input type="checkbox" ${todo.completed ? 'checked' : ''} data-id="${todo.id}" />
        <span>${escapeHtml(todo.text)}</span>
      </label>
      <button class="delete-btn" data-id="${todo.id}">✕</button>
    </div>
  `).join('');
  todoCount.textContent = `${todos.filter(t => !t.completed).length} items left`;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// === Event Listeners ===
addBtn.addEventListener('click', () => {
  const text = todoInput.value.trim();
  if (text) {
    addTodo(text);
    todoInput.value = '';
    todoInput.focus();
  }
});

todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addBtn.click();
});

todoList.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (!id) return;
  if (e.target.matches('input[type="checkbox"]')) toggleTodo(id);
  if (e.target.matches('.delete-btn')) deleteTodo(id);
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    render();
  });
});

// Initial render
render();
```

**Extra feature ideas (stretch goals):**
- Edit-in-place (double-click text to edit)
- Drag-and-drop reordering
- Due dates or priority levels
- Dark mode toggle

---

### Part 3: Code Refactoring with AI (1:40 – 2:20)

**Strategy:** Take the working To-Do app and refactor it into a cleaner architecture.

**Suggested refactoring steps:**

1. **Separate concerns** — split into `store.js` (data layer), `ui.js` (rendering), `app.js` (glue)
2. **Use a simple state management pattern** — single `state` object, notify subscribers on change
3. **Extract pure functions** — keep business logic testable and free of DOM calls

**Refactored architecture example:**

```js
// store.js — data layer
function createStore(initialState) {
  let state = initialState;
  const listeners = [];

  return {
    getState() { return state; },
    setState(partial) {
      state = { ...state, ...partial };
      listeners.forEach(fn => fn(state));
    },
    subscribe(fn) {
      listeners.push(fn);
      return () => listeners.splice(listeners.indexOf(fn), 1);
    },
  };
}

// ui.js — rendering
function renderTodoList(todos, container) {
  container.innerHTML = todos.map(t => `
    <div class="todo-item ${t.completed ? 'completed' : ''}" data-id="${t.id}">
      <input type="checkbox" ${t.completed ? 'checked' : ''} />
      <span>${escapeHtml(t.text)}</span>
      <button class="delete-btn">✕</button>
    </div>
  `).join('');
}

// app.js — orchestration
const store = createStore({ todos: [], filter: 'all' });
store.subscribe(state => {
  const filtered = applyFilter(state.todos, state.filter);
  renderTodoList(filtered, todoList);
  updateCount(state.todos);
});
```

**Why refactor with AI?** — AI tools excel at:
- Extracting functions from monolithic code
- Suggesting naming improvements
- Converting to different patterns (e.g., MVC, pub/sub)
- Generating JSDoc or inline documentation
- Identifying unused code or dead paths

---

## AI Prompts for Refactoring & Adding Features

### Web Assistant (ChatGPT, Claude, Gemini)

**Refactoring** — paste your full code:
```
I have a monolithic JavaScript to-do app in a single file. Here's the code:
[PASTE CODE]

Please help me refactor it into three files:
1. store.js — manages state and localStorage persistence
2. ui.js — handles DOM rendering and event binding
3. app.js — initializes the app and wires everything together

Use a simple pub/sub pattern for state changes. Keep all DOM manipulation
in ui.js. Make sure the app still works identically after refactoring.
```

```
Analyze this weather app code and suggest 3 improvements for error handling
and edge cases:
[PASTE CODE]

Consider: network failures, empty input, special characters in city names,
and API rate limiting. Show me the improved code.
```

```
I have a to-do app function that handles add, toggle, and delete all in one
event listener. Help me split it into separate, testable pure functions.
Maintain the same behavior.
```

**Feature Addition** — paste your code:
```
Add an "edit-in-place" feature to my to-do app. When a user double-clicks
a todo item text, it should turn into an input field. Pressing Enter or
blurring saves the edit. Pressing Escape cancels.

Here's my current code:
[PASTE CODE]
```

```
Add drag-and-drop reordering to my todo list. Use the HTML5 Drag and Drop
API. Users should be able to drag todo items to reorder them. Persist the
new order to localStorage.

Here's my current render function:
[PASTE RENDER CODE]
```

### CLI / IDE Agent (OpenCode, Claude Code, Copilot)

**Refactoring:**
```
Read app.js in this project — it's a monolithic to-do app. Refactor it into three files:
1. store.js — manages state and localStorage persistence
2. ui.js — handles DOM rendering and event binding
3. app.js — initializes and wires everything together

Use a simple pub/sub pattern for state changes. Keep DOM manipulation in ui.js. Verify the app still works identically after refactoring. Create the new files and update the HTML.
```

```
Read the weather app code in this project. Analyse and suggest 3 specific improvements for error handling and edge cases: network failures, empty input, special characters, and API rate limiting. Apply the changes and show the diff.
```

```
Read script.js. Find the monolithic event handler that handles add, toggle, and delete. Split it into separate pure functions while maintaining the same behaviour. Show the diff.
```

**Feature Addition:**
```
Read script.js and the HTML file. Add an edit-in-place feature: double-clicking a todo item text turns it into an input field. Enter/blur saves, Escape cancels. Modify the files and show the diff.
```

```
Read the todo app files. Add drag-and-drop reordering using the HTML5 Drag and Drop API. Persist the new order to localStorage. Show the changes.
```

---

## Debugging Strategies

### 1. Browser DevTools

| Tool | Use Case |
|------|----------|
| Console | `console.log()`, `console.error()`, `console.table()` |
| Sources Tab | Set breakpoints, step through code |
| Network Tab | Inspect API requests/responses, status codes |
| Application Tab | View localStorage, sessionStorage, cookies |
| Elements Tab | Inspect DOM structure, computed styles |

### 2. AI-Assisted Debugging

**Prompt template for error messages:**

```
I'm getting this error in my JavaScript app:
[PASTE ERROR MESSAGE]

Here's the relevant code:
[PASTE CODE]

What's causing this error and how do I fix it?
```

**Prompt template for unexpected behavior:**

```
My to-do app filter isn't working correctly. When I click "Active",
it still shows completed items. Here's my filter logic:
[PASTE CODE]

Expected: clicking "Active" shows only uncompleted items.
Actual: all items are shown regardless of status.
```

**Prompt template for logic bugs:**

```
My weather app works but the temperature shows "undefined°C" for some cities.
Here's my display function:
[PASTE CODE]

I checked the API response and "main.temp" exists. What am I missing?
```

### 3. Common Pitfalls

| Issue | Likely Cause | Fix |
|-------|-------------|-----|
| `Cannot read property of undefined` | API response shape differs from expected | Log the full response first |
| `fetch` not working | CORS, wrong URL, missing API key | Check Network tab |
| localStorage not persisting | Data not JSON-serializable | `JSON.stringify()` before saving |
| Event listener fires multiple times | Listeners attached in a loop | Use event delegation |
| State not updating | Direct mutation instead of copy | Use spread/`map`/`filter` to create new arrays |

---

## Homework

1. **Complete both apps** — Finish the Weather App and To-Do App so they run without errors.

2. **Add one extra feature** — Pick one:
   - Weather App: 5-day forecast using the OpenWeatherMap forecast API
   - Weather App: Save favorite cities and switch between them
   - To-Do App: Drag-and-drop reorder (HTML5 Drag & Drop API)
   - To-Do App: Due dates with visual indicators (overdue = red)

3. **Refactor with AI** — Use an AI assistant to refactor one of your apps into a multi-file structure (data layer, UI layer, app glue). Submit the refactored code.

4. **Read** — [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

5. **Prepare** — Install Git on your machine if you haven't already. We'll be using it next session.
