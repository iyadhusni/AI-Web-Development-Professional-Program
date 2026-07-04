# Week 6, Session 2: Advanced Styling & CSS Frameworks I

- **Date:** Wednesday, 5 August 2026
- **Duration:** 2 hours
- **Instructor:** Dr Iyad
- **Topics:** CSS framework introduction, utility classes, animations, AI-assisted CSS conversion

---

## Objectives

By the end of this session, students will be able to:

- Install and configure Tailwind CSS (or use via CDN) in a static project
- Apply utility classes to build responsive layouts without custom CSS
- Create CSS transitions and keyframe animations
- Use AI to convert hand-written CSS to framework utility classes
- Understand the trade-offs between utility-first and traditional CSS approaches

---

## Agenda (120 minutes)

| Time | Activity | Duration |
|------|----------|----------|
| 0:00 – 0:15 | Why CSS Frameworks? — Tailwind, Bootstrap, alternatives | 15 min |
| 0:15 – 0:50 | Utility-First CSS: Tailwind basics, layout, typography, spacing | 35 min |
| 0:50 – 1:05 | Responsive Design with utility classes | 15 min |
| 1:05 – 1:25 | CSS Animations: transitions, transforms, keyframes | 20 min |
| 1:25 – 1:50 | AI-Powered CSS Conversion: hand-written CSS → Tailwind | 25 min |
| 1:50 – 2:00 | Wrap-up & Homework | 10 min |

---

## CSS Framework Basics

### Utility-First Approach (Tailwind CSS)

Traditional CSS writes custom classes for each component. Utility-first uses small, single-purpose classes composed directly in HTML.

**Traditional CSS:**
```css
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  max-width: 400px;
}
.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.card-body {
  color: #6b7280;
  line-height: 1.5;
}
```

```html
<div class="card">
  <h2 class="card-title">Hello World</h2>
  <p class="card-body">This is a card component.</p>
</div>
```

**Utility-First (Tailwind):**
```html
<div class="bg-white p-6 rounded-xl shadow-md max-w-sm">
  <h2 class="text-xl font-bold mb-2">Hello World</h2>
  <p class="text-gray-500 leading-relaxed">This is a card component.</p>
</div>
```

### Setting Up Tailwind CSS

**Option A: CDN (quick start, no build step)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tailwind App</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center">
  <div class="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
    <h1 class="text-2xl font-bold text-gray-800 mb-4">Weather App</h1>
    <div class="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter city..."
        class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button class="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">
        Search
      </button>
    </div>
    <div class="text-center text-gray-500">
      <p>Enter a city to see the weather.</p>
    </div>
  </div>
</body>
</html>
```

**Option B: npm + build (recommended for larger projects)**

```bash
npm init -y
npm install -D tailwindcss
npx tailwindcss init
```

Configure `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Create `src/input.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Build:
```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

Link in HTML:
```html
<link href="./dist/output.css" rel="stylesheet" />
```

### Essential Tailwind Utility Classes

#### Layout & Sizing

| Class | CSS Equivalent |
|-------|---------------|
| `flex` | `display: flex` |
| `grid` | `display: grid` |
| `items-center` | `align-items: center` |
| `justify-between` | `justify-content: space-between` |
| `w-full` | `width: 100%` |
| `max-w-md` | `max-width: 28rem` |
| `min-h-screen` | `min-height: 100vh` |
| `gap-4` | `gap: 1rem` |
| `p-6` | `padding: 1.5rem` |
| `m-2` | `margin: 0.5rem` |

#### Typography

| Class | CSS Equivalent |
|-------|---------------|
| `text-sm` | `font-size: 0.875rem` |
| `text-xl` | `font-size: 1.25rem` |
| `text-3xl` | `font-size: 1.875rem` |
| `font-bold` | `font-weight: 700` |
| `font-medium` | `font-weight: 500` |
| `text-center` | `text-align: center` |
| `text-gray-500` | `color: #6b7280` |
| `leading-relaxed` | `line-height: 1.625` |

#### Colors

Tailwind uses numbered scales (50–950) for each color:

| Class | Approximate Value |
|-------|-------------------|
| `bg-blue-500` | `#3b82f6` |
| `bg-green-100` | `#dcfce7` |
| `text-red-600` | `#dc2626` |
| `border-gray-300` | `#d1d5db` |
| `hover:bg-blue-700` | `#1d4ed8` (on hover) |

#### Responsive Prefixes

Prefix any utility to apply it at a specific breakpoint:

