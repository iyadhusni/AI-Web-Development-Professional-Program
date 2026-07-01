# Week 1 — Session 2: HTML Fundamentals

**Date:** Wednesday, 1 July 2026  
**Duration:** 2 hours  
**Instructor:** Dr Motaz  
**Format:** Hands-on coding workshop

---

## Session Objectives

By the end of this session, learners will be able to:
- Structure a web page using semantic HTML5 elements
- Build a personal bio page from scratch
- Use AI to enhance HTML semantics, metadata, and accessibility
- Validate HTML and fix common structural errors
- Understand the difference between semantic and non-semantic markup

---

## Agenda (120 min)

| Time | Activity | Description |
|------|----------|-------------|
| 0:00–0:20 | HTML Basics Review | Document structure, elements, attributes, semantic tags |
| 0:20–0:45 | Build a Bio Page | Live coding: create personal bio page with semantic HTML |
| 0:45–0:55 | AI Enhancement | Prompt AI to improve semantics, add metadata, fix accessibility |
| 0:55–1:05 | Break | |
| 1:05–1:35 | Accessibility & Metadata Deep Dive | Add meta tags, Open Graph, ARIA landmarks, alt text |
| 1:35–1:50 | HTML Validation | Use W3C validator, fix common errors with AI help |
| 1:50–2:00 | Wrap-Up & Homework | Recap, Q&A, preview of Week 2 |

---

## Key Concepts

### Semantic HTML5 Elements
```
<header>     — introductory content / navigation
<nav>        — navigation links
<main>       — primary content (use once per page)
<section>    — thematic grouping of content
<article>    — self-contained composition
<aside>      — tangentially related content
<figure>     — self-contained content (images, code, diagrams)
<footer>     — footer for section / page
```

### Essential Meta Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Personal bio page of [Name] — web developer">
<meta name="author" content="[Name]">

<!-- Open Graph (social sharing) -->
<meta property="og:title" content="[Name] — Web Developer">
<meta property="og:description" content="Personal bio and portfolio">
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.com">
<meta property="og:image" content="https://example.com/profile.jpg">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Name] — Web Developer">
```

### Accessibility Basics
```html
<!-- Alt text for images -->
<img src="photo.jpg" alt="[Name] smiling in front of a laptop">

