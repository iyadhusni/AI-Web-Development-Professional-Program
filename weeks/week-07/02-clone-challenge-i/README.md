# Week 7 — Session 2: Clone Challenge I — Planning & Scaffolding

**Date:** Wednesday, 12 August 2026  
**Duration:** 2 hours  
**Instructor:** Dr Motaz  
**Format:** Workshop with project planning

---

## Session Objectives

By the end of this session, learners will be able to:
- Choose an appropriate UI to clone and scope the project realistically
- Break down a UI into a component tree and plan the build order
- Scaffold a project with proper file/folder structure
- Use AI to generate starter code and plan the implementation
- Set up version control and deployment pipeline from day one

---

## Agenda (120 min)

| Time | Activity | Description |
|------|----------|-------------|
| 0:00–0:10 | Challenge Overview | Explain the Clone Challenge, goals, scoring rubric, timeline |
| 0:10–0:30 | Choosing & Scoping a UI | Guide to selecting a clone target, avoiding scope creep, before/after examples |
| 0:30–0:50 | Component Tree Breakdown | Live analysis of a UI → component hierarchy, layout zones, data flow |
| 0:50–1:00 | Break | |
| 1:00–1:20 | Project Scaffolding | File structure setup, HTML shell, CSS framework import, Git init |
| 1:20–1:40 | AI-Assisted Planning | Using AI to generate component trees, suggest file structure, plan responsive breakpoints |
| 1:40–1:55 | Scaffold Sprint | Learners scaffold their own project with AI help |
| 1:55–2:00 | Wrap-Up & Homework | Q&A, homework assignment |

---

## Clone Challenge Overview

### What is the Clone Challenge?

You will build a **responsive clone of a real user interface** — a landing page, dashboard, blog layout, or similar — using HTML, CSS, and the tools you've learned. The goal is not pixel-perfect reproduction but **demonstrating sound frontend practices**: semantic HTML, responsive design, component organisation, and AI-assisted development.

### Scoring Rubric

| Criteria | Weight | Description |
|----------|--------|-------------|
| Visual Fidelity | 25% | How closely the clone matches the target UI |
| Responsiveness | 20% | Works on mobile, tablet, and desktop |
| Code Quality | 20% | Semantic HTML, clean CSS, organised files |
| Component Structure | 15% | Logical component breakdown, reusable patterns |
| AI-Assisted Process | 10% | Effective use of AI prompts documented in `AI.md` |
| Deployment | 10% | Published on GitHub Pages |

---

## Choosing & Scoping a UI

### Good Clone Targets

| Target | Difficulty | Reason |
|--------|------------|--------|
| Notion-like web app landing page | Easy–Medium | Single page, clear sections, responsive patterns |
| Dashboard (e.g., GitHub, Trello) | Medium | Grid layout, cards, sidebar, data tables |
| Blog (e.g., Medium, Dev.to) | Medium | Article cards, header, sidebar, responsive grid |
| Pricing page (e.g., Apple, Figma) | Easy–Medium | Comparison table, cards, CTAs |
| Portfolio site | Easy | Single page, grid, personal branding |

### How to Choose

```
Ask yourself:
1. Can I see the UI? — Pick something visible without a login wall
2. Is it 1-2 pages? — Avoid multi-page apps with complex state
3. Can I build it in ~5 hours? — Be realistic about scope
4. Will I learn something? — Pick something slightly above your comfort zone
```

### Scope Checklist

- [ ] Single page (or 2 pages max)
- [ ] No authentication or backend needed
- [ ] Static content (hardcoded, no API calls)
- [ ] Max 6–8 distinct sections/components
- [ ] Responsive at 3 breakpoints (mobile, tablet, desktop)

---

## Activity 1: Component Tree Breakdown

### Example: Cloning a Landing Page

**Target:** Linear.app landing page (simplified)

