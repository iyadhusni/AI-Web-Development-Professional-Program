# Week 2, Session 2: Layout with Flexbox & Grid

**Date:** Wednesday, 8 July 2026 — 2 hours  
**Instructor:** Dr Iyad  
**Topics:** Flexbox, CSS Grid, responsive design, AI-guided refactoring  
**Project:** Create a responsive product landing page

---

## Session Objectives

By the end of this session you will be able to:

- Use Flexbox for one-dimensional layouts (centring, distributing space, wrapping)
- Use CSS Grid for two-dimensional layouts (rows & columns, grid template areas)
- Write media queries that adapt layout at common breakpoints
- Refactor a Flexbox layout to Grid (and vice versa) with AI assistance
- Build a complete, responsive product landing page

---

## 120-Minute Agenda

| Time | Activity |
|------|----------|
| 0:00 – 0:25 | Flexbox fundamentals (container, items, axes, alignment) |
| 0:25 – 0:50 | CSS Grid fundamentals (grid containers, rows, columns, areas) |
| 0:50 – 1:10 | Media queries & responsive breakpoints |
| 1:10 – 1:45 | **Activity** — Build a responsive product landing page |
| 1:45 – 1:55 | AI-guided layout refactoring (Flexbox → Grid) |
| 1:55 – 2:00 | Wrap-up, Q&A, homework |

---

## Key Concepts

### 1. Flexbox

Flexbox works along **one axis** at a time (row or column).

#### Container Properties

```css
.flex-container {
  display: flex;          /* or inline-flex */
  flex-direction: row;    /* row | row-reverse | column | column-reverse */
  flex-wrap: wrap;        /* nowrap | wrap | wrap-reverse */
  justify-content: center; /* main-axis alignment */
  align-items: center;     /* cross-axis alignment */
  gap: 1rem;              /* shorthand gap between items */
}
```

| Property | Values & Effect |
|----------|----------------|
| `justify-content` | `flex-start` (default), `flex-end`, `center`, `space-between`, `space-around`, `space-evenly` |
| `align-items` | `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline` |
| `flex-wrap` | `nowrap` forces single line; `wrap` allows items to flow to next row |

#### Item Properties

```css
.flex-item {
  flex: 1 1 200px;        /* grow shrink basis */
  align-self: center;     /* override container alignment for this item */
  order: 0;               /* reorder items (default 0) */
}
```

**Common patterns:**

```css
/* Centring a single element */
.center-me {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Equal-width columns */
.equal-cols {
  display: flex;
  gap: 1rem;
}
.equal-cols > * {
  flex: 1;
}

/* Navbar with logo + links */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}
```

### 2. CSS Grid

Grid works along **two axes** at once (rows and columns).

#### Container Properties

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;  /* three columns */
  grid-template-rows: auto 1fr auto;   /* three rows */
  gap: 1rem;
}
```

| Property | What it does |
|----------|--------------|
| `grid-template-columns` | Defines column sizes (use `fr`, `px`, `%`, `auto`, `repeat()`) |
| `grid-template-rows` | Defines row sizes |
| `gap` | Shorthand for `row-gap` and `column-gap` |
| `grid-template-areas` | Name areas for visual placement (see below) |

#### Common Patterns

```css
/* Auto-fill responsive grid (no media queries needed!) */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Classic 3-column layout */
.page-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 2rem;
}
```

#### Grid Template Areas

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content aside"
    "footer footer footer";
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
aside { grid-area: aside; }
footer { grid-area: footer; }
```

### 3. Media Queries

```css
/* Mobile-first approach — base styles are for mobile */

/* Tablet (≥768px) */
@media (min-width: 768px) {
  .layout {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header header"
      "sidebar content";
  }
}

/* Desktop (≥1024px) */
@media (min-width: 1024px) {
  .layout {
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas:
      "header header header"
      "sidebar content aside"
      "footer footer footer";
  }
}
```

**Common breakpoints:**

| Label | Min-width |
|-------|-----------|
| Mobile | (default, no query) |
| Tablet | 768px |
| Desktop | 1024px |
| Wide | 1280px |

---

## Activity: Build a Responsive Product Landing Page

### Starter HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ProductName — Landing Page</title>
  <link rel="stylesheet" href="style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>

  <!-- Navigation -->
  <nav class="navbar">
    <h2 class="logo">ProductName</h2>
    <ul class="nav-links">
      <li><a href="#">Features</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#" class="btn-primary">Get Started</a></li>
    </ul>
  </nav>

  <!-- Hero -->
  <header class="hero">
    <div class="hero-content">
      <h1>Build Faster with ProductName</h1>
      <p>The AI-powered tool that helps you ship web apps in hours, not weeks.</p>
      <a href="#" class="btn-primary btn-large">Start Free Trial</a>
    </div>
    <div class="hero-image">
      <div class="placeholder">Hero Image</div>
    </div>
  </header>

  <!-- Features -->
  <section class="features">
    <h2>Why ProductName?</h2>
    <div class="feature-grid">
      <div class="feature-card">
        <h3>Lightning Fast</h3>
        <p>Generate full pages from natural language prompts in seconds.</p>
      </div>
      <div class="feature-card">
        <h3>AI-Assisted</h3>
        <p>Get intelligent suggestions for layout, colour, and content.</p>
      </div>
      <div class="feature-card">
        <h3>Responsive by Default</h3>
        <p>Every output works on mobile, tablet, and desktop out of the box.</p>
      </div>
      <div class="feature-card">
        <h3>Export Anywhere</h3>
        <p>Download clean HTML/CSS or push directly to your Git repository.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <p>&copy; 2026 ProductName. All rights reserved.</p>
    <nav>
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">Contact</a>
    </nav>
  </footer>

