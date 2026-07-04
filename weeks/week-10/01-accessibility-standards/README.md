# Week 10, Session 1: Accessibility Standards

- **Date:** Saturday, 29 August 2026
- **Duration:** 3 hours
- **Instructor:** Dr Motaz
- **Topics:** WCAG standards, screen readers, ARIA, colour contrast, keyboard navigation

---

## Objectives

By the end of this session, students will be able to:

- Explain the four WCAG principles (POUR) and their guidelines
- Use ARIA attributes correctly to enhance semantic HTML
- Check and fix colour contrast issues
- Implement full keyboard navigation for interactive widgets
- Audit a page for accessibility issues and fix them with AI assistance

---

## Agenda (180 minutes)

| Time | Duration | Activity |
|------|----------|----------|
| 0:00 | 10 min | Welcome & icebreaker: name an accessibility barrier you've encountered |
| 0:10 | 30 min | Lecture: WCAG 2.2 principles (POUR) & levels (A, AA, AAA) |
| 0:40 | 20 min | Demo: Screen reader experience (VoiceOver / NVDA) |
| 1:00 | 25 min | Lecture: ARIA — roles, states, properties & rules |
| 1:25 | 15 min | Lab: Add ARIA to a page |
| 1:40 | 10 min | Break |
| 1:50 | 25 min | Lecture: Colour contrast, keyboard navigation & focus management |
| 2:15 | 35 min | Lab: AI-assisted a11y audit & fix |
| 2:50 | 10 min | Wrap-up & homework |
| 3:00 | — | End |

---

## WCAG Principles (POUR)

WCAG 2.2 is organized around four principles — all content **must** be:

### Perceivable

Users must be able to perceive the information being presented.

| Guideline | Summary | Example |
|-----------|---------|---------|
| 1.1 Text Alternatives | Provide text for non-text content | Alt text on images |
| 1.2 Time-based Media | Captions, transcripts for audio/video | Closed captions on videos |
| 1.3 Adaptable | Content can be presented without losing meaning | Semantic HTML, proper heading hierarchy |
| 1.4 Distinguishable | Make content easy to see and hear | Colour contrast ≥ 4.5:1, no auto-play audio |

### Operable

Users must be able to operate the interface.

| Guideline | Summary | Example |
|-----------|---------|---------|
| 2.1 Keyboard Accessible | All functionality from a keyboard | Tab through links, forms |
| 2.2 Enough Time | Users can adjust time limits | Pause button on carousels |
| 2.3 Seizures | No flashing content | No >3 flashes per second |
| 2.4 Navigable | Users can navigate and find content | Skip links, descriptive headings |
| 2.5 Input Modalities | Support different input methods | Voice control, touch targets ≥ 44px |

### Understandable

Users must be able to understand the information and interface.

| Guideline | Summary | Example |
|-----------|---------|---------|
| 3.1 Readable | Text is readable and understandable | `lang` attribute on `<html>` |
| 3.2 Predictable | Pages behave predictably | Consistent navigation, no unexpected pop-ups |
| 3.3 Input Assistance | Help users avoid and correct mistakes | Form validation, error suggestions |

### Robust

Content must be robust enough to be interpreted by a wide variety of user agents.

| Guideline | Summary | Example |
|-----------|---------|---------|
| 4.1 Compatible | Maximize compatibility with current/future tools | Valid HTML, proper ARIA |

### Conformance Levels

| Level | Description | Example Criteria |
|-------|-------------|------------------|
| **A** | Minimum — must satisfy all Level A criteria | Alt text, keyboard access, captions |
| **AA** | Acceptable — must satisfy all A + AA criteria | Colour contrast ≥ 4.5:1, descriptive headings |
| **AAA** | Optimal — satisfies all criteria | Contrast ≥ 7:1, sign language for videos |

> **Course target:** WCAG 2.2 Level AA

---

## ARIA Guide

### What ARIA Does

ARIA (Accessible Rich Internet Applications) supplements HTML to communicate element roles, states, and properties to assistive technologies.

### The Three Pillars

| Pillar | Attribute Pattern | Purpose |
|--------|-------------------|---------|
| **Roles** | `role="button"` | Defines what an element is |
| **States** | `aria-expanded="true"` | Current condition (dynamic) |
| **Properties** | `aria-label="Close menu"` | Characteristics/description |

### First Rule of ARIA

> **Don't use ARIA if native HTML semantics work.**
>
> ```html
> <!-- ❌ Bad: ARIA when native HTML exists -->
> <div role="button" tabindex="0" onclick="submit()">Submit</div>
>
> <!-- ✅ Good: Native semantics -->
> <button onclick="submit()">Submit</button>
> ```

### Common ARIA Attributes