| Prefix | Min Width |
|--------|-----------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="p-4 bg-white rounded-lg shadow">Card 1</div>
  <div class="p-4 bg-white rounded-lg shadow">Card 2</div>
  <div class="p-4 bg-white rounded-lg shadow">Card 3</div>
</div>
```

---

## CSS Animations

### Transitions

Transitions smoothly change property values over time.

```css
/* Vanilla CSS */
.button {
  background: #3b82f6;
  transition: background 0.3s ease, transform 0.2s ease;
}
.button:hover {
  background: #2563eb;
  transform: scale(1.05);
}
```

```html
<!-- Tailwind -->
<button class="bg-blue-500 hover:bg-blue-700 hover:scale-105 transition duration-300">
  Click Me
</button>
```

### Keyframe Animations

```css
/* Vanilla CSS */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeInUp 0.5s ease-out forwards;
}
```

```html
<!-- Tailwind (with custom animation in config) -->
<div class="animate-[fadeInUp_0.5s_ease-out]">Content</div>
```

Or define in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
    },
  },
}
```

Then use: `<div class="animate-fade-in-up">Content</div>`

### Practical Animation Examples

```css
/* Spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}
.spinner {
  width: 24px; height: 24px;
  border: 3px solid #e5e7eb;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
```

```html
<!-- Skeleton loading -->
<div class="animate-pulse bg-gray-200 h-4 w-3/4 rounded mb-2"></div>
<div class="animate-pulse bg-gray-200 h-4 w-1/2 rounded"></div>
```

### AI Prompts for Animations

```
I want to add a fade-in animation to a to-do list item when it's added.
Here's my current code:

[PASTE RENDER FUNCTION]

Generate the CSS keyframe animation and show me how to apply it to newly
added items. Use both a vanilla CSS approach and a Tailwind approach.
```

```
Create a loading spinner component using Tailwind CSS utility classes only
(no custom CSS). It should be a spinning circle, centered on the page,
with a blue accent color.
```

```
I have a weather app card that shows weather data. I want the card to
slide in from the right when the data loads, and the temperature number
should count up from 0 to the actual value. How would I implement these
two animations?
```

---

## AI-Powered CSS Conversion

### Converting Custom CSS to Tailwind

**Prompt template:**

```
Convert this CSS and HTML to use Tailwind CSS utility classes.
Remove all custom CSS — use only Tailwind classes inline.

Original CSS:
[PASTE CSS]

Original HTML:
[PASTE HTML]

The result should look visually identical but use no custom stylesheet.
Use CDN version of Tailwind for simplicity.
```

**Example conversion:**

Original:
```html
<style>
  .container { max-width: 600px; margin: 2rem auto; padding: 0 1rem; }
  .card { background: white; border-radius: 12px; padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
  h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; }
  .input-group { display: flex; gap: 0.5rem; }
  .input-group input { flex: 1; padding: 0.5rem 1rem; border: 1px solid #d1d5db;
                       border-radius: 8px; font-size: 1rem; }
  .input-group button { padding: 0.5rem 1.5rem; background: #3b82f6; color: white;
                        border: none; border-radius: 8px; font-weight: 600;
                        cursor: pointer; }
  .input-group button:hover { background: #2563eb; }
</style>
<div class="container">
  <div class="card">
    <h1>Weather App</h1>
    <div class="input-group">
      <input type="text" placeholder="City name" />
      <button>Search</button>
    </div>
  </div>
</div>
```

Converted (Tailwind):
```html
<div class="max-w-md mx-auto my-8 px-4">
  <div class="bg-white rounded-xl p-6 shadow-md">
    <h1 class="text-2xl font-bold mb-4">Weather App</h1>
    <div class="flex gap-2">
      <input type="text" placeholder="City name"
        class="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-base" />
      <button
        class="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold cursor-pointer hover:bg-blue-700 transition">
        Search
      </button>
    </div>
  </div>
</div>
```

### AI Prompts for Conversion

```
I have a todo app with a custom stylesheet (style.css). I want to
completely remove style.css and use Tailwind CDN instead.

Here's my full index.html (including the embedded CSS):
[PASTE FILE]

Convert every single style to Tailwind utility classes directly in the HTML.
I should be able to delete style.css and everything still looks the same.
```

```
I have this CSS file that's 200 lines long for my weather app.
Convert it to Tailwind. For any styles that can't be expressed
with Tailwind utilities alone, show me how to add them via the
tailwind.config.js `extend` section.

CSS:
[PASTE CSS]
```

