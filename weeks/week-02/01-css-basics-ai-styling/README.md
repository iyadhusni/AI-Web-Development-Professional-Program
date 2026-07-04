# Week 2, Session 1: CSS Basics & AI Styling

**Date:** Saturday, 4 July 2026 — 3 hours  
**Instructor:** Dr Iyad  
**Topics:** CSS selectors, properties, box model, typography, colours, AI colour palette generation  
**Project:** Style the bio page from Week 1 using AI-assisted CSS

---

## Session Objectives

By the end of this session you will be able to:

- Write CSS rules using element, class, ID, and descendant selectors
- Explain and apply the CSS box model (content, padding, border, margin)
- Set colours via named, hex, RGB, and HSL values
- Style typography with `font-family`, `font-size`, `font-weight`, `line-height`
- Use AI prompts to generate cohesive colour palettes and typography scales
- Link an external stylesheet to an HTML page

---

## 180-Minute Agenda

| Time | Activity |
|------|----------|
| 0:00 – 0:30 | CSS syntax & selectors (element, class, ID, descendant) |
| 0:30 – 0:50 | Box model deep-dive (content, padding, border, margin) |
| 0:50 – 1:10 | Colours in CSS (named, hex, RGB, HSL) |
| 1:10 – 1:30 | Typography basics (`font-family`, `font-size`, `line-height`, `font-weight`) |
| 1:30 – 2:00 | **Activity Part 1** — Link CSS to bio page & apply base styles |
| 2:00 – 2:30 | **Activity Part 2** — AI colour palette generation & typography refinement |
| 2:30 – 2:50 | AI-assisted responsive polish & cross-browser checks |
| 2:50 – 3:00 | Wrap-up, Q&A, homework |

---

## Key CSS Concepts

### 1. CSS Selectors

| Selector | Example | What it targets |
|----------|---------|-----------------|
| Element | `h1 { }` | All `<h1>` elements |
| Class | `.bio { }` | Elements with `class="bio"` |
| ID | `#profile { }` | The element with `id="profile"` |
| Descendant | `.card p { }` | `<p>` inside `.card` |
| Group | `h1, h2 { }` | All `<h1>` and `<h2>` elements |

```css
/* element selector */
h1 {
  color: #2c3e50;
}

/* class selector */
.bio {
  font-size: 1.1rem;
}

/* ID selector */
#profile {
  border-radius: 50%;
}

/* descendant selector */
.card p {
  line-height: 1.6;
}
```

### 2. The Box Model

Every element on a page is a rectangular box made of four layers:

```
┌─────────────────────────────────┐
│            MARGIN               │
│  ┌───────────────────────────┐  │
│  │          BORDER           │  │
│  │  ┌─────────────────────┐  │  │
│  │  │        PADDING      │  │  │
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │   CONTENT     │  │  │  │
│  │  │  │               │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

```css
.box {
  width: 300px;
  padding: 20px;
  border: 2px solid #3498db;
  margin: 16px auto;

  /* Use box-sizing to keep width predictable */
  box-sizing: border-box;
}
```

**Key point:** With `box-sizing: border-box`, the `width` includes content + padding + border.

### 3. Colours

CSS supports several colour formats:

```css
/* Named */
color: white;
background-color: midnightblue;

/* Hexadecimal (6-digit) */
color: #2c3e50;
background-color: #ecf0f1;

/* RGB / RGBA */
color: rgb(44, 62, 80);
background-color: rgba(236, 240, 241, 0.8);

/* HSL / HSLA */
color: hsl(210, 29%, 24%);
background-color: hsla(180, 10%, 94%, 0.8);
```

**Pro tip:** HSL is often the easiest to reason about. Hue = colour wheel position, Saturation = intensity, Lightness = brightness.

### 4. Typography

```css
body {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
}

.bio-text {
  font-size: 1.125rem;
  font-weight: 300;
  letter-spacing: 0.01em;
}
```

**Typography scale (modular scale 1.25):**

| Element | Size |
|---------|------|
| `h1` | 2.5rem |
| `h2` | 2.0rem |
| `h3` | 1.6rem |
| `h4` | 1.25rem |
| Body | 1.0rem |
| Small | 0.875rem |

---

## Activity: Style the Bio Page with CSS + AI

### Part 1 — Link & Base Styles (30 min)

1. Create a file `style.css` next to your `index.html` from Week 1.
2. Link it in the `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

3. Apply the starter template below and customise for your own bio page.

### Starter CSS Template

```css
/* ===== Reset ===== */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ===== Typography ===== */
body {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  line-height: 1.6;
  color: #2c3e50;
  background-color: #f8f9fa;
}

/* ===== Layout ===== */
.container {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* ===== Profile ===== */
.profile {
  text-align: center;
  margin-bottom: 2.5rem;
}

.profile img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #3498db;
}

.profile h1 {
  font-size: 2rem;
  margin-top: 1rem;
  color: #1a1a2e;
}

.profile .tagline {
  color: #6c757d;
  font-size: 1.1rem;
  margin-top: 0.25rem;
}

/* ===== Bio Section ===== */
.bio {
  background: #ffffff;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
}

.bio h2 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #1a1a2e;
}

/* ===== Skills ===== */
.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin-top: 1rem;
}

.skills li {
  background: #e9ecef;
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  font-size: 0.875rem;
  color: #495057;
}

/* ===== Contact ===== */
.contact {
  text-align: center;
  margin-top: 2rem;
}

.contact a {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
}

.contact a:hover {
  text-decoration: underline;
}
```

### Part 2 — AI Colour Palette Generation (30 min)

Use these prompts with your preferred AI assistant:

#### Prompt: Colour Palette Generation

```
I'm building a personal bio/profile page for a developer.
Generate a 5-colour palette with hex codes for:

1. Primary background (light, for the page)
2. Card / surface background
3. Primary text (dark)
4. Secondary text / muted
5. Accent colour (for links, borders, highlights)

The palette should feel modern, tech-focused, and accessible
(meeting WCAG AA contrast). Give each colour a descriptive name
and explain where to use it.
```

After you receive the palette, replace the hardcoded colours in `style.css` with your new palette.

#### Prompt: Typography Suggestions

```
I'm using the CSS scale below for a developer bio page.
Suggest a Google Font pairing (one for headings, one for body)
and recommend font weights that work well for each.

Current scale:
- body: 1rem / 1.6 line-height
- h1: 2.5rem / 1.2 line-height
- h2: 2.0rem / 1.3
- h3: 1.5rem / 1.4

I want a clean, readable, slightly technical feel.
```

#### Prompt: Responsive Improvements

```
Here is my current CSS for a bio page [paste your CSS].
Suggest 3-5 responsive improvements that would make this
page look better on mobile devices (under 600px width).
Provide the specific code changes and explain each one.
```

---

## Homework

1. **Complete the bio page styling** — Apply your chosen colour palette, fonts, and any mobile refinements you identified.

2. **Read** — [MDN CSS first steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps) (sections: "What is CSS?", "Getting started with CSS", "How CSS is structured").

3. **Read** — [MDN The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model).

4. **Practice** — Open your bio page in Chrome DevTools (F12 → Elements → Styles panel). Experiment with changing colours, padding, and margins live. Take a screenshot of your before/after.

5. **Optional challenge** — Add a dark mode using a CSS custom property approach:

```css
:root {
  --bg: #ffffff;
  --text: #2c3e50;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1a1a2e;
    --text: #e9ecef;
  }
}

body {
  background: var(--bg);
  color: var(--text);
}
```

6. **Prepare** — Bring your styled bio page to next session. We will use it as a starting point for layout work.
