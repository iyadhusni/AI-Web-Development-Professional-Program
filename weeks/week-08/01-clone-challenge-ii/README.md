# Week 8 — Session 1: Clone Challenge II — Building & Refining

**Date:** Saturday, 15 August 2026  
**Duration:** 3 hours  
**Instructor:** Dr Motaz  
**Format:** Hands-on project workshop

---

## Session Objectives

By the end of this session, learners will be able to:
- Build UI components from their component tree using HTML and CSS
- Implement responsive layouts that adapt across mobile, tablet, and desktop
- Apply consistent spacing, typography, and colour using design tokens
- Use AI to debug layout issues, generate missing components, and refine styling
- Document the AI-assisted development process

---

## Agenda (180 min)

| Time | Activity | Description |
|------|----------|-------------|
| 0:00–0:10 | Stand-Up Check-In | Quick progress check, blockers, goals for the session |
| 0:10–0:40 | Building Components I | Header, navigation, hero section — layout, spacing, responsive behaviour |
| 0:40–1:10 | Building Components II | Feature cards, grids, repeated elements — reusable patterns |
| 1:10–1:30 | Responsive Implementation | Media query strategy, breakpoint testing, mobile-first approach |
| 1:30–1:40 | Break | |
| 1:40–2:10 | Building Components III | Complex sections — pricing tables, testimonials, forms |
| 2:10–2:40 | AI-Assisted Refinement | Live debugging, AI prompts for polish, typography and spacing fixes |
| 2:40–2:55 | Peer Review Sprint | Pair up, review each other's progress, give focused feedback |
| 2:55–3:00 | Wrap-Up & Homework | Q&A, checkpoint goals, homework assignment |

---

## Component Development Guide

### Build Order Strategy

Build top-to-bottom, left-to-right, following the visual hierarchy:

```
1. Layout shell     →  container, section wrappers, grid system
2. Navigation       →  navbar, logo, links, mobile toggle
3. Hero             →  headline, subtext, CTAs, background
4. Feature cards    →  grid, card component, repeated elements
5. Complex sections →  pricing, testimonials, forms
6. Footer           →  columns, links, copyright
7. Polish           →  spacing, hover states, transitions, responsive
```

### Component Architecture

Each component should follow this structure:

```html
<!-- Component: FeatureCard -->
<article class="feature-card">
  <div class="feature-card__icon">
    <img src="icon.svg" alt="" aria-hidden="true" />
  </div>
  <h3 class="feature-card__title">Feature Name</h3>
  <p class="feature-card__description">Feature description text here.</p>
</article>
```

```css
/* Component: FeatureCard */
.feature-card {
  padding: 2rem;
  border-radius: var(--radius, 8px);
  border: 1px solid var(--color-border, #e5e7eb);
  background: var(--color-bg, #fff);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.feature-card__icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}

.feature-card__title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-text, #1a1a2e);
}

.feature-card__description {
  font-size: 0.9rem;
  color: var(--color-text-light, #6b7280);
  line-height: 1.6;
}
```

---

## Activity 1: Building Core Sections

### Navigation — Complete Example

```html
<header class="site-header">
  <div class="container">
    <nav class="navbar" aria-label="Main navigation">
      <a href="#" class="navbar-brand">
        <img src="assets/images/logo.svg" alt="Company Name" height="32" />
      </a>

      <button class="navbar-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <ul class="navbar-links" id="navbarLinks" role="list">
        <li><a href="#features" class="nav-link">Features</a></li>
        <li><a href="#testimonials" class="nav-link">Testimonials</a></li>
        <li><a href="#pricing" class="nav-link">Pricing</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>

      <div class="navbar-actions">
        <a href="#" class="btn btn-ghost">Log In</a>
        <a href="#" class="btn btn-primary btn-sm">Get Started</a>
      </div>
    </nav>
  </div>
</header>
```

