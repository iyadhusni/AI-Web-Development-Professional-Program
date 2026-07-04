# Week 4 — Session 2: Intermediate JS & Mini Project I

**Date:** Wednesday, 22 July 2026  
**Duration:** 2 hours  
**Instructor:** Dr Iyad  
**Format:** Project-based workshop with AI-simulated APIs

---

## Session Objectives

By the end of this session, learners will be able to:
- Understand synchronous vs asynchronous JavaScript
- Write promises and chain `.then()` / `.catch()` handlers
- Use `async` / `await` syntax for cleaner async code
- Make HTTP requests with the Fetch API
- Handle API errors gracefully
- Use AI to simulate API responses for development
- Build a functional weather or To-Do app

---

## Agenda (120 min)

| Time | Activity | Description |
|------|----------|-------------|
| 0:00–0:10 | Async Intro | Sync vs async, call stack, Web APIs, callback queue |
| 0:10–0:30 | Promises & Fetch | Promise lifecycle, fetch syntax, `.then()`, `.catch()`, `.finally()` |
| 0:30–0:45 | async / await | Converting promises to async/await, error handling with try/catch |
| 0:45–0:55 | Break | |
| 0:55–1:10 | AI-Simulated APIs | Prompt AI to generate mock API responses; use realistic data |
| 1:10–1:45 | Mini Project: Weather or To-Do App | Choose a project; build with starter code and AI assistance |
| 1:45–2:00 | Showcase & Wrap-Up | Quick demos, recap, preview of Week 5 |

---

## Key Concepts

### 1. Synchronous vs Asynchronous

```js
// Synchronous — runs line by line, blocking
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");
// Output: Step 1, Step 2, Step 3

// Asynchronous — non-blocking, continues while waiting
console.log("Step 1");

setTimeout(() => {
  console.log("Step 2 (after 1 second)");
}, 1000);

console.log("Step 3");
// Output: Step 1, Step 3, Step 2 (after 1 second)
```

### 2. Promises

A Promise represents a value that may be available now, later, or never.

```js
// Promise lifecycle: pending → fulfilled / rejected

// Creating a promise
const fetchData = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve({ id: 1, name: "Alice" });
    } else {
      reject(new Error("Failed to fetch data"));
    }
  }, 1000);
});

// Consuming a promise
fetchData
  .then((data) => {
    console.log("Data received:", data);
    return processData(data); // chaining
  })
  .then((processed) => {
    console.log("Processed:", processed);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Promise settled (success or failure)");
  });
```

### 3. Fetch API

```js
// Basic GET request
fetch("https://api.example.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // parses JSON body
  })
  .then((data) => {
    console.log("Users:", data);
  })
  .catch((error) => {
    console.error("Fetch error:", error.message);
  });

// POST request
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Alice",
    email: "alice@example.com",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("Created:", data))
  .catch((err) => console.error("Error:", err));
```

### 4. async / await

```js
// async function always returns a promise
async function getUsers() {
  try {
    const response = await fetch("https://api.example.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch users:", error.message);
    throw error; // re-throw if caller needs to handle it
  }
}

// Using the async function
async function displayUsers() {
  try {
    const users = await getUsers();
    console.log("Users:", users);
  } catch (error) {
    console.error("Display failed:", error);
  }
}

displayUsers();

// Parallel requests with Promise.all
async function getMultipleData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch("https://api.example.com/users").then(r => r.json()),
      fetch("https://api.example.com/posts").then(r => r.json()),
      fetch("https://api.example.com/comments").then(r => r.json()),
    ]);

    console.log({ users, posts, comments });
  } catch (error) {
    console.error("One or more requests failed:", error);
  }
}
```

### 5. Error Handling Patterns

```js
// Pattern 1: try/catch with async/await
async function safeFetch(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.warn(`Fetch failed for ${url}:`, error.message);
    return null; // graceful fallback
  }
}

// Pattern 2: .catch on fetch directly
fetch(url)
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .catch(error => {
    console.error(error);
    return fallbackData;
  });

// Pattern 3: timeout wrapper
async function fetchWithTimeout(url, timeoutMs = 5000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);
    return await res.json();
  } catch (error) {
    clearTimeout(timeout);
    if (error.name === "AbortError") {
      throw new Error("Request timed out");
    }
    throw error;
  }
}
```

