# Week 1 — Session 1: Orientation & AI Tools Deep Dive

**Date:** Saturday, 27 June 2026  
**Duration:** 3 hours  
**Instructor:** Dr Iyad  
**Format:** Interactive workshop with live demonstrations

---

## Session Objectives

By the end of this session, learners will be able to:
- Understand the program structure, schedule, and evaluation criteria
- Access and configure an AI coding tool of their choice
- Write effective prompts to generate a web page
- Use AI to identify and fix common beginner coding mistakes
- Deploy a simple landing page to the web

---

## Agenda (180 min)

| Time | Activity | Description |
|------|----------|-------------|
| 0:00–0:30 | Program Orientation | Overview of 11-week curriculum, evaluation (30/70 split), tools, expectations, and Q&A |
| 0:30–1:00 | AI Tools Setup | Guide learners through signing up for/installing their chosen AI tools; test basic prompting |
| 1:00–1:15 | Break | |
| 1:15–2:00 | AI-Powered Landing Page | Live demo: prompt AI to generate a landing page; explain the output; iterate with follow-up prompts |
| 2:00–2:45 | AI Debugging Workshop | Introduce common beginner mistakes; use AI to diagnose and fix errors |
| 2:45–3:00 | Wrap-Up & Homework | Recap, Q&A, preview of Session 2, and homework assignment |

---

## AI Tools Covered

### Web Chatbots (no install — great for beginners)
| Tool | Price | Setup Time | Best For |
|------|-------|------------|----------|
| **ChatGPT** | Free / $20/mo (Plus) | 1 min | General coding, brainstorming, content |
| **Claude** | Free / $20/mo (Pro) | 1 min | Long context, code explanation |
| **Gemini** | **Free** | 1 min | Google account needed, free tier generous |
| **Qwen Chat** | **Free** | 1 min | Alibaba AI, Qwen3 model |

### Terminal AI Agents (more powerful — requires install)
| Tool | Price | Setup Time | Best For |
|------|-------|------------|----------|
| **OpenCode** | Free (open source) + API costs | 5 min | Terminal-first, sub-agents, any model |
| **Claude Code** | API-based (~$10-50/mo) | 5 min | Agentic coding, codebase-wide refactoring |
| **Gemini CLI** → **Antigravity CLI** | **Free** (1000 req/day) | 3 min | Google ecosystem, 1M context window |
| **Qwen Code** | API-based / Coding Plan | 5 min | Qwen3-Coder optimized, multi-provider |
| **Codex CLI** | $20/mo (ChatGPT Plus) | 3 min | OpenAI-powered terminal coding |

### IDE-Based (for later sessions)
| Tool | Price | Setup Time | Best For |
|------|-------|------------|----------|
| **VS Code + GitHub Copilot** | Free / $10/mo | 5 min | In-editor suggestions, agent mode |
| **Cursor** | Free / $20/mo | 5 min | AI-first IDE, multi-file context |

### UI Design Tools (for landing page activity)
| Tool | Price | Setup Time | Best For |
|------|-------|------------|----------|
| **Google Stitch** | **Free** (550 gen/month) | 1 min | Generate UI from prompts, export code |
| **v0 by Vercel** | Free / $20/mo | 1 min | React + Tailwind component generation |

See the full [tools-reference.md](../../tools-reference.md) for detailed comparisons and pricing.

---

## Activity 1: AI-Powered Landing Page

**Goal:** Generate a simple landing page by prompting AI.

### Prompt Template
```
Create a single HTML page for a [type] landing page.
Include:
- A header with a navigation bar (Home, About, Contact)
- A hero section with a heading, subheading, and call-to-action button
- A features section with three columns
- A footer with copyright text
Use modern CSS (flexbox/grid) and make it responsive.
Style it with a [color] colour scheme and [font] fonts.
```

### Suggested Variations
- "a personal portfolio landing page for a web developer"
- "a startup landing page for a productivity app"
- "a local business page for a coffee shop"

### Follow-Up Prompts
- "Make the hero section full-screen with a background gradient"
- "Add hover effects to the buttons"
- "Make the navigation sticky"
- "Add a contact form section"

---

## Activity 2: AI Debugging Workshop

**Goal:** Learn to use AI to find and fix code errors.

### Common Beginner Mistakes to Introduce

### Web Assistant (ChatGPT, Claude, Gemini)

