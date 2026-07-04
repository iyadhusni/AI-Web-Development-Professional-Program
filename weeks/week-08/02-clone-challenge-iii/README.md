# Week 8 — Session 2: Clone Challenge III — Polish, Deploy & Submit

**Date:** Wednesday, 19 August 2026  
**Duration:** 2 hours  
**Instructor:** Dr Motaz  
**Format:** Project workshop with peer review

---

## Session Objectives

By the end of this session, learners will be able to:
- Perform a final polish pass on their clone (spacing, alignment, consistency)
- Test their clone against a comprehensive quality checklist
- Audit and fix accessibility issues using AI and automated tools
- Deploy their clone to GitHub Pages
- Submit their project with AI.md documentation and a reflection

---

## Agenda (120 min)

| Time | Activity | Description |
|------|----------|-------------|
| 0:00–0:10 | Final Sprint Overview | Goals for the session, submission requirements, deadline |
| 0:10–0:30 | Polish Pass | Spacing audit, alignment fixes, consistency check, micro-interactions |
| 0:30–0:50 | Testing & Debugging | Cross-browser check, responsive testing, broken links, console errors |
| 0:50–1:10 | Accessibility Audit | Semantic HTML check, colour contrast, keyboard navigation, screen reader |
| 1:10–1:20 | Break | |
| 1:20–1:40 | Deployment | GitHub Pages setup, custom domain (optional), verify live site |
| 1:40–1:55 | AI-Assisted Code Review | Use AI to review code quality, suggest improvements, catch issues |
| 1:55–2:00 | Submission & Wrap-Up | Submission guidelines, checklist, final Q&A |

---

## Polish Checklist

### Visual Consistency
- [ ] All section headings are the same font size and weight
- [ ] Body text is consistent size and colour across sections
- [ ] Card/pricing padding is uniform
- [ ] Buttons are consistent height, padding, border-radius
- [ ] Spacing between sections is uniform (use a `--section-padding` variable)
- [ ] Border radius is consistent (use a `--radius` variable)
- [ ] Box shadows are consistent (use a `--shadow` variable)

### Alignment
- [ ] Content is properly centred in each section
- [ ] Grid items are aligned (same height cards — use `align-items: stretch` or `display: flex; flex-direction: column`)
- [ ] Text is not overflowing containers
- [ ] Images are not distorted (check `aspect-ratio` or `object-fit`)
- [ ] Navbar items are vertically centred
- [ ] Footer columns are evenly distributed

### Micro-Interactions
- [ ] Buttons have hover and focus states
- [ ] Cards have hover lift effect
- [ ] Navigation links have hover effect
- [ ] Transitions are smooth (200–300ms ease)
- [ ] Mobile menu opens/closes smoothly
- [ ] Links have `:focus-visible` outlines for keyboard users

### Code Cleanup
- [ ] Remove unused CSS classes
- [ ] Remove commented-out code
- [ ] Remove console.log statements
- [ ] Consolidate repeated styles into reusable classes
- [ ] Check for CSS specificity issues
- [ ] Ensure no inline styles (except dynamic ones)

---

## Testing Guide

### Cross-Browser Testing

```bash
# Quick checklist:
□ Chrome     — latest
□ Firefox    — latest
□ Safari     — latest (if available)
□ Edge       — latest
```

**What to test per browser:**
- Layout renders correctly
- Fonts load properly
- Animations play smoothly
- Forms are interactive
- No console errors

### Responsive Testing

**Manual testing:**
1. Open Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test at these widths:
   - 375px (iPhone SE)
   - 768px (iPad)
   - 1024px (iPad landscape)
   - 1440px (desktop)

**What to check:**
```javascript
// Paste in DevTools console to check viewport
console.log(`Viewport: ${window.innerWidth}×${window.innerHeight}`);
console.log(`Device Pixel Ratio: ${window.devicePixelRatio}`);
```

### Link & Asset Validation

```javascript
// Check for broken links (paste in DevTools console)
document.querySelectorAll('a').forEach(a => {
  if (!a.href || a.href === '#' || a.href === '') {
    console.warn('Empty link:', a);
  }
});

// Check all images loaded
document.querySelectorAll('img').forEach(img => {
  if (!img.complete || img.naturalWidth === 0) {
    console.error('Broken image:', img.src);
  }
});
```