</body>
</html>
```

### Starter CSS

```css
/* ===== Reset ===== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ===== Base ===== */
body {
  font-family: 'Inter', system-ui, sans-serif;
  color: #1a1a2e;
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

/* ===== Utility ===== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.btn-primary {
  display: inline-block;
  background: #6366f1;
  color: #fff;
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #4f46e5;
}

.btn-large {
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
}

.placeholder {
  background: #e2e8f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 1.2rem;
  min-height: 250px;
}

/* ===== Navbar — Flexbox ===== */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  align-items: center;
}

/* ===== Hero — Flexbox ===== */
.hero {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  flex: 1;
}

.hero-content h1 {
  font-size: 2.8rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  color: #475569;
  margin-bottom: 1.5rem;
}

.hero-image {
  flex: 1;
}

/* ===== Features — Grid ===== */
.features {
  padding: 4rem 2rem;
  background: #f8fafc;
  text-align: center;
}

.features h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  text-align: left;
}

.feature-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #475569;
  font-size: 0.95rem;
}

/* ===== Footer ===== */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  color: #64748b;
  font-size: 0.9rem;
}

.footer nav {
  display: flex;
  gap: 1.5rem;
}

.footer nav a:hover {
  color: #6366f1;
}

/* ===== Responsive — Media Queries ===== */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.5rem;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .navbar {
    flex-direction: column;
    gap: 0.75rem;
  }

  .footer {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## AI Prompts for Layout Work

### Web Assistant (ChatGPT, Claude, Gemini)

**Prompt: Layout Refactoring** — paste your CSS inline:

```
I have a product landing page built with Flexbox.
The hero section uses `display: flex` with two children
(one text, one image placeholder). Suggest how to refactor
this into CSS Grid while keeping the responsive behaviour
intact. Show the before and after CSS and explain why Grid
might be a better choice for this layout.

Here is my current hero CSS:

.hero {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }
}
```

**Prompt: Responsive Improvements** — paste your CSS:

```
Here is my product landing page CSS [paste your CSS].

Analyse the responsive behaviour and suggest improvements:
1. Are the breakpoints appropriate for the content?
2. Are there any horizontal overflow issues?
3. Could the feature grid use `auto-fill`/`auto-fit` more effectively?
4. How does the navbar behave on very small screens (320px width)?
5. Provide the specific code changes for each suggestion.
```

**Prompt: Flexbox → Grid Conversion** — paste your CSS:

```
Convert this Flexbox-based navbar layout to CSS Grid
while keeping the same visual result:

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

Explain the trade-offs between the Flexbox and Grid
approaches for a simple navbar.
```

### CLI / IDE Agent (OpenCode, Claude Code, Copilot)

**Prompt: Layout Refactoring** — run from your project:

```
Read the CSS files in this project. Find the hero section using Flexbox and refactor it to use CSS Grid while keeping responsive behaviour intact. Show me the before/after diff and explain why Grid might be a better choice for this layout.
```

**Prompt: Responsive Improvements**

```
Read style.css in this project. Analyse responsive behaviour and suggest improvements:
1. Are breakpoints appropriate for the content?
2. Any horizontal overflow issues?
3. Could grids use auto-fill/auto-fit more effectively?
4. How does the navbar behave at 320px width?
Apply the changes directly and show me the diff.
```

**Prompt: Flexbox → Grid Conversion**

```
Read style.css. Find the navbar layout using Flexbox and convert it to CSS Grid while keeping the same visual result. Explain the trade-offs between both approaches for a navbar.
```

---

## Before/After Layout Examples

### Hero: Flexbox (before) → Grid (after)

**Before (Flexbox):**
```css
.hero {
  display: flex;
  align-items: center;
  gap: 3rem;
}
@media (max-width: 768px) {
  .hero { flex-direction: column; }
}
```

**After (Grid):**
```css
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
```

**Why Grid?** When you want explicit control over both columns and rows, Grid communicates intent more clearly. The `grid-template-columns: 1fr 1fr` says "two equal columns" without needing child wrappers.

### Feature Cards: Basic Grid → Auto-fill Grid

**Before (fixed columns):**
```css
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
@media (max-width: 768px) {
  .feature-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .feature-grid { grid-template-columns: 1fr; }
}
```

**After (auto-fill, no media queries needed):**
```css
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

**Why better?** The browser handles breakpoints automatically. Cards are at least 280px wide, and as many columns fit as the available width allows. No media queries required.

---

## Homework

1. **Complete the product landing page** — Finish styling your page. Make sure it looks good at mobile (320px), tablet (768px), and desktop (1280px) widths.

2. **Read** — [MDN Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) guide.

3. **Read** — [MDN Grid](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grid) guide.

4. **Practice — Grid Garden** — Complete the [Grid Garden](https://cssgridgarden.com/) interactive game.

5. **Practice — Flexbox Froggy** — Complete the [Flexbox Froggy](https://flexboxfroggy.com/) interactive game.

6. **Experiment** — Take your bio page from Session 1 and refactor its layout to use Grid instead of Flexbox in at least one section. Note any differences in code clarity or behaviour.

7. **Prepare** — Next week we introduce JavaScript. Bring your styled and laid-out HTML pages.
