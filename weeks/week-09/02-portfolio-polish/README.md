# Week 9, Session 2: Portfolio Polish

- **Date:** Wednesday, 26 August 2026
- **Duration:** 2 hours
- **Instructor:** Dr Iyad
- **Topics:** Contact form, animations, performance/accessibility audit with AI

---

## Objectives

By the end of this session, students will be able to:

- Build a functional contact form with HTML, CSS, and JavaScript
- Add CSS animations and transitions to a portfolio
- Run a performance audit with AI guidance
- Run an accessibility audit with AI guidance
- Finalize and publish a polished portfolio

---

## Agenda (120 minutes)

| Time | Duration | Activity |
|------|----------|----------|
| 0:00 | 10 min | Welcome & review of Week 9 Session 1 homework |
| 0:10 | 30 min | Lecture + Demo: Contact form (HTML/CSS/JS) |
| 0:40 | 20 min | Lecture: CSS animations & transitions |
| 1:00 | 15 min | Lab: Add animations to portfolio |
| 1:15 | 5 min | Break |
| 1:20 | 25 min | Demo: Performance & accessibility audit with AI |
| 1:45 | 15 min | Portfolio finalization checklist & time to polish |
| 2:00 | — | Wrap-up & homework |

---

## Contact Form: HTML / CSS / JS

### HTML

```html
<section id="contact" class="contact">
  <div class="container">
    <h2>Get In Touch</h2>
    <p class="contact__intro">
      Have a project in mind? Send me a message and I'll get back to you.
    </p>

    <form id="contactForm" class="contact__form" novalidate>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autocomplete="name"
          aria-describedby="nameError"
        />
        <span id="nameError" class="form-error" role="alert"></span>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autocomplete="email"
          aria-describedby="emailError"
        />
        <span id="emailError" class="form-error" role="alert"></span>
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          aria-describedby="messageError"
        ></textarea>
        <span id="messageError" class="form-error" role="alert"></span>
      </div>

      <button type="submit" class="btn btn--submit">Send Message</button>
    </form>

    <div id="formSuccess" class="form-success" hidden>
      <p>Thank you! Your message has been sent successfully.</p>
    </div>
  </div>
</section>
```

### CSS

```css
/* ── Contact Form ── */
.contact__form {
  max-width: 540px;
  margin: 2rem auto 0;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.375rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

/* Error state */
.form-group input[aria-invalid="true"],
.form-group textarea[aria-invalid="true"] {
  border-color: #dc2626;
}

.form-error {
  display: block;
  color: #dc2626;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  min-height: 1.25rem;
}

.form-success {
  max-width: 540px;
  margin: 2rem auto 0;
  padding: 1.5rem;
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  border-radius: var(--radius);
  color: #065f46;
  text-align: center;
}

.btn--submit {
  width: 100%;
  padding: 0.875rem;
  font-size: 1.05rem;
  cursor: pointer;
  border: none;
}

.btn--submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
```

### JavaScript

```js
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

const validators = {
  name: (v) => v.trim().length >= 2 || 'Name must be at least 2 characters.',
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Enter a valid email address.',
  message: (v) => v.trim().length >= 10 || 'Message must be at least 10 characters.',
};

function validateField(field) {
  const errorEl = document.getElementById(field.id + 'Error');
  const validate = validators[field.name];
  const result = validate(field.value);
  if (result === true) {
    errorEl.textContent = '';
    field.removeAttribute('aria-invalid');
    return true;
  }
  errorEl.textContent = result;
  field.setAttribute('aria-invalid', 'true');
  return false;
}

// Real-time validation on blur
['name', 'email', 'message'].forEach((id) => {
  const field = document.getElementById(id);
  field.addEventListener('blur', () => validateField(field));
});

// Submit handler
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  let allValid = true;
  ['name', 'email', 'message'].forEach((id) => {
    if (!validateField(document.getElementById(id))) allValid = false;
  });

  if (!allValid) return;

  const submitBtn = form.querySelector('.btn--submit');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      form.reset();
      form.hidden = true;
      successMsg.hidden = false;
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch {
    alert('Network error. Please check your connection.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }
});
```

> **Note:** Replace `YOUR_FORM_ID` with a real Formspree endpoint (formspree.io) or use a serverless function.

---

## CSS Animations

### Transition Basics

```css
/* Smooth hover on buttons */
.btn {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}
```

### Keyframe Animation: Fade-In on Scroll

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeInUp 0.6s ease forwards;
}
```

Add with Intersection Observer:

```js
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.card, .skills__item').forEach((el) => {
  observer.observe(el);
});
```

### Animation: Staggered List

```css
.skills__item {
  opacity: 0;
}

.skills__item:nth-child(1) { animation-delay: 0s; }
.skills__item:nth-child(2) { animation-delay: 0.1s; }
.skills__item:nth-child(3) { animation-delay: 0.2s; }
.skills__item:nth-child(4) { animation-delay: 0.3s; }
.skills__item:nth-child(5) { animation-delay: 0.4s; }
```

### Performance Tips for Animations

| Do | Don't |
|----|-------|
| Animate `transform` and `opacity` | Animate `width`, `height`, `top`, `left` |
| Use `will-change` sparingly | Overuse `will-change` (uses more memory) |
| Prefer CSS animations over JS | Animate on every frame with JS |
| Use `@media (prefers-reduced-motion)` | Force motion on users who prefer static |

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## AI Prompts for Performance & Accessibility Audit

### Web Assistant (ChatGPT, Claude, Gemini)

**Performance Audit** — paste your URL or code:
```
Act as a web performance auditor. Review the following HTML and CSS code for
[portfolio page URL or paste code]. Identify:

1. Largest Contentful Paint (LCP) issues
2. Render-blocking resources
3. Image optimization opportunities
4. Unused CSS or JavaScript
5. Suggestions for Core Web Vitals improvement

Output a numbered list of issues ranked by priority (P1 = critical, P3 = low).
For each issue, provide a specific fix with code example.

Code:

[paste your HTML/CSS]
```

**Accessibility Audit** — paste your code:
```
Act as a WCAG 2.2 accessibility auditor. Review the following HTML and CSS code for
[portfolio page URL or paste code]. Check against:

1. Perceivable — missing alt text, colour contrast < 4.5:1, text in images
2. Operable — keyboard navigation, focus indicators, skip links
3. Understandable — form labels, error messages, consistent navigation
4. Robust — semantic HTML, ARIA attributes, valid markup

Output a table with: Issue | WCAG Criterion | Severity | Fix

Code:

[paste your HTML/CSS]
```

**Fix-It:**
```
Given these accessibility issues from the audit, rewrite the affected HTML and CSS to fix them:

Issues:
1. [issue 1]
2. [issue 2]

Apply fixes and return the corrected code blocks.
```

**Lighthouse Automation:**
```
Write a Node.js script using Lighthouse CLI that:
- Runs a performance and accessibility audit on https://my-portfolio.example.com
- Saves results as JSON
- Fails the script if Performance score < 80 or Accessibility score < 90
- Logs a summary table to the console

Use the latest Lighthouse API.
```

### CLI / IDE Agent (OpenCode, Claude Code, Copilot)

**Performance Audit:** run from your portfolio project root:
```
Read all HTML, CSS, and JS files in this project. Act as a web performance auditor. Identify: LCP issues, render-blocking resources, image optimisation opportunities, unused CSS/JS, and Core Web Vitals improvements. Output a numbered list ranked by priority with specific fix code for each.
```

**Accessibility Audit:**
```
Read all HTML files in this project. Act as a WCAG 2.2 accessibility auditor. Check against: Perceivable (alt text, colour contrast), Operable (keyboard nav, focus indicators, skip links), Understandable (form labels, error messages), Robust (semantic HTML, ARIA). Output a table with Issue | WCAG Criterion | Severity | Fix.
```

**Fix-It:**
```
Read the HTML and CSS files. I have these accessibility issues: [list issues]. Fix them and apply the corrected code to the files. Show the diff for each fix.
```

**Lighthouse Automation:**
```
Create a script called lighthouse-audit.js that runs Lighthouse CLI on my portfolio URL, saves results as JSON, fails if Performance < 80 or Accessibility < 90, and logs a summary table. Use the latest Lighthouse API.
```

---

## Portfolio Finalization Checklist

### Content

- [ ] Bio is up to date and professional
- [ ] All project descriptions are clear and typo-free
- [ ] Alt text is present on every image
- [ ] Resume/CV PDF is linked (optional)
- [ ] Social links (GitHub, LinkedIn) are correct

### Design & Code

- [ ] Consistent spacing, fonts, and colours throughout
- [ ] Mobile layout works (test at 375px width)
- [ ] Tablet layout works (test at 768px width)
- [ ] Desktop layout works (test at 1280px+ width)
- [ ] All links open in correct tab (target="_blank" for external)
- [ ] Contact form submits correctly (test it!)
- [ ] No console errors in DevTools

### Performance

- [ ] Images are compressed (use Squoosh, TinyPNG, or AVIF/WebP)
- [ ] Lighthouse Performance score ≥ 80
- [ ] No render-blocking external resources
- [ ] CSS and JS are minified (optional for this course)

### Accessibility

- [ ] Lighthouse Accessibility score ≥ 90
- [ ] All images have meaningful alt text
- [ ] Colour contrast ratio ≥ 4.5:1 for normal text
- [ ] Focus indicators visible on all interactive elements
- [ ] Form inputs have labels
- [ ] Page title is descriptive
- [ ] Language attribute set on `<html>`

### Deployment

- [ ] Deployed to GitHub Pages, Netlify, or Vercel
- [ ] Custom domain configured (optional)
- [ ] Redirects HTTP to HTTPS
- [ ] 404 page is handled

---

## Homework

1. **Add a contact form** to your portfolio (must include validation and success message)
2. **Add at least 3 CSS animations/transitions** (fade-in on scroll, hover effects, etc.)
3. **Run a performance audit** using the AI prompt template — fix the top 3 issues
4. **Run an accessibility audit** using the AI prompt template — fix all issues found
5. **Respect `prefers-reduced-motion`** in your CSS
6. **Re-deploy** your polished portfolio
7. **Submit** both your deployed URL and a screenshot of your Lighthouse scores (Performance + Accessibility)