### HTML Validation

```
Use the W3C validator: https://validator.w3.org/
- Direct input tab
- Paste your HTML
- Fix any errors and warnings
```

---

## Activity 1: Accessibility Audit

### Automated Tools

| Tool | What It Checks | How to Use |
|------|---------------|------------|
| **WAVE** | Contrast, ARIA, alt text, heading structure | Browser extension or wave.webaim.org |
| **Lighthouse** | Accessibility score, best practices | Chrome DevTools → Lighthouse tab |
| **Axe DevTools** | Accessibility violations | Browser extension |

### Manual Accessibility Checklist

```html
<!-- 1. Skip link for keyboard users -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- 2. Proper heading hierarchy -->
<h1>Page Title</h1>         <!-- one per page -->
  <h2>Section Heading</h2>   <!-- logical order -->
    <h3>Sub-section</h3>

<!-- 3. Alt text on images -->
<img src="chart.png" alt="Bar chart showing Q3 revenue growth of 25%" />
<img src="decorative-line.png" alt="" aria-hidden="true" />  <!-- decorative -->

<!-- 4. ARIA labels where needed -->
<nav aria-label="Main navigation">...</nav>
<button aria-label="Close menu" aria-expanded="false">...</button>

<!-- 5. Form labels -->
<label for="email">Email address</label>
<input type="email" id="email" name="email" required />

<!-- 6. Colour contrast (WCAG AA) -->
<!-- Normal text:   4.5:1 minimum -->
<!-- Large text:    3:1 minimum  -->
```

### Keyboard Navigation Test

```
Tab through your entire page. Check:
□ All interactive elements are reachable
□ Focus order follows visual order
□ Focus indicators are visible (not just :focus, use :focus-visible)
□ Dropdown menus open with keyboard
□ Modals trap focus when open
□ Escape key closes overlays
```

### AI Prompt: Accessibility Audit

```
Analyse this HTML page for accessibility issues. Check:
1. Heading hierarchy — is there exactly one h1, and do h2/h3 follow in order?
2. Alt text — are all images missing alt text?
3. Colour contrast — estimate if text contrasts enough with backgrounds
4. ARIA attributes — are landmark roles correct?
5. Forms — are all inputs labelled?
6. Keyboard navigation — are interactive elements focusable?

Here is my HTML:
[paste HTML]

List every issue found, its severity (high/medium/low), and how to fix it.
```

---

## Deployment Steps

### GitHub Pages (Free)

```bash
# 1. Ensure your project is in a GitHub repository

# 2. If your clone is in the root of the repo:
#    → Go to Settings → Pages
#    → Source: Deploy from a branch
#    → Branch: main, / (root)
#    → Save
#    → Your site is at: https://<username>.github.io/<repo-name>/

# 3. If your clone is in a subfolder (e.g., /clone):
#    → Settings → Pages
#    → Source: Deploy from a branch
#    → Branch: main, /clone
#    → Save
```

### Post-Deployment Verification

```bash
# Check your live URL:
# 1. Visit https://<username>.github.io/<repo-name>/
# 2. Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
# 3. Open DevTools → Console — no errors
# 4. Check all sections render
# 5. Test on mobile (Chrome DevTools device mode)
# 6. Click all links
```

### AI Prompt: Deployment Troubleshooting

```
My GitHub Pages site is not loading correctly.
- URL: [your URL]
- The page shows [describe what you see: blank page, broken styles, 404]

Here is my file structure:
[paste file listing]

What could be wrong and how do I fix it?
```

---

## AI-Assisted Code Review

### AI Prompt: Final Code Review

```
Review my clone project for quality. Check:

HTML:
- Are all tags properly closed?
- Are semantic HTML5 elements used?
- Is there a proper <head> with meta tags?
- Are ARIA attributes used correctly?

CSS:
- Are there any unused styles?
- Is the code DRY (no repeated patterns that could be a class)?
- Are CSS custom properties being used effectively?
- Are transitions smooth (200-400ms)?

General:
- Is the code well-organised?
- Any security concerns?
- Any performance improvements needed?

Here is my code:
[paste HTML]
[paste CSS]
```