<!-- ARIA landmarks (use only when HTML5 semantics aren't enough) -->
<nav aria-label="Main navigation">
  ...
</nav>

<!-- Skip link -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Proper heading hierarchy -->
<h1>Page Title</h1>
  <h2>Section Title</h2>
    <h3>Sub-section Title</h3>
```

---

## Activity 1: Build a Personal Bio Page

### Starter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Personal Bio</title>
</head>
<body>

  <h1>Hello, I'm [Your Name]</h1>

  <h2>About Me</h2>
  <p>Write a short paragraph about yourself here.</p>

  <h2>My Skills</h2>
  <ul>
    <li>Skill 1</li>
    <li>Skill 2</li>
    <li>Skill 3</li>
  </ul>

  <h2>Contact</h2>
  <p>Email: your.email@example.com</p>
  <p>GitHub: github.com/yourusername</p>

</body>
</html>
```

### Instructions
1. Replace `[Your Name]` and placeholder content with your own info
2. Add a profile photo using `<img>` with proper `alt` text
3. Add links to your GitHub, LinkedIn, or other profiles using `<a>`
4. Wrap sections in semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`)
5. Add navigation links between sections

### AI Prompt to Improve

**Web Assistant:** Paste your HTML into the chat:

```
Here is my HTML bio page. Please:
1. Convert this basic bio page into a semantic HTML5 structure
2. Add proper <meta> tags for SEO and social sharing
3. Improve the heading hierarchy
4. Add ARIA landmarks where appropriate
5. Add alt text to any images
6. Make sure the page is accessible

[Paste your HTML here]
```

**CLI / IDE Agent:** Run from your project directory:

```
Read index.html in this project. Improve it by:
1. Converting this basic bio page into a semantic HTML5 structure
2. Adding proper <meta> tags for SEO and social sharing
3. Improving the heading hierarchy
4. Adding ARIA landmarks where appropriate
5. Adding alt text to any images
6. Making sure the page is accessible
Show me the diff of changes.
```

---

## Activity 2: HTML Enhancement with AI

### Web Assistant

**Prompt: Add Metadata & SEO**
```
Add comprehensive <meta> tags to this HTML page including:
- Description and author meta tags
- Open Graph tags for Facebook/LinkedIn sharing
- Twitter Card tags
- Favicon link
```

**Prompt: Improve Accessibility**
```
Analyze this HTML for accessibility issues and fix them:
- Add a skip-to-content link
- Ensure proper heading hierarchy (h1→h2→h3)
- Add aria-label to navigation
- Ensure all images have descriptive alt text
- Add lang attribute to html tag
```

**Prompt: Validate & Fix**
```
Validate this HTML and fix any errors:
- Check for unclosed tags
- Check for duplicate IDs
- Check for proper nesting
- Check for deprecated elements
```

### CLI / IDE Agent

**Prompt: Add Metadata & SEO**
```
Read index.html in this project. Add comprehensive <meta> tags including description, Open Graph, Twitter Card, and favicon. Modify the file directly and show me the changes.
```

**Prompt: Improve Accessibility**
```
Read index.html and analyse it for accessibility issues. Fix any issues found: add skip link, fix heading hierarchy, add aria labels, ensure alt text on images, and add lang attribute. Show me the diff.
```

**Prompt: Validate & Fix**
```
Read index.html and check for: unclosed tags, duplicate IDs, improper nesting, and deprecated elements. Fix all issues found. Verify the file is valid HTML after changes.
```

---

## Semantic HTML — Enhanced Bio Page Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Personal bio page of Jane Doe — aspiring web developer passionate about accessible, user-friendly web design.">
  <meta name="author" content="Jane Doe">

  <meta property="og:title" content="Jane Doe — Web Developer">
  <meta property="og:description" content="Personal bio and portfolio">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://janedoe.github.io">
  <meta property="og:image" content="https://janedoe.github.io/profile.jpg">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Jane Doe — Web Developer">

  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <title>Jane Doe — Web Developer</title>
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <header>
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main id="main-content">
    <section id="about">
      <h1>Hi, I'm Jane Doe</h1>
      <figure>
        <img src="profile.jpg" alt="Jane Doe smiling in front of a laptop" width="200" height="200">
        <figcaption>Jane Doe — Aspiring Web Developer</figcaption>
      </figure>
      <p>I'm an aspiring web developer passionate about building accessible, user-friendly websites. Currently studying at Acadima College's AI Web Development Professional Program.</p>
    </section>

    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>HTML5 &amp; Semantic Markup</li>
        <li>CSS3 &amp; Responsive Design</li>
        <li>JavaScript Fundamentals</li>
        <li>AI-Assisted Development</li>
      </ul>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <article>
        <h3>Personal Bio Page</h3>
        <p>A responsive bio page built with semantic HTML and CSS.</p>
      </article>
      <article>
        <h3>Landing Page</h3>
        <p>A product landing page generated with AI assistance.</p>
      </article>
    </section>

    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Email: <a href="mailto:jane.doe@example.com">jane.doe@example.com</a></p>
      <p>GitHub: <a href="https://github.com/janedoe">github.com/janedoe</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/janedoe">linkedin.com/in/janedoe</a></p>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Jane Doe. Built with semantic HTML.</p>
  </footer>
</body>
</html>
```

---

## Before & After: Semantic HTML

### Before (non-semantic)
```html
<div class="header">
  <div class="nav">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </div>
</div>
<div class="content">
  <div class="section">
    <h1>Welcome</h1>
    <p>Content here.</p>
  </div>
</div>
<div class="footer">
  <p>Copyright 2026</p>
</div>
```

### After (semantic)
```html
<header>
  <nav aria-label="Main navigation">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
<main>
  <section>
    <h1>Welcome</h1>
    <p>Content here.</p>
  </section>
</main>
<footer>
  <p>Copyright 2026</p>
</footer>
```

---

## Common HTML Errors & AI Fixes

| Error | Example | AI Prompt |
|-------|---------|-----------|
| Missing DOCTYPE | no `<!DOCTYPE html>` | "Add the correct DOCTYPE declaration" |
| Unclosed tags | `<p>text` | "Find and close all unclosed HTML tags" |
| Improper nesting | `<p><div>text</p></div>` | "Fix the nesting of elements" |
| Missing alt text | `<img src="photo.jpg">` | "Add descriptive alt text to all images" |
| Duplicate IDs | `id="main"` used twice | "Find and fix duplicate IDs" |
| Deprecated tags | `<font>`, `<center>` | "Replace deprecated HTML tags with modern equivalents" |

---

## Homework

1. **Build your bio page** — Create a personal bio page using semantic HTML5, with at least: header, nav, main, section (x3), footer, figure, article
2. **Add metadata** — Include description, Open Graph, Twitter Card, and favicon
3. **Accessibility check** — Use an AI tool to audit your page and fix any issues found
4. **Validate** — Run your HTML through the [W3C Validator](https://validator.w3.org/) and fix any errors
5. **Deploy** — Push your bio page to GitHub Pages

---

## Resources

- [MDN: HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN: Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [W3C HTML Validator](https://validator.w3.org/)
- [Open Graph Protocol](https://ogp.me/)
- [WebAIM: Alt Text Guide](https://webaim.org/techniques/alttext/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [tools-reference.md](../../tools-reference.md)