---

## AI-Simulated API Responses

Since real API keys and live endpoints aren't always available, we'll use AI to generate realistic mock data that our apps can consume.

### Prompt: Generate Mock API Data

```
I'm building a weather app. Generate a JSON response that simulates what a real weather API would return. Include:
- City name, country
- Current temperature (in Celsius)
- Feels-like temperature
- Humidity percentage
- Wind speed and direction
- Weather condition (sunny, cloudy, rainy, etc.)
- 5-day forecast (array of objects with day name, high/low temp, condition)
- An icon code for each day

Make the data realistic for London in July.
```

**Expected output (AI-generated):**

```json
{
  "location": {
    "city": "London",
    "country": "UK"
  },
  "current": {
    "temp": 22,
    "feelsLike": 21,
    "humidity": 65,
    "windSpeed": 12,
    "windDirection": "SW",
    "condition": "Partly Cloudy",
    "icon": "partly-cloudy"
  },
  "forecast": [
    { "day": "Monday", "high": 23, "low": 16, "condition": "Sunny", "icon": "sunny" },
    { "day": "Tuesday", "high": 20, "low": 14, "condition": "Rainy", "icon": "rain" },
    { "day": "Wednesday", "high": 19, "low": 13, "condition": "Cloudy", "icon": "cloudy" },
    { "day": "Thursday", "high": 21, "low": 15, "condition": "Partly Cloudy", "icon": "partly-cloudy" },
    { "day": "Friday", "high": 24, "low": 17, "condition": "Sunny", "icon": "sunny" }
  ]
}
```

### Prompt: Simulate a To-Do API

```
Generate a mock JSON API response for a to-do list app. Include:
- An array of 5 to-do items
- Each item has: id, title, description, completed (boolean), priority (high/medium/low), createdAt (ISO date)
- Some items completed, some not
- A mix of priorities
```

---

## Mini Project: Weather App

### Starter Code

#### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="app">
    <header>
      <h1>🌤 Weather Dashboard</h1>
      <div class="search">
        <input type="text" id="city-input" placeholder="Enter city name..." value="London">
        <button id="search-btn">Search</button>
      </div>
    </header>

    <main>
      <!-- Current Weather -->
      <section id="current-weather" class="card">
        <div class="loading" id="loading-current">Loading weather data...</div>
        <div id="current-content" style="display: none;">
          <div class="location">
            <h2 id="city-name">--</h2>
            <p id="country">--</p>
          </div>
          <div class="weather-main">
            <span id="temperature" class="temp">--°C</span>
            <span id="condition">--</span>
          </div>
          <div class="weather-details">
            <div class="detail">
              <span class="label">Feels Like</span>
              <span id="feels-like">--°C</span>
            </div>
            <div class="detail">
              <span class="label">Humidity</span>
              <span id="humidity">--%</span>
            </div>
            <div class="detail">
              <span class="label">Wind</span>
              <span id="wind">--</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 5-Day Forecast -->
      <section id="forecast" class="card">
        <h3>5-Day Forecast</h3>
        <div class="loading" id="loading-forecast">Loading forecast...</div>
        <div id="forecast-content" style="display: none;" class="forecast-grid"></div>
      </section>
    </main>

    <div id="error-display" class="error" style="display: none;"></div>
  </div>

  <script src="weather-app.js"></script>
