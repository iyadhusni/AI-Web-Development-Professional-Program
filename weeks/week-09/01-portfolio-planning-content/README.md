# Week 9, Session 1: Portfolio Planning & Content

- **Date:** Saturday, 22 August 2026
- **Duration:** 3 hours
- **Instructor:** Dr Iyad
- **Topics:** Portfolio layout design, content strategy, AI-assisted bio writing, alt text

---

## Objectives

By the end of this session, students will be able to:

- Plan a personal portfolio site layout and content structure
- Write a compelling bio using AI-assisted prompting
- Craft meaningful alt text for images
- Create a wireframe for their portfolio homepage
- Build a starter portfolio page with HTML/CSS

---

## Agenda (180 minutes)

| Time | Duration | Activity |
|------|----------|----------|
| 0:00 | 15 min | Welcome & portfolio showcase review |
| 0:15 | 30 min | Lecture: Portfolio layout design principles |
| 0:45 | 20 min | Lecture: Content strategy & information architecture |
| 1:05 | 25 min | Hands-on: Wireframing your portfolio layout |
| 1:30 | 15 min | Break |
| 1:45 | 25 min | Lecture: AI-assisted bio writing & alt text |
| 2:10 | 35 min | Lab: Write bio + alt text with AI |
| 2:45 | 15 min | Starter portfolio template walkthrough |
| 3:00 | — | Wrap-up & homework |

---

## Portfolio Structure Guide

### Common Pages

| Page | Purpose |
|------|---------|
| Home/Hero | Introduction, tagline, call-to-action |
| About | Bio, background, skills, photo |
| Projects/Work | Case studies, screenshots, links |
| Skills | Technologies, tools, competencies |
| Contact | Form, email, social links |
| Resume/CV | Downloadable PDF |

### Information Architecture Tips

- **Top tasks first:** recruiters want to see your work immediately
- **3-click rule:** any page should be reachable in 3 clicks or fewer
- **Consistent navigation:** same nav on every page, current page highlighted
- **Footer content:** copyright, social links, back-to-top

### Portfolio Content Checklist

- [ ] Professional headline (e.g. "Frontend Developer | AI Enthusiast")
- [ ] 2-3 sentence bio summary for hero section
- [ ] Detailed "About" paragraph (background, values, specialities)
- [ ] 3-6 project case studies with screenshots
- [ ] Skills/tools list with proficiency indicators
- [ ] Contact form or email link
- [ ] Links to GitHub, LinkedIn, CodePen

---

## AI Prompts for Writing a Bio

### Web Assistant (ChatGPT, Claude, Gemini)

#### Prompt Template: Short Bio

```
Write a professional bio for a [role] with [years] years of experience.
Specialities include [skill1], [skill2], and [skill3].
Tone: [professional / creative / friendly].
Length: 2-3 sentences.
Include: my passion for [topic].
```

**Example:**

> Write a professional bio for a frontend web developer with 3 years of experience. Specialities include React, responsive design, and AI integration. Tone: professional but approachable. Length: 2-3 sentences. Include: my passion for building accessible user interfaces.

### Prompt Template: About Page (Long-form)

```
Write a first-person "About Me" section for my portfolio.
I am a [role] based in [location].
My background includes [experience summary].
I specialize in [key skills].
My values are [value1], [value2].
I am looking for [opportunity type].
Tone: [warm / confident / humble].
Length: 1-2 paragraphs.
Include a call-to-action inviting visitors to view my work.
```

### Iteration Prompts

- "Make this more concise — under 50 words."
- "Rewrite this in a more casual/friendly tone."
- "Add a sentence about my passion for AI and web development."
- "Replace 'I am proficient in' with stronger action verbs."

### CLI / IDE Agent (OpenCode, Claude Code, Copilot)

**Short Bio:**
```
Write a professional bio for a [role] with [years] years of experience. Specialities include [skill1], [skill2], [skill3]. Tone: [professional / creative / friendly]. Length: 2-3 sentences. Include my passion for [topic].
```

**About Page (Long-form):**
```
Write a first-person "About Me" section for my portfolio in about.html. I am a [role] based in [location]. My background includes [experience summary]. I specialise in [key skills]. My values are [value1], [value2]. I am looking for [opportunity type]. Tone: [warm / confident / humble]. Length: 1-2 paragraphs. Include a call-to-action inviting visitors to view my work.
```