Paste the code directly into the chat and ask your question:

| Mistake | Example | AI Prompt |
|---------|---------|-----------|
| Missing closing tag | `<div>...<div>` | "Fix the HTML errors in this code" |
| Unclosed attribute | `<img src="photo.jpg>` | "Find and fix the syntax errors" |
| CSS typo | `backround-color: blue;` | "My CSS isn't working, can you spot the typo?" |
| Flexbox confusion | Items not aligning as expected | "Why aren't these flex items centering?" |
| JavaScript `==` vs `===` | Loose comparison bug | "Find logic errors in this JavaScript" |
| Path issues | Broken image/script links | "Why are my resources not loading?" |

### CLI / IDE Agent (OpenCode, Claude Code, Copilot)

Run the agent from your project directory — it reads files, analyzes code, and suggests fixes:

```
I'm working on an [HTML/CSS/JS] project in this directory. Find and fix any syntax errors, typos, or logic bugs in my code. Explain each fix and verify the project still works after changes.
```

### Debugging Prompt Strategy
1. **Describe the symptom:** "My layout breaks on mobile"
2. **Share the code:** paste the relevant snippet
3. **Ask for diagnosis:** "What's wrong and how do I fix it?"
4. **Ask for explanation:** "Why did that fix work?"

---

## Starter Code

### `index.html` — Basic structure to start with

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Landing Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <div class="logo">MySite</div>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="home" class="hero">
    <h1>Welcome to My Site</h1>
    <p>Building the future, one line of code at a time.</p>
    <a href="#contact" class="btn">Get Started</a>
  </section>

  <section id="about" class="features">
    <div class="feature">
      <h3>Fast</h3>
      <p>Optimised for speed and performance.</p>
    </div>
    <div class="feature">
      <h3>Responsive</h3>
      <p>Works perfectly on all devices.</p>
    </div>
    <div class="feature">
      <h3>Modern</h3>
      <p>Built with the latest web standards.</p>
    </div>
  </section>

  <footer>
    <p>&copy; 2026 MySite. All rights reserved.</p>
  </footer>
</body>
</html>
```

### `style.css` — Basic styling

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #333;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: #333;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
}

.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: transform 0.2s;
}

.btn:hover {
  transform: scale(1.05);
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature {
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  background: #f9f9f9;
}

footer {
  text-align: center;
  padding: 2rem;
  background: #333;
  color: white;
}

@media (max-width: 768px) {
  .features {
    grid-template-columns: 1fr;
  }

  .nav-links {
    gap: 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }
}
```

---

## Debugging Example

### Before (buggy code)
```html
<div class="container>
  <h1>Hello World</h1>
  <img src="photo.jpg" alt="A photo">
   <p>This paragraph has <strong>bold text</p>
</div>
```

```css
.container {
  backround-color: blue;
  padding: 40px;
  text-align: center;
{
```

### AI Prompt

**Web Assistant:** `"This HTML/CSS has several errors. Can you find and fix all of them and explain what was wrong?"`

**CLI / IDE Agent:** Run from your project root: `"Find and fix all errors in index.html and style.css. Explain each fix and show the corrected code."`

### After (fixed code)
```html
<div class="container">
  <h1>Hello World</h1>
  <img src="photo.jpg" alt="A photo">
  <p>This paragraph has <strong>bold text</strong></p>
</div>
```

```css
.container {
  background-color: blue;
  padding: 40px;
  text-align: center;
}
```

**Fixes:**
1. Missing closing `"` on `class="container"`
2. Missing closing `</strong>` tag
3. CSS typo: `backround-color` → `background-color`
4. Missing closing `}` on CSS rule

---

## Homework

1. **Generate a landing page** — Use an AI tool to create a landing page for a topic of your choice (personal brand, hobby, business, etc.)
2. **Iterate** — Use at least 3 follow-up prompts to improve the design and content
3. **Deploy** — Push your page live using GitHub Pages or any free hosting
4. **Reflect** — Write 2-3 sentences about what worked well and what was challenging about prompting AI

---

## Resources

- [AI Tools Reference](../../tools-reference.md) — Full tool comparison and pricing
- [ChatGPT Prompting Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Claude Prompting Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)
- [Gemini Prompting Guide](https://ai.google.dev/gemini-api/docs/prompting)
- [GitHub Pages Quick Start](https://pages.github.com/)