```css
/* Navbar */
.site-header {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  z-index: 100;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  gap: 1.5rem;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.navbar-links {
  display: flex;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: var(--color-text-light);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-text);
  background: var(--color-bg-alt);
}

.navbar-actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger-line {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

@media (max-width: 768px) {
  .navbar-toggle {
    display: flex;
  }

  .navbar-links {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: white;
    padding: 0.5rem;
    border-bottom: 1px solid var(--color-border);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .navbar-links.open {
    display: flex;
  }

  .navbar-actions {
    display: none;
  }
}
```

### Hero Section — Complete Example

```html
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <span class="hero-badge">🚀 New: AI-Powered Features</span>
      <h1 class="hero-title">Build Products Teams Love</h1>
      <p class="hero-subtitle">
        The all-in-one platform for planning, building, and shipping
        great software — faster than ever.
      </p>
      <div class="hero-actions">
        <a href="#" class="btn btn-primary btn-lg">Start Free Trial</a>
        <a href="#" class="btn btn-secondary btn-lg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <polygon points="5,3 19,12 5,21" fill="currentColor" />
          </svg>
          Watch Demo
        </a>
      </div>
      <div class="hero-stats">
        <div class="stat"><strong>10K+</strong> <span>Teams</span></div>
        <div class="stat"><strong>99.9%</strong> <span>Uptime</span></div>
        <div class="stat"><strong>4.9★</strong> <span>Rating</span></div>
      </div>
    </div>
    <div class="hero-visual">
      <img src="assets/images/hero-dashboard.png" alt="Product dashboard screenshot" class="hero-image" />
    </div>
  </div>
</section>
```

```css
.hero {
  padding: 5rem 0;
  overflow: hidden;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  background: var(--color-primary);
  color: white;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  width: fit-content;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--color-text-light);
  line-height: 1.6;
  max-width: 540px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-stats {
  display: flex;
  gap: 2.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat strong {
  font-size: 1.5rem;
  font-weight: 700;
}

.stat span {
  font-size: 0.85rem;
  color: var(--color-text-light);
}

.hero-image {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12);
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 0;
  }

  .hero .container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-stats {
    gap: 1.5rem;
    flex-wrap: wrap;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero .container {
    gap: 2rem;
  }
}
```

---

## Activity 2: Responsive Implementation Strategy

### Mobile-First Approach

Write base styles for mobile, then add breakpoints for larger screens:

```css
/* ====== BASE (mobile first) ====== */
.features-grid {
  display: grid;
  grid-template-columns: 1fr;      /* single column on mobile */
  gap: 1rem;
}

/* ====== TABLET (≥ 768px) ====== */
@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);  /* 2 columns */
    gap: 1.5rem;
  }
}

/* ====== DESKTOP (≥ 1024px) ====== */
@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);  /* 3 columns */
    gap: 2rem;
  }
}
```

### Breakpoint Reference

| Breakpoint | Width | Target Device |
|-----------|-------|---------------|
| Mobile | < 768px | Phones |
| Tablet | 768–1024px | iPads, small screens |
| Desktop | > 1024px | Laptops, desktops |
| Wide | > 1400px | Large monitors |

### Responsive Testing Checklist

- [ ] No horizontal scroll on any viewport
- [ ] Text is readable without zooming
- [ ] Navigation collapses to hamburger on mobile
- [ ] Grids reduce to fewer columns on smaller screens
- [ ] Images scale down proportionally (`max-width: 100%`)
- [ ] Touch targets are ≥ 44px on mobile
- [ ] Forms remain usable at all sizes
- [ ] Content doesn't overflow containers

---

## Activity 3: AI-Assisted Refinement

### Debugging Layout Issues
```
My layout is broken at [viewport size]. The [section name] should show
[X columns] but it shows [Y columns]. Here is my CSS:

[paste relevant CSS]

What's wrong and how do I fix it?
```