**Iteration:** after the bio is written:
- "Make this more concise — under 50 words."
- "Rewrite this in a more casual/friendly tone."
- "Add a sentence about my passion for AI and web development."
- "Replace 'I am proficient in' with stronger action verbs."

---

## AI Prompts for Alt Text

### Web Assistant (ChatGPT, Claude, Gemini)

### Why Alt Text Matters

- Screen readers describe images to visually impaired users
- Boosts SEO (search engines index alt text)
- Displays when images fail to load

### Prompt Template: Alt Text

```
Generate descriptive alt text for a [type of image] on a portfolio website.
Image description: [brief description of what the image shows].
Context: This image appears on my [page name] page.
SEO keywords: [keyword1, keyword2].
Keep it under 125 characters.
Do not start with "image of" or "picture of".
```

**Example:**

> Generate descriptive alt text for a screenshot of a dashboard project on a portfolio website. Image description: A dark-themed analytics dashboard showing charts for user engagement metrics over time. Context: This image appears on my Projects page. SEO keywords: dashboard, analytics, data visualization. Keep it under 125 characters. Do not start with "image of" or "picture of".

### CLI / IDE Agent (OpenCode, Claude Code, Copilot)

**Generate Alt Text:**
```
Generate descriptive alt text for a [type of image] on my portfolio website. Image description: [brief description]. Context: This image appears on my [page name] page. SEO keywords: [keyword1, keyword2]. Keep it under 125 characters. Do not start with "image of" or "picture of".
```

**Bulk Audit:**
```
Read all <img> tags in my portfolio HTML files. For each image, suggest the correct alt text. Flag any missing alt attributes and decorative images that should have alt="". Output a table with file, element, suggested alt text, and reasoning.
```

### Alt Text Best Practices

| Do | Don't |
|----|-------|
| Describe the content and function | Start with "image of" or "picture of" |
| Be concise (<125 characters) | Stuff with keywords |
| Include text that appears in the image | Describe decorative images |
| Use context to guide what's important | Be vague ("screenshot") |

---

## Wireframing Guide

### Tools

- **Low-fi:** Pen & paper, whiteboard, Excalidraw
- **Mid-fi:** Figma, Balsamiq, Moqups
- **Hi-fi:** Figma, Adobe XD, Sketch

### Wireframing Process

1. **Define viewport** — mobile first (375px), then tablet (768px), desktop (1280px)
2. **Sketch layout blocks** — header, hero, content sections, footer
3. **Add content placeholders** — `[Heading]`, `[Bio text]`, `[Project card]`
4. **Label interactions** — buttons, links, form fields
5. **Annotate notes** — hover effects, animations, responsive behaviour

### Mobile-First Layout Template

```
┌──────────────────┐
│ [Logo]  [Nav ☰]  │  ← Header (sticky)
├──────────────────┤
│                  │
│    [Hero Photo]  │
│  [Headline]      │
│  [Subheadline]   │
│  [CTA Button]    │
│                  │
├──────────────────┤
│  [Section Title] │
│ ┌────┐ ┌────┐   │
│ │Card│ │Card│   │  ← Project cards (stack vertically)
│ └────┘ └────┘   │
│ ┌────┐ ┌────┐   │
│ │Card│ │Card│   │
│ └────┘ └────┘   │
├──────────────────┤
│    [Skills Bar]  │
├──────────────────┤
│ [Contact Form]   │
├──────────────────┤
│ [Footer: links]  │
└──────────────────┘
```

---