</body>
</html>
```

#### `style.css`

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.app {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

header {
  margin-bottom: 2rem;
}

header h1 {
  margin-bottom: 1rem;
  font-size: 1.75rem;
  color: #333;
}

.search {
  display: flex;
  gap: 0.5rem;
}

#city-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

#city-input:focus {
  border-color: #667eea;
}

#search-btn {
  padding: 0.75rem 1.5rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

#search-btn:hover {
  transform: translateY(-1px);
}

.card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.loading {
  text-align: center;
  color: #999;
  padding: 2rem;
}

.location h2 {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.location p {
  color: #666;
  margin-bottom: 1rem;
}

.weather-main {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.temp {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
}

#condition {
  font-size: 1.25rem;
  color: #666;
}

.weather-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.detail {
  text-align: center;
  padding: 1rem;
  background: #f8f9ff;
  border-radius: 8px;
}

.detail .label {
  display: block;
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 0.25rem;
}

.detail span:last-child {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

.forecast-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.75rem;
}

.forecast-day {
  text-align: center;
  padding: 0.75rem;
  background: #f8f9ff;
  border-radius: 8px;
}

.forecast-day .day-name {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #667eea;
}

.forecast-day .day-temp {
  font-size: 1.25rem;
  font-weight: bold;
}

.forecast-day .day-condition {
  font-size: 0.85rem;
  color: #666;
  margin-top: 0.25rem;
}

.error {
  background: #ffebee;
  color: #c62828;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

@media (max-width: 480px) {
  .weather-details {
    grid-template-columns: 1fr;
  }

  .forecast-grid {
    grid-template-columns: 1fr;
  }
}
```

#### `weather-app.js`

```js
// Mock weather data (simulating API response)
const mockWeatherData = {
  "london": {
    location: { city: "London", country: "UK" },
    current: { temp: 22, feelsLike: 21, humidity: 65, windSpeed: 12, windDirection: "SW", condition: "Partly Cloudy" },
    forecast: [
      { day: "Monday", high: 23, low: 16, condition: "Sunny" },
      { day: "Tuesday", high: 20, low: 14, condition: "Rainy" },
      { day: "Wednesday", high: 19, low: 13, condition: "Cloudy" },
      { day: "Thursday", high: 21, low: 15, condition: "Partly Cloudy" },
      { day: "Friday", high: 24, low: 17, condition: "Sunny" }
    ]
  },
  "tokyo": {
    location: { city: "Tokyo", country: "Japan" },
    current: { temp: 28, feelsLike: 31, humidity: 80, windSpeed: 8, windDirection: "E", condition: "Humid" },
    forecast: [
      { day: "Monday", high: 29, low: 23, condition: "Humid" },
      { day: "Tuesday", high: 27, low: 22, condition: "Rainy" },
      { day: "Wednesday", high: 30, low: 24, condition: "Sunny" },
      { day: "Thursday", high: 31, low: 25, condition: "Sunny" },
      { day: "Friday", high: 28, low: 23, condition: "Cloudy" }
    ]
  },
  "sydney": {
    location: { city: "Sydney", country: "Australia" },
    current: { temp: 16, feelsLike: 14, humidity: 55, windSpeed: 20, windDirection: "S", condition: "Windy" },
    forecast: [
      { day: "Monday", high: 17, low: 11, condition: "Windy" },
      { day: "Tuesday", high: 19, low: 12, condition: "Sunny" },
      { day: "Wednesday", high: 18, low: 13, condition: "Cloudy" },
      { day: "Thursday", high: 20, low: 14, condition: "Sunny" },
      { day: "Friday", high: 21, low: 15, condition: "Sunny" }
    ]
  },
  "cairo": {
    location: { city: "Cairo", country: "Egypt" },
    current: { temp: 36, feelsLike: 39, humidity: 25, windSpeed: 10, windDirection: "N", condition: "Hot" },
    forecast: [
      { day: "Monday", high: 37, low: 26, condition: "Hot" },
      { day: "Tuesday", high: 38, low: 27, condition: "Hot" },
      { day: "Wednesday", high: 36, low: 25, condition: "Sunny" },
      { day: "Thursday", high: 35, low: 24, condition: "Sunny" },
      { day: "Friday", high: 37, low: 26, condition: "Hot" }
    ]
  }
};

// Simulated API fetch (replaces real API call)
function fetchWeather(city) {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      const normalized = city.toLowerCase().trim();
      const data = mockWeatherData[normalized];

      if (data) {
        resolve(data);
      } else {
        // Generate a realistic mock for any city using what we have
        const cities = Object.keys(mockWeatherData);
        const randomCity = cities[Math.floor(Math.random() * cities.length)];
        const base = mockWeatherData[randomCity];

        // Slightly modify the data so it looks unique
        const mockCity = {
          location: { city: city.charAt(0).toUpperCase() + city.slice(1), country: "Unknown" },
          current: {
            ...base.current,
            temp: base.current.temp + Math.floor(Math.random() * 6 - 3),
            humidity: Math.min(100, base.current.humidity + Math.floor(Math.random() * 20 - 10))
          },
          forecast: base.forecast.map(day => ({
            ...day,
            high: day.high + Math.floor(Math.random() * 4 - 2),
            low: day.low + Math.floor(Math.random() * 4 - 2)
          }))
        };

        resolve(mockCity);
      }
    }, 800); // 800ms simulated latency
  });
}

// DOM references
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const loadingCurrent = document.getElementById("loading-current");
const currentContent = document.getElementById("current-content");
const loadingForecast = document.getElementById("loading-forecast");
const forecastContent = document.getElementById("forecast-content");
const errorDisplay = document.getElementById("error-display");

const cityName = document.getElementById("city-name");
const country = document.getElementById("country");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const forecastGrid = document.querySelector(".forecast-grid");

// Hide error helper
function hideError() {
  errorDisplay.style.display = "none";
}

// Show error helper
function showError(message) {
  errorDisplay.textContent = message;
  errorDisplay.style.display = "block";
}

// Update current weather UI
function updateCurrentWeather(data) {
  cityName.textContent = data.location.city;
  country.textContent = data.location.country;
  temperature.textContent = `${data.current.temp}°C`;
  condition.textContent = data.current.condition;
  feelsLike.textContent = `${data.current.feelsLike}°C`;
  humidity.textContent = `${data.current.humidity}%`;
  wind.textContent = `${data.current.windSpeed} km/h ${data.current.windDirection}`;

  loadingCurrent.style.display = "none";
  currentContent.style.display = "block";
}

// Update forecast UI
function updateForecast(data) {
  forecastGrid.innerHTML = "";

  for (const day of data.forecast) {
    const dayEl = document.createElement("div");
    dayEl.classList.add("forecast-day");

    dayEl.innerHTML = `
      <div class="day-name">${day.day}</div>
      <div class="day-temp">${day.high}° / ${day.low}°</div>
      <div class="day-condition">${day.condition}</div>
    `;

    forecastGrid.appendChild(dayEl);
  }

  loadingForecast.style.display = "none";
  forecastContent.style.display = "block";
}

// Main fetch function (async)
async function getWeather(city) {
  hideError();

  // Show loading states
  loadingCurrent.style.display = "block";
  currentContent.style.display = "none";
  loadingForecast.style.display = "block";
  forecastContent.style.display = "none";

  try {
    const data = await fetchWeather(city);
    updateCurrentWeather(data);
    updateForecast(data);
  } catch (error) {
    showError(`Failed to fetch weather: ${error.message}`);
    loadingCurrent.style.display = "none";
    loadingForecast.style.display = "none";
  }
}

// Event listeners
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  }
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const city = cityInput.value.trim();
    if (city) {
      getWeather(city);
    }
  }
});

// Load default city on page load
document.addEventListener("DOMContentLoaded", () => {
  getWeather("London");
});
```