### Generating Missing Components
```
I need a testimonial carousel component for my clone of [Target Name].
Requirements:
- Shows one testimonial at a time on mobile
- Shows 2-3 on tablet/desktop
- Has navigation dots or arrows
- Each card has: quote, avatar, name, role

Generate the HTML and CSS using [Bootstrap / Tailwind / custom CSS].
```

### Spacing & Typography Refinement
```
Review my clone page for consistency:
1. Are section headings the same size across all sections?
2. Is vertical spacing consistent between sections?
3. Are font sizes and line heights proportional?
4. Do all cards/pricing boxes have the same padding?

Here is my CSS:
[paste CSS]

Give me specific fixes to make the spacing and typography consistent.
```

### Hover & Interaction Polish
```
Add smooth hover effects to these elements in my clone:
1. Cards — lift up slightly with shadow
2. Buttons — slight scale or colour shift
3. Navigation links — underline or background change
4. Social media icons — colour change

Generate the CSS for these interactions. Use transitions of 200-300ms.
```

### Colour & Contrast Tuning
```
Analyse the colours in my clone for accessibility:
- Is there sufficient contrast between text and backgrounds?
- Do hover states have enough contrast?
- Are my link colours distinguishable from body text?

Here are my CSS custom properties:
[paste :root variables]

Suggest improvements to meet WCAG AA contrast ratios.
```

---

## Starter Code: Clone Builder

### `index.html` — Component Assembly Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Clone — Week 8 Build</title>
  <meta name="description" content="Building my UI clone" />

  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="css/variables.css" />
  <link rel="stylesheet" href="css/components.css" />
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <!-- ===== HEADER ===== -->
  <header class="site-header"><!-- nav --></header>

  <main>
    <!-- ===== HERO ===== -->
    <section id="hero" class="hero"><!-- hero content --></section>

    <!-- ===== FEATURES ===== -->
    <section id="features" class="section">
      <div class="container">
        <h2 class="section-title">Features</h2>
        <div class="features-grid">
          <!-- Feature cards inserted here -->
        </div>
      </div>
    </section>

    <!-- ===== TESTIMONIALS ===== -->
    <section id="testimonials" class="section section--alt">
      <div class="container">
        <h2 class="section-title">What People Say</h2>
        <div class="testimonials-grid">
          <!-- Testimonial cards -->
        </div>
      </div>
    </section>

    <!-- ===== PRICING ===== -->
    <section id="pricing" class="section">
      <div class="container">
        <h2 class="section-title">Pricing</h2>
        <div class="pricing-grid">
          <!-- Pricing cards -->
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section id="cta" class="section section--accent">
      <div class="container cta-content">
        <h2 class="cta-title">Ready to get started?</h2>
        <p class="cta-text">Join thousands of teams already building better.</p>
        <a href="#" class="btn btn-primary btn-lg">Start Free Trial</a>
      </div>
    </section>
  </main>

  <!-- ===== FOOTER ===== -->
  <footer class="site-footer"><!-- footer content --></footer>

  <script>
    // Mobile nav toggle
    const toggle = document.querySelector('.navbar-toggle');
    const links = document.querySelector('.navbar-links');
    toggle?.addEventListener('click', () => {
      const isOpen = links?.classList.toggle('open');
      toggle?.setAttribute('aria-expanded', isOpen ?? false);
    });

    // Close menu on link click (mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        links?.classList.remove('open');
        toggle?.setAttribute('aria-expanded', 'false');
      });
    });
  </script>