```
Page: Index
├── Navbar
│   ├── Logo
│   ├── NavLinks (Products, Solutions, Docs, Pricing)
│   ├── CTAButton ("Try Free")
│   └── MobileMenuToggle
├── Hero
│   ├── Badge ("New: AI-powered features")
│   ├── Heading
│   ├── Subheading
│   ├── CTAButtons (Get Started, Watch Demo)
│   └── HeroImage / Illustration
├── FeaturesSection
│   ├── SectionHeading
│   └── FeatureGrid
│       ├── FeatureCard (×6)
│       │   ├── Icon
│       │   ├── Title
│       │   └── Description
├── Testimonials
│   ├── SectionHeading
│   └── Carousel / Grid
│       └── TestimonialCard (×3)
│           ├── Quote
│           ├── AuthorAvatar
│           ├── AuthorName
│           └── AuthorRole
├── PricingSection
│   ├── SectionHeading
│   └── PricingCards
│       ├── PricingCard (Free)
│       ├── PricingCard (Pro) — featured
│       └── PricingCard (Enterprise)
├── Footer
│   ├── FooterColumns (Product, Company, Resources, Legal)
│   └── CopyrightBar
│       ├── SocialLinks
│       └── Copyright
```

### Component Tree Template

```
Page: [Name]
└── [Section]
    └── [Component]
        └── [Element]
```

Use this to plan your own clone. Identify:
- **Layout zones** — header, main, footer
- **Repeated components** — cards, buttons, list items
- **Responsive variants** — what changes at each breakpoint

---

## Activity 2: Project Scaffolding

### Recommended File Structure

```
my-clone/
├── index.html
├── css/
│   ├── style.css          # custom styles
│   └── variables.css       # CSS custom properties
├── assets/
│   └── images/            # screenshots, icons, placeholders
├── AI.md                  # documented AI prompts and results
└── README.md              # project overview
```

If using a build tool:
```
my-clone/
├── src/
│   ├── index.html
│   ├── css/
│   │   ├── style.css
│   │   └── variables.css
│   └── assets/
│       └── images/
├── dist/                  # built output (gitignored)
├── .gitignore
├── package.json
├── tailwind.config.js     # if using Tailwind CLI
└── README.md
```

### Starter HTML Shell

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Clone: [Target Name]</title>
  <meta name="description" content="A responsive clone of [Target Name]" />

  <!-- CSS Framework (choose one) -->
  <!-- Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <!-- OR Tailwind -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Custom Styles -->
  <link rel="stylesheet" href="css/variables.css" />
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <!-- Navbar -->
  <header>
    <nav><!-- ... --></nav>
  </header>

  <!-- Main Content -->
  <main>
    <!-- Hero Section -->
    <section id="hero"><!-- ... --></section>

    <!-- Features Section -->
    <section id="features"><!-- ... --></section>

    <!-- Testimonials Section -->
    <section id="testimonials"><!-- ... --></section>

    <!-- Pricing Section -->
    <section id="pricing"><!-- ... --></section>
  </main>

  <!-- Footer -->
  <footer><!-- ... --></footer>

  <!-- Framework JS (Bootstrap only) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### `css/variables.css` — Design Tokens

```css
:root {
  /* Colours */
  --color-primary: #6C5CE7;
  --color-primary-dark: #5A4BD1;
  --color-secondary: #00CEC9;
  --color-text: #1a1a2e;
  --color-text-light: #6b7280;
  --color-bg: #ffffff;
  --color-bg-alt: #f9fafb;
  --color-border: #e5e7eb;

  /* Typography */
  --font-primary: 'Inter', system-ui, -apple-system, sans-serif;
  --font-display: 'Poppins', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;

  /* Layout */
  --max-width: 1200px;
  --border-radius: 8px;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
}
```

### `css/style.css` — Base Styles

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap');

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-primary);
  color: var(--color-text);
  background: var(--color-bg);
  line-height: 1.6;
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-md);
}

/* Utility classes */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

---

You can run the prompts below with any AI assistant (ChatGPT, Claude, Gemini) or directly in your terminal using **OpenCode** — an open-source coding agent that can generate files, scaffold projects, and run Git commands based on natural language instructions.