---

## Mini Project: To-Do App (Alternative)

If students prefer a to-do app over the weather app, provide this alternative starter.

### Key differences: To-Do uses localStorage for persistence and has CRUD operations

#### `todo-app.js`

```js
// Mock API simulation for a to-do service
const mockTodoAPI = {
  async fetchTodos() {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Try loading from localStorage first
    const saved = localStorage.getItem("todos");
    if (saved) {
      return JSON.parse(saved);
    }

    // Default seed data
    return [
      { id: 1, title: "Learn JavaScript variables", completed: true, priority: "high", createdAt: "2026-07-11" },
      { id: 2, title: "Practice DOM manipulation", completed: true, priority: "high", createdAt: "2026-07-15" },
      { id: 3, title: "Build a quiz app", completed: false, priority: "high", createdAt: "2026-07-18" },
      { id: 4, title: "Study async/await", completed: false, priority: "medium", createdAt: "2026-07-22" },
      { id: 5, title: "Review event delegation", completed: false, priority: "low", createdAt: "2026-07-22" }
    ];
  },

  async addTodo(title, priority = "medium") {
    await new Promise(resolve => setTimeout(resolve, 300));

    const todos = await this.fetchTodos();
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
      priority,
      createdAt: new Date().toISOString().split("T")[0]
    };

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    return newTodo;
  },

  async toggleTodo(id) {
    await new Promise(resolve => setTimeout(resolve, 200));

    const todos = await this.fetchTodos();
    const todo = todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    return todo;
  },

  async deleteTodo(id) {
    await new Promise(resolve => setTimeout(resolve, 200));

    let todos = await this.fetchTodos();
    todos = todos.filter(t => t.id !== id);
    localStorage.setItem("todos", JSON.stringify(todos));
    return true;
  },

  async updatePriority(id, priority) {
    await new Promise(resolve => setTimeout(resolve, 200));

    const todos = await this.fetchTodos();
    const todo = todos.find(t => t.id === id);
    if (todo) {
      todo.priority = priority;
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    return todo;
  }
};

// DOM references
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const prioritySelect = document.getElementById("priority-select");
const todoList = document.getElementById("todo-list");
const todoCount = document.getElementById("todo-count");
const loadingTodos = document.getElementById("loading-todos");
const errorDiv = document.getElementById("error-display");

// Render todos
async function renderTodos() {
  try {
    loadingTodos.style.display = "block";
    todoList.innerHTML = "";

    const todos = await mockTodoAPI.fetchTodos();

    loadingTodos.style.display = "none";

    if (todos.length === 0) {
      todoList.innerHTML = '<li class="empty-state">No todos yet. Add one above!</li>';
      todoCount.textContent = "0 tasks";
      return;
    }

    const activeCount = todos.filter(t => !t.completed).length;
    todoCount.textContent = `${activeCount} task${activeCount !== 1 ? "s" : ""} remaining`;

    for (const todo of todos) {
      const li = document.createElement("li");
      li.className = `todo-item priority-${todo.priority}`;
      if (todo.completed) li.classList.add("completed");

      li.innerHTML = `
        <input type="checkbox" ${todo.completed ? "checked" : ""} data-id="${todo.id}">
        <span class="todo-title">${todo.title}</span>
        <span class="priority-badge ${todo.priority}">${todo.priority}</span>
        <select class="priority-change" data-id="${todo.id}">
          <option value="low" ${todo.priority === "low" ? "selected" : ""}>Low</option>
          <option value="medium" ${todo.priority === "medium" ? "selected" : ""}>Medium</option>
          <option value="high" ${todo.priority === "high" ? "selected" : ""}>High</option>
        </select>
        <button class="delete-btn" data-id="${todo.id}">✕</button>
      `;

      todoList.appendChild(li);
    }
  } catch (error) {
    loadingTodos.style.display = "none";
    errorDiv.textContent = `Error loading todos: ${error.message}`;
    errorDiv.style.display = "block";
  }
}

// Event delegation for todo actions
todoList.addEventListener("change", async (e) => {
  if (e.target.matches('input[type="checkbox"]')) {
    const id = parseInt(e.target.dataset.id);
    await mockTodoAPI.toggleTodo(id);
    await renderTodos();
  }

  if (e.target.matches(".priority-change")) {
    const id = parseInt(e.target.dataset.id);
    const priority = e.target.value;
    await mockTodoAPI.updatePriority(id, priority);
    await renderTodos();
  }
});

todoList.addEventListener("click", async (e) => {
  if (e.target.matches(".delete-btn")) {
    const id = parseInt(e.target.dataset.id);
    await mockTodoAPI.deleteTodo(id);
    await renderTodos();
  }
});

// Add new todo
todoForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = todoInput.value.trim();
  if (!title) return;

  const priority = prioritySelect.value;

  try {
    await mockTodoAPI.addTodo(title, priority);
    todoInput.value = "";
    await renderTodos();
  } catch (error) {
    errorDiv.textContent = `Error adding todo: ${error.message}`;
    errorDiv.style.display = "block";
  }
});

// Initial render
document.addEventListener("DOMContentLoaded", renderTodos);
```