| Attribute | When to Use | Example |
|-----------|-------------|---------|
| `aria-label` | Elements without visible text labels | `<nav aria-label="Main navigation">` |
| `aria-labelledby` | Use visible text as label | `<div role="dialog" aria-labelledby="dialogTitle">` |
| `aria-describedby` | Add extra description | `<input aria-describedby="emailHint" />` |
| `aria-expanded` | Toggleable sections | `<button aria-expanded="false">Menu</button>` |
| `aria-controls` | Element that controls another | `<button aria-controls="menu">` |
| `aria-hidden` | Hide decorative/off-screen content | `<span aria-hidden="true">★</span>` |
| `aria-live` | Dynamic content regions | `<div aria-live="polite">Loading...</div>` |
| `aria-current` | Current item in a set | `<a href="/home" aria-current="page">Home</a>` |
| `role="alert"` | Important, time-sensitive message | `<div role="alert">Error occurred</div>` |

### Live Regions

```html
<!-- Polite: announces when user is idle -->
<div aria-live="polite" id="notifications"></div>

<!-- Assertive: interrupts immediately (use sparingly) -->
<div aria-live="assertive" id="errors"></div>
```

### Lab: Add ARIA to a Page

Take a basic navigation and enhance it with ARIA:

```html
<!-- Before -->
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/work">Work</a></li>
  </ul>
</nav>

<!-- After -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/work">Work</a></li>
  </ul>
</nav>
```

---

## Colour Contrast Checking

### Minimum Ratios (WCAG 2.2 Level AA)

| Text Type | Minimum Ratio | Example |
|-----------|---------------|---------|
| Normal text (< 18px) | 4.5:1 | Body text |
| Large text (≥ 18px bold / ≥ 24px) | 3:1 | Headings |
| UI components / graphics | 3:1 | Icons, borders |

### Tools

- **Browser DevTools:** Elements → Styles → Colour picker (shows contrast ratio)
- **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Coolors Contrast Checker:** https://coolors.co/contrast-checker
- **axe DevTools:** Browser extension for automated checks

### CSS Best Practices

```css
/* Use CSS custom properties for theme colours */
:root {
  --text-primary: #1a1a1a;    /* On white bg: 14.5:1 ✅ */
  --text-secondary: #6b7280;  /* On white bg: 4.6:1 ✅ */
  --text-disabled: #9ca3af;   /* On white bg: 2.9:1 ❌ — only for disabled */
  --bg-primary: #ffffff;
  --bg-dark: #1a1a1a;
}

/* Verify: use a sass/postcss function in build step */
@function contrast-ratio($fg, $bg) {
  /* You can use a tool like chroma-js for this */
}
```

### Lab Prompt

```
Given these colour values for a portfolio site:
- Background: #fafafa
- Text: #6b7280
- Links: #2563eb
- Buttons: #2563eb on white
- Heading: #111827

Check each pair against WCAG AA. Report which pass and which fail.
For failing pairs, suggest alternative colours that pass.
```

---

## Keyboard Navigation

### What Should Be Keyboard Accessible

- All links, buttons, form controls
- Dropdown menus, accordions, tabs, modals
- Carousels and sliders
- Custom widgets

### Native Focus Order

```html
<!-- Tab order follows DOM order -->
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
</header>
<main>
  <h1>Content</h1>
  ...
</main>
```

### Visible Focus Indicators

```css
/* Default outline — never remove without replacement */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* For a custom focus ring */
.custom-button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px #fff, 0 0 0 5px var(--color-primary);
  border-radius: 4px;
}
```

> **Never** use `outline: none` without providing an alternative focus style.

### Skip Link

```html
<!-- First focusable element on the page -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<main id="main-content">
  ...
</main>
```

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  background: var(--color-primary);
  color: #fff;
  padding: 0.5rem 1rem;
  z-index: 1000;
}

.skip-link:focus {
  top: 0.5rem;
}
```

### Keyboard Interactions for Common Widgets

| Widget | Keys |
|--------|------|
| Navigation links | Tab / Shift+Tab |
| Radio buttons | Arrow keys, Space to select |
| Checkboxes | Tab, Space to toggle |
| Dropdown / Select | Enter to open, Arrow keys, Escape to close |
| Tabs | Tab to tablist, Arrow keys between tabs |
| Modal | Escape to close, Trap focus inside |
| Slider | Arrow keys, Home/End |

### Focus Trap for Modals

```js
const modal = document.getElementById('myModal');
const focusableElements = modal.querySelectorAll(
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
);
const firstFocus = focusableElements[0];
const lastFocus = focusableElements[focusableElements.length - 1];

modal.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'Tab') {
    if (e.shiftKey && document.activeElement === firstFocus) {
      e.preventDefault();
      lastFocus.focus();
    } else if (!e.shiftKey && document.activeElement === lastFocus) {
      e.preventDefault();
      firstFocus.focus();
    }
  }
});

function openModal() {
  modal.removeAttribute('hidden');
  firstFocus.focus();
}