## AI Prompts for Scaffolding & Initial Build

### Web Assistant (ChatGPT, Claude, Gemini)

#### Choosing a Clone Target
```
I'm doing a UI Clone Challenge for a web development course. I need to
choose a real website to clone. Suggest 5 good options at a [beginner /
intermediate] level. For each option, tell me:
1. What makes it a good clone target
2. The main sections/components I'd need to build
3. Estimated difficulty (easy/medium/hard)
4. What I would learn from cloning it
```

### Component Tree Generation
```
I'm cloning the [Target Name] landing page. Here is a description of
what it contains:
[describe the page sections]

Generate a component tree showing:
1. All sections and their hierarchy
2. Nested components within each section
3. Repeated elements (cards, list items, etc.)
4. State variants (hover, active, mobile menu open)

Format it as a tree diagram with indentation.
```

### HTML Scaffolding
```
Generate a complete HTML scaffold for a [Target Name] clone.
The page should include these sections:
1. Navigation bar with logo and links
2. Hero section with heading, subheading, and CTA buttons
3. Features grid (3×2)
4. Testimonials carousel
5. Pricing table (3 columns)
6. Footer with links and copyright

Use [Bootstrap / Tailwind] classes.
Make the structure semantic HTML5.
Add comments indicating where to insert content.
```

### Responsive Breakpoint Planning
```
I'm cloning a [Target Name] page. Here is my component tree:
[component tree]

For each section, describe how the layout should change at these breakpoints:
- Mobile (< 640px): single column, stacked
- Tablet (640–1024px): 2 columns
- Desktop (> 1024px): full layout with sidebar/grid

Give me the responsive CSS strategy for each section.
```

#### Git Setup Prompt
```
I'm starting a UI clone project. Walk me through:
1. Initialising a Git repo
2. Creating a .gitignore for a static site (no build tools)
3. Making the first commit
4. Creating a GitHub repo and pushing
5. Enabling GitHub Pages
```

### CLI / IDE Agent (OpenCode, Claude Code, Copilot)

**Choosing a Clone Target:**
```
I'm doing a UI Clone Challenge for a web development course. Suggest 5 good options at a [beginner / intermediate] level. For each option, tell me: what makes it a good clone target, the main sections/components I'd need to build, estimated difficulty, and what I'd learn.
```

**Component Tree Generation:**
```
I'm cloning [Target Name]'s landing page. Here is a description of what it contains: [describe sections]. Generate a component tree showing all sections and their hierarchy, nested components, repeated elements, and state variants (hover, active, mobile menu open). Format as a tree diagram.
```

**HTML Scaffolding:**
```
Create a complete HTML scaffold for a [Target Name] clone in index.html. Include: navigation bar with logo/links, hero section with heading/subheading/CTA, features grid (3×2), testimonials carousel, pricing table (3 columns), footer. Use [Bootstrap / Tailwind]. Make structure semantic HTML5 with comments. Modify index.html.
```

**Responsive Breakpoint Planning:**
```
Read the component tree in index.html. For each section, describe how the layout should change at: mobile < 640px (single column), tablet 640–1024px (2 columns), desktop > 1024px (full layout). Give me the responsive CSS strategy for each section.
```

**Git Setup:**
```
Initialise a Git repo in this project, create a .gitignore for a static site, make the first commit, create a GitHub repo, push, and enable GitHub Pages. Walk me through each step with the exact commands.
```

---