---

## Activity Guide

### Activity 1: Explore the Console with Promises (10 min)

```js
// Open your browser console and type:

// 1. Create a simple promise
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 2. Use it
console.log("Start");
await wait(2000);
console.log("2 seconds later");

// 3. Fetch mock data
const data = await fetchWeather("Tokyo");
console.log("Weather data:", data);
```

### Activity 2: AI-Generated Mock Data (15 min)

Use AI to expand the weather or to-do app:

**Prompt for weather app:**
```
I have a weather app that uses hardcoded mock data. Can you generate mock data for 5 more cities: Dubai, New York, Paris, Moscow, and Rio de Janeiro? Use the same JSON structure as my existing data. Make it realistic for July.
```

**Prompt for to-do app:**
```
I have a to-do app with mock API functions using localStorage. Can you add a "search/filter" feature that lets users filter todos by:
- All / Active / Completed
- Priority (high/medium/low)
- Search by title text

Show me the code to add to my existing app.
```

### Activity 3: Extend the Project (20 min)

**Weather app extensions:**
1. Add a loading spinner (CSS animation) while fetching
2. Show last updated timestamp
3. Add unit toggle (°C / °F)
4. Add weather icons (emoji based on condition)

**To-do app extensions:**
1. Add due dates with date input
2. Add categories/tags
3. Sort by priority or date
4. Show completion statistics