## Starter Portfolio Template

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portfolio of [Your Name] — Web Developer" />
  <title>[Your Name] | Web Developer</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <header class="header">
    <div class="container header__inner">
      <a href="#" class="logo">[Your Name]</a>
      <nav class="nav" aria-label="Main navigation">
        <ul class="nav__list">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <img
          src="hero-photo.jpg"
          alt="[Your Name] — headshot in professional setting]"
          class="hero__photo"
          width="200"
          height="200"
        />
        <h1 class="hero__headline">Hi, I'm <span class="highlight">[Your Name]</span></h1>
        <p class="hero__subtitle">[Tagline — e.g. Frontend Developer building AI-powered web experiences]</p>
        <a href="#projects" class="btn">View My Work</a>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="about">
      <div class="container">
        <h2>About Me</h2>
        <p class="about__bio">
          [Your bio paragraph — written with AI in the lab session.]
        </p>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="projects">
      <div class="container">
        <h2>Projects</h2>
        <div class="projects__grid">
          <article class="card">
            <img
              src="project1-thumb.jpg"
              alt="[Descriptive alt text for project 1 screenshot]"
              class="card__image"
              width="400"
              height="250"
            />
            <h3 class="card__title">Project Title</h3>
            <p class="card__desc">Brief description of the project.</p>
            <a href="#" class="card__link">Live Demo →</a>
          </article>
          <!-- Repeat for more projects -->
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="skills">
      <div class="container">
        <h2>Skills</h2>
        <ul class="skills__list">
          <li class="skills__item">HTML & CSS</li>
          <li class="skills__item">JavaScript</li>
          <li class="skills__item">React</li>
          <li class="skills__item">AI / LLM Integration</li>
        </ul>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="contact">
      <div class="container">
        <h2>Get In Touch</h2>
        <p>I'm currently [available / looking for / open to] opportunities.</p>
        <a href="mailto:you@example.com" class="btn">you@example.com</a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2026 [Your Name]. Built with HTML & CSS.</p>
      <nav aria-label="Social links">
        <a href="https://github.com/yourhandle" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/yourhandle" target="_blank">LinkedIn</a>
      </nav>
    </div>
  </footer>

</body>
</html>
```

`style.css`

```css
/* ── Reset & Variables ── */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --color-bg: #fafafa;
  --color-text: #1a1a1a;
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-surface: #ffffff;
  --spacing: 2rem;
  --radius: 8px;
  --max-width: 960px;
  --font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

body {
  font-family: var(--font-family);
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
}

.container {
  width: 90%;
  max-width: var(--max-width);
  margin: 0 auto;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* ── Utility ── */
.highlight { color: var(--color-primary); }

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--color-primary);
  color: #fff;
  border-radius: var(--radius);
  font-weight: 600;
  transition: background 0.2s;
}

.btn:hover {
  background: var(--color-primary-hover);
  text-decoration: none;
}

/* ── Header ── */
.header {
  background: var(--color-surface);
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
}

.nav__list {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

/* ── Hero ── */
.hero {
  padding: 6rem 0 4rem;
  text-align: center;
}

.hero__photo {
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  object-fit: cover;
}

.hero__headline {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero__subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

/* ── Sections ── */
section {
  padding: 4rem 0;
}

section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

/* ── Projects Grid ── */
.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.card {
  background: var(--color-surface);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card__image {
  border-radius: var(--radius);
  margin-bottom: 1rem;
}

.card__title {
  margin-bottom: 0.5rem;
}

.card__desc {
  color: #6b7280;
  margin-bottom: 1rem;
}

/* ── Skills ── */
.skills__list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.skills__item {
  background: var(--color-primary);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
}

/* ── Footer ── */
.footer {
  background: var(--color-text);
  color: #fff;
  text-align: center;
  padding: 2rem 0;
}

.footer nav {
  margin-top: 0.75rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.footer a {
  color: #93c5fd;
}
```

---

## In-Class Lab: Write Bio + Alt Text with AI

### Part 1: Bio Writing (15 min)

1. Choose a free AI tool (ChatGPT, Claude, Gemini, etc.)
2. Use the short bio prompt template to generate a 2-3 sentence bio
3. Use the long-form prompt to generate an "About" paragraph
4. Iterate: ask the AI to adjust tone, length, or focus
5. Paste your final bio into the starter template

### Part 2: Alt Text (15 min)

1. Find 3 images for your portfolio (or use placeholder images from unsplash.com)
2. For each image, use the alt text prompt template to generate descriptive alt text
3. Add the alt text to the `<img>` tags in the starter template
4. Trade with a partner and critique each other's alt text

### Part 3: Wireframing (25 min)

1. Sketch your portfolio layout on paper or Excalidraw
2. Start with mobile, then tablet, then desktop
3. Label each content block
4. Share with the class or a partner for feedback

---

## Homework

1. **Finish portfolio wireframes** — mobile, tablet, desktop layouts
2. **Complete the starter template** — replace all `[placeholder]` content with your own
3. **Add alt text** to every image in your template
4. **Deploy to GitHub Pages** or Netlify (free tier)
5. **Submit your deployed URL** to the course LMS
6. **Read:** [W3C Alt Text Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)