## Starter Template

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Clone Project</title>
  <meta name="description" content="UI clone challenge project" />

  <!-- Choose one framework -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"> -->

  <link rel="stylesheet" href="css/variables.css" />
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <header>
    <nav class="navbar">
      <div class="container navbar-inner">
        <a href="#" class="logo">CloneProject</a>
        <ul class="nav-links" id="navLinks">
          <li><a href="#hero">Hero</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button class="mobile-menu-btn" aria-label="Toggle menu" id="menuToggle">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  </header>

  <main>
    <section id="hero" class="hero-section">
      <div class="container hero-content">
        <span class="hero-badge">New: AI-Powered Features</span>
        <h1 class="hero-title">Build Better Products Faster</h1>
        <p class="hero-subtitle">The all-in-one platform for modern teams to plan, build, and ship together.</p>
        <div class="hero-actions">
          <a href="#" class="btn btn-primary">Get Started Free</a>
          <a href="#" class="btn btn-secondary">Watch Demo</a>
        </div>
      </div>
    </section>

    <section id="features" class="section">
      <div class="container">
        <h2 class="section-title">Everything you need</h2>
        <p class="section-subtitle">Powerful features to help your team move faster.</p>
        <div class="features-grid">
          <article class="feature-card">
            <div class="feature-icon"><!-- icon --></div>
            <h3 class="feature-title">Feature One</h3>
            <p class="feature-desc">Description of this feature and its benefits.</p>
          </article>
          <article class="feature-card">
            <div class="feature-icon"><!-- icon --></div>
            <h3 class="feature-title">Feature Two</h3>
            <p class="feature-desc">Description of this feature and its benefits.</p>
          </article>
          <article class="feature-card">
            <div class="feature-icon"><!-- icon --></div>
            <h3 class="feature-title">Feature Three</h3>
            <p class="feature-desc">Description of this feature and its benefits.</p>
          </article>
          <article class="feature-card">
            <div class="feature-icon"><!-- icon --></div>
            <h3 class="feature-title">Feature Four</h3>
            <p class="feature-desc">Description of this feature and its benefits.</p>
          </article>
          <article class="feature-card">
            <div class="feature-icon"><!-- icon --></div>
            <h3 class="feature-title">Feature Five</h3>
            <p class="feature-desc">Description of this feature and its benefits.</p>
          </article>
          <article class="feature-card">
            <div class="feature-icon"><!-- icon --></div>
            <h3 class="feature-title">Feature Six</h3>
            <p class="feature-desc">Description of this feature and its benefits.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="pricing" class="section section-alt">
      <div class="container">
        <h2 class="section-title">Simple, transparent pricing</h2>
        <div class="pricing-grid">
          <div class="pricing-card">
            <h3 class="pricing-name">Free</h3>
            <p class="pricing-price">$0 <span>/month</span></p>
            <ul class="pricing-features">
              <li>Up to 3 projects</li>
              <li>Basic analytics</li>
              <li>2 team members</li>
            </ul>
            <a href="#" class="btn btn-outline">Get Started</a>
          </div>
          <div class="pricing-card featured">
            <h3 class="pricing-name">Pro</h3>
            <p class="pricing-price">$29 <span>/month</span></p>
            <ul class="pricing-features">
              <li>Unlimited projects</li>
              <li>Advanced analytics</li>
              <li>Unlimited team members</li>
              <li>Priority support</li>
            </ul>
            <a href="#" class="btn btn-primary">Get Started</a>
          </div>
          <div class="pricing-card">
            <h3 class="pricing-name">Enterprise</h3>
            <p class="pricing-price">$99 <span>/month</span></p>
            <ul class="pricing-features">
              <li>Everything in Pro</li>
              <li>Custom integrations</li>
              <li>Dedicated support</li>
              <li>SLA guarantee</li>
            </ul>
            <a href="#" class="btn btn-outline">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-brand">
        <a href="#" class="logo">CloneProject</a>
        <p>&copy; 2026 CloneProject. All rights reserved.</p>
      </div>
      <div class="footer-links">
        <div class="footer-column">
          <h4>Product</h4>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Docs</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  <script>
    document.getElementById('menuToggle')?.addEventListener('click', () => {
      document.getElementById('navLinks')?.classList.toggle('open');
    });
  </script>
</body>
</html>
```

### `css/style.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --primary: #6C5CE7;
  --primary-dark: #5A4BD1;
  --text: #1a1a2e;
  --text-light: #6b7280;
  --bg: #ffffff;
  --bg-alt: #f9fafb;
  --border: #e5e7eb;
  --max-width: 1200px;
  --radius: 8px;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  color: var(--text);
  line-height: 1.6;
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  z-index: 100;
}

.navbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-light);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color var(--transition-fast);
}

.nav-links a:hover {
  color: var(--text);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.mobile-menu-btn span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: 0.3s;
}

/* Hero */
.hero-section {
  padding: 6rem 0;
  text-align: center;
  background: linear-gradient(135deg, #f0f0ff 0%, #ffffff 50%, #f0fff4 100%);
}

.hero-badge {
  display: inline-block;
  padding: 0.25rem 1rem;
  background: var(--primary);
  color: white;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 auto 1rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  max-width: 500px;
  margin: 0 auto 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: var(--radius);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.btn-secondary {
  background: white;
  color: var(--text);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: var(--text-light);
}

.btn-outline {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

/* Sections */
.section {
  padding: 5rem 0;
}

.section-alt {
  background: var(--bg-alt);
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  text-align: center;
  color: var(--text-light);
  margin-bottom: 3rem;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  transition: box-shadow 0.3s, transform 0.3s;
}

.feature-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.feature-icon {
  width: 48px;
  height: 48px;
  background: var(--primary);
  border-radius: 12px;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.feature-desc {
  color: var(--text-light);
  font-size: 0.9rem;
}

/* Pricing */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.pricing-card {
  padding: 2.5rem 2rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  text-align: center;
  background: white;
  transition: transform 0.3s, box-shadow 0.3s;
}

.pricing-card.featured {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px var(--primary);
  transform: scale(1.05);
}

.pricing-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.pricing-price {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.pricing-price span {
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-light);
}

.pricing-features {
  list-style: none;
  margin-bottom: 2rem;
}

.pricing-features li {
  padding: 0.5rem 0;
  color: var(--text-light);
  font-size: 0.9rem;
}

.pricing-features li::before {
  content: '✓ ';
  color: var(--primary);
  font-weight: 700;
}

/* Footer */
.footer {
  background: #1a1a2e;
  color: white;
  padding: 4rem 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 4rem;
}

.footer .logo {
  color: white;
}

.footer-brand p {
  margin-top: 1rem;
  color: #9ca3af;
  font-size: 0.85rem;
}

.footer-links {
  display: flex;
  gap: 3rem;
}

.footer-column h4 {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  color: #9ca3af;
}

.footer-column ul {
  list-style: none;
}

.footer-column a {
  color: #e5e7eb;
  text-decoration: none;
  font-size: 0.9rem;
  line-height: 2;
  transition: color 0.2s;
}

.footer-column a:hover {
  color: white;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
  }

  .pricing-card.featured {
    transform: none;
  }

  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }

  .footer-links {
    flex-direction: column;
    gap: 2rem;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 1rem;
    border-bottom: 1px solid var(--border);
  }

  .nav-links.open {
    display: flex;
  }

  .mobile-menu-btn {
    display: flex;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

## Homework

1. **Choose your clone target** — Select a real website UI to clone and get instructor approval before Session 2
2. **Create the component tree** — Draw or write out a complete component tree for your chosen UI. Identify all sections, nested components, and repeated elements
3. **Scaffold the project** — Set up the file structure, create your HTML shell, and import your chosen CSS framework (Bootstrap or Tailwind)
4. **Set up Git** — Initialise a Git repo, create a `.gitignore`, make your first commit, push to GitHub, and enable GitHub Pages
5. **Document AI prompts** — Create `AI.md` in your project root. Document all AI prompts you used for planning and scaffolding, along with the results
6. **Submit** — Post your GitHub repo URL to the course platform

---

## Resources

- [Clone Targets: Landing Page Inspo](https://www.awwwards.com/)
- [Clone Targets: Dribbble](https://dribbble.com/)
- [Component Tree Guide](https://bradfrost.com/blog/post/atomic-web-design/)
- [GitHub Pages Quick Start](https://pages.github.com/)
- [Semantic HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [CSS Custom Properties Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