</body>
</html>
```

### `css/components.css` — Component Styles

```css
/* ===== BUTTONS ===== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  line-height: 1.4;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: var(--radius, 8px);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.btn-primary:hover {
  background: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(108, 92, 231, 0.4);
}

.btn-secondary {
  background: white;
  color: var(--color-text);
  border-color: var(--color-border);
}

.btn-secondary:hover {
  border-color: var(--color-text-light);
  background: var(--color-bg-alt);
}

.btn-ghost {
  background: transparent;
  color: var(--color-text-light);
  border-color: transparent;
}

.btn-ghost:hover {
  color: var(--color-text);
  background: var(--color-bg-alt);
}

.btn-sm { padding: 0.5rem 1rem; font-size: 0.85rem; }
.btn-lg { padding: 0.875rem 2rem; font-size: 1rem; }

/* ===== CARDS ===== */
.card {
  padding: 2rem;
  border-radius: var(--radius, 8px);
  background: var(--color-bg, white);
  border: 1px solid var(--color-border, #e5e7eb);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md, 0 4px 12px rgba(0, 0, 0, 0.08));
}

.card__icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
  border-radius: 12px;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.card__title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card__text {
  font-size: 0.9rem;
  color: var(--color-text-light);
  line-height: 1.6;
}

/* ===== SECTION ===== */
.section {
  padding: 5rem 0;
}

.section--alt {
  background: var(--color-bg-alt, #f9fafb);
}

.section--accent {
  background: var(--color-primary);
  color: white;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.75rem;
}

.section-subtitle {
  text-align: center;
  color: var(--color-text-light);
  margin-bottom: 3rem;
  font-size: 1.1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* ===== GRIDS ===== */
.features-grid,
.pricing-grid,
.testimonials-grid {
  display: grid;
  gap: 2rem;
}

.features-grid { grid-template-columns: repeat(3, 1fr); }
.pricing-grid { grid-template-columns: repeat(3, 1fr); max-width: 900px; margin: 0 auto; }
.testimonials-grid { grid-template-columns: repeat(3, 1fr); }

/* ===== CTA SECTION ===== */
.cta-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
}

.cta-text {
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 500px;
}

/* ===== FOOTER ===== */
.site-footer {
  background: var(--color-text);
  color: white;
  padding: 4rem 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
}

.footer-brand p {
  margin-top: 1rem;
  color: #9ca3af;
  font-size: 0.85rem;
}

.footer-column h4 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  color: #9ca3af;
}

.footer-column ul {
  list-style: none;
}

.footer-column a {
  color: #d1d5db;
  text-decoration: none;
  font-size: 0.9rem;
  line-height: 2.2;
  transition: color 0.2s;
}

.footer-column a:hover {
  color: white;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .hero .container {
    grid-template-columns: 1fr;
  }

  .features-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .section {
    padding: 3rem 0;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}
```

---

## Peer Review Checklist

Review a classmate's clone and give feedback on:

- [ ] HTML uses semantic elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- [ ] Navigation works on mobile (hamburger menu)
- [ ] Grids are responsive (correct column count at each breakpoint)
- [ ] Colours and fonts are consistent across sections
- [ ] Hover states exist on interactive elements
- [ ] Images have `alt` text (or `aria-hidden="true"` for decorative)
- [ ] No horizontal scroll on any viewport
- [ ] Class naming is consistent (BEM or similar)

**Feedback format:** "I like... / I wonder... / What if..."

---

## Homework

1. **Build all sections** — Complete every section from your component tree. By end of homework, your clone should have all major sections built with content
2. **Implement responsive breakpoints** — Ensure the layout works at mobile (≤768px), tablet (768–1024px), and desktop (≥1024px)
3. **Add interactions** — Implement hover effects on cards, buttons, and navigation links. Add a mobile menu toggle
4. **Document AI prompts** — Update `AI.md` with all prompts used for building and refining. For each prompt, note what worked and what you changed
5. **Commit progress** — Make regular Git commits with descriptive messages (at least 3 commits this week)
6. **Come prepared** — Session 2 will cover final polish, testing, accessibility, and deployment. Have your clone mostly complete

---

## Resources

- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Responsive Design Patterns](https://responsivepatterns.com/)
- [BEM Naming Convention](https://getbem.com/)
- [CSS Transition Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [Intersection Observer for Scroll Effects](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