function closeModal() {
  modal.setAttribute('hidden', '');
  document.querySelector('[data-open-modal]').focus();
}
```

---

## AI Prompts for a11y Auditing and Fixing

### Web Assistant (ChatGPT, Claude, Gemini)

#### Full Audit Prompt

```
Act as a WCAG 2.2 Level AA auditor. Analyze this HTML page and identify all
accessibility violations. For each violation provide:

| # | Element | Issue | WCAG Criterion | Severity (A/AA) | Fix |

Page HTML:

```html
[paste your full HTML]
```

Also check:
- Colour contrast of all text elements (assume background is #ffffff)
- Keyboard navigability
- Screen reader compatibility
- Proper use of semantic HTML
```

### Fix Generator Prompt

```
For the following accessibility issues, generate corrected HTML/CSS that fixes them:

Issue 1: [description]
Issue 2: [description]
Issue 3: [description]

Original code:
```html
[original code]
```

Return the full corrected code with comments explaining each fix.
```

### CLI / IDE Agent (OpenCode, Claude Code, Copilot)

**Full Audit:** run from your portfolio project:
```
Read all HTML files in this project. Act as a WCAG 2.2 Level AA auditor. For each page, identify all accessibility violations and output a table: # | Element | Issue | WCAG Criterion | Severity (A/AA) | Fix. Also check colour contrast of all text (assume bg #ffffff), keyboard navigability, screen reader compatibility, and proper semantic HTML.
```

**Fix Generator:**
```
Read the HTML files. I have these accessibility issues: [list issues]. Generate corrected HTML/CSS that fixes them. Apply fixes to the files and show the diff with comments explaining each fix.
```

**Image Accessibility:**
```
Read all <img> tags in my portfolio's HTML files. Review and fix each one:
- <img src="hero.jpg" alt="" /> (decorative — keep as is)
- <img src="chart.png" alt="chart" /> (too vague — improve)
- <img src="screenshot.jpg" /> (missing alt — add one)
For each, provide the correct alt text and apply the fix. Show the diff.
```

**Contrast Audit:**
```
Check these colour pairs for WCAG AA compliance (4.5:1 normal, 3:1 large):
1. #6b7280 on #ffffff
2. #2563eb on #ffffff
3. #ffffff on #2563eb
4. #9ca3af on #ffffff
5. #1a1a1a on #f3f4f6
For each, state contrast ratio, pass/fail, and suggest a passing alternative if it fails.
```

### Image Accessibility Prompt

```
Review the following images on my portfolio page and suggest fixes:

1. <img src="hero.jpg" alt="" />  (decorative — correct)
2. <img src="chart.png" alt="chart" />  (too vague)
3. <img src="screenshot.jpg" />  (missing alt)

For each, provide the correct alt text and explain your reasoning.
```

### Contrast Audit Prompt

```
Check these foreground/background colour pairs for WCAG AA compliance:

1. #6b7280 on #ffffff (body text)
2. #2563eb on #ffffff (link text)
3. #ffffff on #2563eb (button text)
4. #9ca3af on #ffffff (placeholder text)
5. #1a1a1a on #f3f4f6 (dark text on light grey)

For each pair, state:
- Contrast ratio
- Pass/Fail for normal text (AA: 4.5:1)
- Pass/Fail for large text (AA: 3:1)
- If fail, suggest a passing alternative
```

---

## Accessibility Checklist for Portfolios

- [ ] Page has a descriptive `<title>`
- [ ] `<html>` has a `lang` attribute
- [ ] All images have appropriate `alt` text
- [ ] Heading hierarchy is logical (`h1` → `h2` → `h3`, no skips)
- [ ] Colour contrast passes AA (4.5:1 normal, 3:1 large)
- [ ] All interactive elements are keyboard accessible
- [ ] Visible focus indicators on links, buttons, inputs
- [ ] Form inputs have `<label>` elements
- [ ] Error messages are associated with inputs via `aria-describedby`
- [ ] Skip link is present and functional
- [ ] Navigation is consistent across pages
- [ ] No auto-playing audio or video
- [ ] Touch targets are at least 44×44px
- [ ] Page is usable with 200% zoom (no horizontal scroll)
- [ ] `prefers-reduced-motion` is respected
- [ ] ARIA attributes are used correctly (only when native HTML is insufficient)
- [ ] No `role="presentation"` or `aria-hidden="true"` on focusable elements

---

## Homework

1. **Run an accessibility audit** on your portfolio using the AI prompt — fix all issues
2. **Add a skip link** to every page
3. **Ensure all interactive elements** have visible focus indicators
4. **Check colour contrast** for every text/background pair — fix failures
5. **Add ARIA attributes** where appropriate (navigation landmark, live regions, aria-label)
6. **Test with a screen reader** (VoiceOver on Mac, NVDA on Windows) — navigate your whole site
7. **Test full keyboard navigation** — Tab, Shift+Tab, Enter, Escape
8. **Resubmit** your portfolio URL with a note on which accessibility improvements you made
9. **Read:** [MDN ARIA Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