```
Compare these two approaches for styling a button:

Approach 1 (BEM):
<button class="btn btn--primary btn--large">Submit</button>

Approach 2 (Tailwind):
<button class="px-6 py-3 bg-blue-500 text-white rounded-lg font-bold">Submit</button>

What are the pros and cons of each? When would you choose one over the other?
```

---

## Starter Code: Tailwind Weather App

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Weather App — Tailwind</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-sky-400 to-blue-600 min-h-screen flex items-center justify-center p-4">
  <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-md w-full">
    <!-- Header -->
    <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">🌤 Weather</h1>

    <!-- Search -->
    <div class="flex gap-2 mb-6">
      <input
        type="text"
        id="cityInput"
        placeholder="Search city..."
        class="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
      />
      <button
        id="searchBtn"
        class="px-6 py-2.5 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 active:scale-95 transition-all duration-200"
      >
        Search
      </button>
    </div>

    <!-- Weather Result -->
    <div id="weatherResult" class="text-center">
      <p class="text-gray-400">Enter a city to see the weather.</p>
    </div>

    <!-- Loading (hidden by default) -->
    <div id="loading" class="hidden text-center mt-4">
      <div class="inline-block w-8 h-8 border-4 border-sky-200 border-t-sky-500 rounded-full animate-spin"></div>
      <p class="text-gray-500 mt-2">Loading...</p>
    </div>
  </div>

  <script>
    const API_KEY = 'YOUR_API_KEY';
    const cityInput = document.getElementById('cityInput');
    const searchBtn = document.getElementById('searchBtn');
    const weatherResult = document.getElementById('weatherResult');
    const loading = document.getElementById('loading');

    async function getWeather(city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('City not found');
      return res.json();
    }

    function displayWeather(data) {
      weatherResult.innerHTML = `
        <div class="animate-[fadeInUp_0.5s_ease-out]">
          <h2 class="text-2xl font-bold text-gray-700 mt-4">${data.name}</h2>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
               alt="${data.weather[0].description}" class="mx-auto" />
          <p class="text-5xl font-bold text-gray-800">${Math.round(data.main.temp)}°C</p>
          <p class="text-gray-500 capitalize">${data.weather[0].description}</p>
          <div class="flex justify-center gap-6 mt-4 text-sm text-gray-500">
            <span>💧 ${data.main.humidity}%</span>
            <span>💨 ${data.wind.speed} m/s</span>
          </div>
        </div>
      `;
    }

    searchBtn.addEventListener('click', async () => {
      const city = cityInput.value.trim();
      if (!city) return;
      loading.classList.remove('hidden');
      weatherResult.innerHTML = '';
      try {
        const data = await getWeather(city);
        displayWeather(data);
      } catch (err) {
        weatherResult.innerHTML = `<p class="text-red-500 font-medium">${err.message}</p>`;
      } finally {
        loading.classList.add('hidden');
      }
    });

    cityInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') searchBtn.click();
    });
  </script>
</body>
</html>
```

---

## Frameworks Comparison

| Feature | Tailwind CSS | Bootstrap | Vanilla CSS |
|---------|-------------|-----------|-------------|
| Approach | Utility-first | Component-based | Custom |
| Learning curve | Medium (class names) | Low (pre-built components) | High (from scratch) |
| File size (min) | ~27 KB (CDN) | ~25 KB (CDN) | Depends on you |
| Customization | Config file | Sass variables | Full control |
| Responsive | Prefix system | Grid/breakpoints | Manual media queries |
| Best for | Design systems, custom UIs | Rapid prototyping, consistency | Small projects, unique designs |

---

## Homework

1. **Convert your app to Tailwind** — Take either the Weather App or To-Do App and convert the entire stylesheet to Tailwind utility classes. Use the CDN version. Delete your old CSS file. The app should look **at least as good** as the original.

2. **Add an animation** — Add at least one CSS animation or transition:
   - Fade-in when weather data loads
   - Slide-in for new to-do items
   - Hover effect on cards/buttons
   - A loading spinner

3. **AI conversion exercise** — Use an AI assistant to convert a 50+ line CSS file to Tailwind utilities. Document the prompt you used and any manual adjustments you had to make in `tailwind-conversion.md`.

4. **Responsive layout** — Create a responsive grid layout in your app:
   - Mobile: 1 column
   - Tablet: 2 columns
   - Desktop: 3 columns
   - Use Tailwind's responsive prefixes (`md:`, `lg:`)

5. **Read** — [Tailwind CSS documentation](https://tailwindcss.com/docs) — focus on: Layout, Flexbox & Grid, Spacing, Typography, and Hover/Focus/Active states.