### AI Prompt: Code Cleanup

```
Clean up this CSS file:
1. Merge duplicate rules
2. Remove unused properties
3. Add comments to group related styles
4. Suggest a consistent naming convention

[paste CSS]
```

### AI Prompt: Performance Check

```
Analyse this page for performance issues:
1. Are CSS and JS files minifiable?
2. Are images properly sized?
3. Is there render-blocking content that could be deferred?
4. Are fonts loading efficiently?

Page structure:
- [list files/sections]

Give me 3 specific improvements I can make in the next 15 minutes.
```

---

## Submission Guidelines

### What to Submit

1. **GitHub repo URL** with your clone project
2. Your project must include:
   - `index.html` — main page
   - `css/` — stylesheets
   - `assets/` — images and resources
   - `AI.md` — documented AI prompts and results
   - `README.md` — project overview

### `README.md` Template

```markdown
# Clone: [Target Name]

A responsive clone of [Target Name] built for the AI Web Development Program.

## Live Demo

[Link to GitHub Pages]

## Original Target

[Screenshot or link to the original UI being cloned]

## Built With

- HTML5
- CSS3 (with [CSS Framework])
- [AI Tools Used]

## Features

- Responsive design (mobile, tablet, desktop)
- [Feature 1]
- [Feature 2]
- [Feature 3]

## What I Learned

[2-3 sentences about what you learned from this project]

## AI Assistance

See [AI.md](./AI.md) for a full log of AI prompts and outputs used in this project.
```

### `AI.md` Template

```markdown
# AI Prompts & Results

## Planning Phase

### Prompt: Choosing a clone target
**Input:** [prompt text]
**Output:** [summary of AI response]
**What I used:** [how you applied it]

### Prompt: Component tree
**Input:** [prompt text]
**Output:** [summary]
**What I used:** [how you applied it]

## Build Phase

### Prompt: Navbar component
**Input:** [prompt text]
**Output:** [summary]
**What I changed:** [modifications you made]

### Prompt: Responsive grid fix
**Input:** [prompt text]
**Output:** [summary]
**What I changed:** [modifications]

## Refinement Phase

### Prompt: Accessibility audit
**Input:** [prompt text]
**Output:** [issues found]
**Fixes applied:** [what you fixed]

### Prompt: Code review
**Input:** [prompt text]
**Output:** [suggestions]
**Changes made:** [what you changed]

---

## Reflection

What worked well with AI-assisted development:
[2-3 sentences]

What was challenging:
[2-3 sentences]

What I would do differently next time:
[2-3 sentences]
```

### Submission Deadline

**Wednesday, 19 August 2026, 11:59 PM**

### Late Submission Policy

- Up to 24 hours late: 10% penalty
- Up to 48 hours late: 25% penalty
- Beyond 48 hours: not accepted unless prior arrangement

---

## Final Submission Checklist

- [ ] HTML validates with no errors (W3C Validator)
- [ ] All sections from component tree are implemented
- [ ] Responsive at 3 breakpoints (mobile, tablet, desktop)
- [ ] No horizontal scroll on any viewport
- [ ] All links work (internal and external)
- [ ] All images load correctly
- [ ] Alt text on all meaningful images
- [ ] Heading hierarchy is correct (one h1, logical h2/h3)
- [ ] Colour contrast meets WCAG AA
- [ ] Keyboard navigation works (Tab through all elements)
- [ ] Mobile menu opens and closes
- [ ] Hover states on all interactive elements
- [ ] `AI.md` is complete with prompts and reflections
- [ ] `README.md` is complete with live demo link
- [ ] Committed to GitHub
- [ ] Deployed to GitHub Pages
- [ ] Live URL works in incognito/private browsing

---

## Resources

- [W3C HTML Validator](https://validator.w3.org/)
- [WAVE Accessibility Tool](https://wave.webaim.org/)
- [Lighthouse (Chrome DevTools)](https://developer.chrome.com/docs/lighthouse/)
- [Axe DevTools](https://www.deque.com/axe/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [WCAG AA Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [CSS Specificity Calculator](https://specificity.keegan.st/)