---

## AI Prompts for APIs & Async JS

### Web Assistant (ChatGPT, Claude, Gemini)

**Understanding async/await:**
```
Explain async/await to me like I'm a beginner. Use a real-world analogy. Then show me a simple before/after example of .then() chaining vs async/await.
```

**Mock API Data:**
```
I need realistic mock data for my project. Generate a JSON array of 10 blog posts with: id, title, author, content (2 sentences), tags (array), publishedAt (ISO date), likes (number).
```

**Debugging Async Code:** paste your code:
```
This async function isn't catching errors properly. The .catch() never runs even when the fetch fails. What's wrong?

async function getData() {
  const response = await fetch("https://bad-url.com/data");
  const data = await response.json();
  return data;
}

getData().catch(err => console.log("Caught:", err));
```

```
I'm trying to return data from an async function but it's undefined when I try to use it. Why?

function loadData() {
  let data;
  fetch("https://api.example.com")
    .then(r => r.json())
    .then(d => data = d);
  return data;  // undefined!
}
```

**Building with Fetch:**
```
Show me how to make a POST request with fetch() to send JSON data to an API. Include setting headers, handling errors, and parsing the response.
```

### CLI / IDE Agent (OpenCode, Claude Code, Copilot)

**Understanding async/await:**
```
Explain async/await with a real-world analogy and a before/after example of .then() chaining vs async/await. Then read script.js and identify any patterns that could be simplified with async/await.
```

**Mock API Data:**
```
Create a file called mock-data.js with a JSON array of 10 blog posts. Each post should have: id, title, author, content (2 sentences), tags (array), publishedAt (ISO date), likes (number).
```

**Debugging Async Code:**
```
Read script.js. The async function getData has an error handling issue — the .catch() never runs when fetch fails. Find and fix the bug. Explain why the catch isn't firing.

Also read the loadData function — it always returns undefined. Fix the async flow so it correctly returns fetched data. Show the diff for both fixes.
```

**Building with Fetch:**
```
Read script.js. Show me how to make a POST request with fetch() to send JSON data. Add a commented example to the file with headers, error handling, and response parsing.
```

---

## Homework

1. **Complete the weather or to-do app** — Get one of the starter projects fully working in your browser
2. **Add a new feature** — Implement at least one extension from Activity 3 (unit toggle, filters, due dates, etc.)
3. **Generate custom mock data** — Use AI to create a mock dataset for a different type of app (e.g., recipe app, music library, sports scores) and update your app to use it
4. **Refactor to async/await** — If your app uses `.then()`, refactor one function to use `async/await`. If it already uses `async/await`, add `Promise.all` for parallel data loading
5. **Error handling** — Add a "Retry" button that appears when data fetching fails
6. **AI reflection** — Ask an AI tool to explain the JavaScript event loop and how async/await fits into it. Write a one-paragraph summary in your own words

---

## Resources

- [MDN: Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN: Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [JavaScript Visualizer (9000)](https://www.jsv9000.app/) — Visualize async code execution
- [HTTP Status Codes Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
