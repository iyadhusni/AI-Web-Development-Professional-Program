# Week 7 — Session 1: Advanced Styling & CSS Frameworks II

**Date:** Saturday, 8 August 2026  
**Duration:** 3 hours  
**Instructor:** Dr Iyad  
**Format:** Interactive workshop with live coding

---

## Session Objectives

By the end of this session, learners will be able to:
- Build complex UI components using a CSS framework (Bootstrap / Tailwind)
- Apply responsive utility patterns for mobile-first layouts
- Customise framework themes (colours, spacing, typography)
- Integrate CSS animations and transitions with AI assistance
- Generate framework-specific code using AI prompts

---

## Agenda (180 min)

| Time | Activity | Description |
|------|----------|-------------|
| 0:00–0:15 | Warm-Up: Framework Recap | Quick review of Bootstrap vs Tailwind, utility-first vs component-based |
| 0:15–0:45 | Deep Dive: Framework Components | Navbars, cards, modals, forms, accordions, carousels |
| 0:45–1:15 | Responsive Utility Patterns | Grid system, breakpoints, visibility, spacing utilities |
| 1:15–1:25 | Break | |
| 1:25–1:55 | Theme Customisation | Custom colours, fonts, spacing with Sass variables / Tailwind config |
| 1:55–2:30 | Animations & Transitions | CSS transitions, keyframes, framework animation utilities, scroll-triggered effects |
| 2:30–2:50 | AI-Assisted Framework Coding | Prompt patterns for generating framework components, debugging layout issues |
| 2:50–3:00 | Wrap-Up & Homework | Recap, Q&A, homework assignment |

---

## Key Concepts

### Bootstrap vs Tailwind — When to Use Which

| Aspect | Bootstrap | Tailwind CSS |
|--------|-----------|--------------|
| Approach | Component-based (pre-built UI) | Utility-first (composable classes) |
| Learning Curve | Gentle — copy & paste components | Steeper — learn utility naming |
| Customisation | Sass variable overrides | `tailwind.config.js` |
| File Size | ~200KB (can tree-shake) | ~3MB full / ~10KB purged |
| Best For | Rapid prototyping, admin dashboards | Unique designs, design system control |
| AI Prompt Style | "Create a Bootstrap navbar with..." | "Create a responsive navbar using Tailwind classes..." |

### Responsive Utility Patterns

**Bootstrap breakpoints:**
```
sm  ≥576px    md  ≥768px    lg  ≥992px    xl  ≥1200px    xxl ≥1400px
```

**Tailwind breakpoints:**
```
sm  ≥640px    md  ≥768px    lg  ≥1024px    xl  ≥1280px    2xl ≥1536px
```

**Common responsive patterns:**
```html
<!-- Bootstrap: stack on mobile, row on desktop -->
<div class="col-12 col-md-6 col-lg-4">...</div>

<!-- Tailwind: stack on mobile, row on desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">...</div>

<!-- Visibility utilities -->
<div class="d-none d-md-block">Visible on md and up (Bootstrap)</div>
<div class="hidden md:block">Visible on md and up (Tailwind)</div>
```

---

## Activity 1: Building Framework Components

### Bootstrap: Responsive Navbar with Mega Menu

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bootstrap Components</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">FrameworkPro</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Web Design</a></li>
              <li><a class="dropdown-item" href="#">Development</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Consulting</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search..." />
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="container mt-5">
    <!-- Card Grid -->
    <div class="row g-4">
      <div class="col-md-6 col-lg-4">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h5 class="card-title">Responsive Design</h5>
            <p class="card-text">Built mobile-first with Bootstrap's grid system.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h5 class="card-title">Utility Classes</h5>
            <p class="card-text">Spacing, typography, colours — all from utility classes.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h5 class="card-title">Built-in Components</h5>
            <p class="card-text">Modals, carousels, accordions — no extra JS needed.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Accordion -->
    <div class="accordion mt-5" id="faqAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
            What is Bootstrap?
          </button>
        </h2>
        <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
          <div class="accordion-body">Bootstrap is a CSS framework providing pre-built components and a responsive grid system.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
            How do I customise it?
          </button>
        </h2>
        <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">Override Sass variables or use CSS custom properties to change colours, fonts, and spacing.</div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Tailwind: Dashboard Card Component

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tailwind Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
  <div class="min-h-screen flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md hidden md:block">
      <div class="p-4 border-b">
        <h1 class="text-xl font-bold text-gray-800">Dashboard</h1>
      </div>
      <nav class="p-4 space-y-2">
        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium">
          <span>📊</span> Overview
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50">
          <span>👥</span> Users
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50">
          <span>📦</span> Orders
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50">
          <span>⚙️</span> Settings
        </a>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6">
      <header class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-semibold text-gray-800">Overview</h2>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          + New Report
        </button>
      </header>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <p class="text-sm text-gray-500">Total Revenue</p>
          <p class="text-2xl font-bold text-gray-900">$48,250</p>
          <p class="text-sm text-green-600">↑ 12.5% from last month</p>
        </div>
        <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <p class="text-sm text-gray-500">Active Users</p>
          <p class="text-2xl font-bold text-gray-900">2,847</p>
          <p class="text-sm text-green-600">↑ 8.2% from last month</p>
        </div>
        <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <p class="text-sm text-gray-500">Orders</p>
          <p class="text-2xl font-bold text-gray-900">1,423</p>
          <p class="text-sm text-red-600">↓ 3.1% from last month</p>
        </div>
        <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <p class="text-sm text-gray-500">Conversion Rate</p>
          <p class="text-2xl font-bold text-gray-900">3.24%</p>
          <p class="text-sm text-green-600">↑ 1.2% from last month</p>
        </div>
      </div>

      <!-- Recent Orders Table -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800">Recent Orders</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th class="px-6 py-3 text-left">Customer</th>
                <th class="px-6 py-3 text-left">Product</th>
                <th class="px-6 py-3 text-left">Status</th>
                <th class="px-6 py-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 font-medium text-gray-900">Alice Johnson</td>
                <td class="px-6 py-4 text-gray-600">Pro Plan Annual</td>
                <td class="px-6 py-4"><span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Completed</span></td>
                <td class="px-6 py-4 text-right text-gray-900">$299.00</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 font-medium text-gray-900">Bob Smith</td>
                <td class="px-6 py-4 text-gray-600">Starter Monthly</td>
                <td class="px-6 py-4"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">Pending</span></td>
                <td class="px-6 py-4 text-right text-gray-900">$29.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</body>
</html>
```

---

## Activity 2: Theme Customisation

### Bootstrap: Custom Theme with Sass

```scss
// custom-bootstrap.scss
// 1. Override Sass variables before importing Bootstrap
$primary: #6C5CE7;
$secondary: #00CEC9;
$dark: #2D3436;
$font-family-sans-serif: 'Inter', system-ui, -apple-system, sans-serif;
$border-radius: 12px;
$enable-shadows: true;
$enable-gradients: true;

// 2. Import Bootstrap
@import 'bootstrap/scss/bootstrap';

// 3. Custom component styles
.navbar {
  backdrop-filter: blur(10px);
  background-color: rgba($dark, 0.95) !important;
}

.card {
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
}

.btn-primary {
  background: linear-gradient(135deg, $primary, darken($primary, 10%));
  border: none;
}
```

**Compile with:**
```bash
npm init -y
npm install sass bootstrap@5.3.3
npx sass custom-bootstrap.scss custom-bootstrap.css
```

### Tailwind: Custom Config

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f0ff',
          100: '#e0e0ff',
          200: '#c0c0ff',
          500: '#6C5CE7',
          600: '#5A4BD1',
          700: '#4839BB',
          900: '#1a0a3e',
        },
        accent: {
          DEFAULT: '#00CEC9',
          dark: '#00B5B0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
```

---

## Activity 3: Animations & Transitions

### CSS Transitions (Native)

```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
```

### Scroll-Triggered Animations

```html
<style>
  .fade-in-section {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .fade-in-section.visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>

<section class="fade-in-section" id="animated-section">
  <h2>This fades in on scroll</h2>
</section>

<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
</script>
```

### Tailwind — Animate on Scroll

```html
<div class="opacity-0 translate-y-8 transition-all duration-700 ease-out
            motion-safe:animate-fade-in-up"
     x-data
     x-intersect="$el.classList.add('opacity-100', 'translate-y-0')">
  <!-- animated content -->
</div>
```

### Bootstrap Animation Utilities

```html
<div class="animate__animated animate__fadeInUp" data-aos="fade-up">
  <!-- Requires animate.css or AOS library -->
</div>
```

---

## AI Prompts for Framework Code Generation

### Web Assistant (ChatGPT, Claude, Gemini)

#### Component Generation
```
Create a responsive [navbar / card grid / modal / form] using [Bootstrap / Tailwind].
It should:
- Be mobile-first with a breakpoint at 768px
- Use the framework's grid system
- Include hover effects and transitions
- Follow accessibility best practices (aria labels, semantic HTML)
Generate the complete HTML.
```

### Theme Customisation
```
I want to customise [Bootstrap / Tailwind] with these brand colours:
- Primary: #6C5CE7 (purple)
- Secondary: #00CEC9 (teal)
- Accent: #FD79A8 (pink)

Generate the [Sass overrides / tailwind.config.js] needed.
Also show me how to apply these to a navbar and button component.
```

### Responsive Layout
```
Help me create a responsive layout using [Bootstrap / Tailwind] that:
- Shows 1 column on mobile
- 2 columns on tablet (768px+)
- 3 columns on desktop (1024px+)
- 4 columns on wide (1400px+)
Each column should contain a card with an image, title, description and button.
```

### Animation
```
Create a fade-in-up animation for a card grid using CSS keyframes.
Each card should appear with a staggered delay (100ms between each).
Use Intersection Observer to trigger the animation when the section scrolls into view.
```

### Debugging Layout
```
My [Bootstrap / Tailwind] layout is broken:
[describe the issue, e.g., "columns stacking instead of showing side by side"]

Here is my code:
[paste code]

What's wrong and how do I fix it?
```

### CLI / IDE Agent (OpenCode, Claude Code, Copilot)

Run from your project directory:

**Component Generation:**
```
Create a responsive [navbar / card grid / modal / form] using [Bootstrap / Tailwind]. It should be mobile-first with a 768px breakpoint, use the framework's grid system, include hover effects and transitions, and follow accessibility best practices. Update the index.html and show the diff.
```

**Theme Customisation:**
```
Read the current styles. Customise the [Bootstrap / Tailwind] config with these brand colours: Primary: #6C5CE7, Secondary: #00CEC9, Accent: #FD79A8. Generate the [Sass overrides / tailwind.config.js] and apply them to a navbar and button component in the HTML.
```

**Responsive Layout:**
```
Help me create a responsive layout using [Bootstrap / Tailwind] in index.html: 1 column on mobile, 2 on tablet (768px+), 3 on desktop (1024px+), 4 on wide (1400px+). Each column is a card with image, title, description, and button. Update the file and show the diff.
```

**Animation:**
```
Add a fade-in-up animation to the card grid using CSS keyframes with staggered 100ms delay between cards. Use Intersection Observer to trigger on scroll. Modify the HTML/CSS files and show the diff.
```

**Debugging Layout:**
```
Read index.html. The [Bootstrap / Tailwind] layout is broken — [describe issue, e.g., "columns stacking instead of showing side by side"]. Find the bug and fix it. Explain what was wrong and show the diff.
```
---

## Starter Code: Theme Tester

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Framework Theme Tester</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: { 500: '#6C5CE7', 600: '#5A4BD1' },
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
          },
        },
      },
    }
  </script>
  <style>
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .fade-in.show {
      opacity: 1;
      transform: translateY(0);
    }
  </style>
</head>
<body class="bg-gray-50 font-sans">
  <div class="container mx-auto px-4 py-8">
    <header class="text-center mb-12 fade-in show">
      <h1 class="text-4xl font-bold text-brand-500 mb-2">Theme Tester</h1>
      <p class="text-gray-600">Customise colours, fonts, and animations</p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200 fade-in show">
        <div class="w-12 h-12 bg-brand-500 rounded-lg mb-4"></div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Primary Card</h3>
        <p class="text-gray-600 mb-4">This card uses the brand colour for accents.</p>
        <button class="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition">Action</button>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200 fade-in">
        <div class="w-12 h-12 bg-blue-500 rounded-lg mb-4"></div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Default Style</h3>
        <p class="text-gray-600 mb-4">Compare with the default Tailwind palette.</p>
        <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Action</button>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200 fade-in">
        <div class="w-12 h-12 bg-emerald-500 rounded-lg mb-4"></div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Green Variant</h3>
        <p class="text-gray-600 mb-4">Experiment with different colour schemes.</p>
        <button class="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition">Action</button>
      </div>
    </div>

    <section class="mt-12 fade-in">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Form Elements</h2>
      <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200 max-w-md">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition" />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition" />
        </div>
        <button class="w-full px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition">Submit</button>
      </div>
    </section>

    <footer class="mt-12 text-center text-gray-400 text-sm fade-in">
      <p>&copy; 2026 Framework Theme Tester</p>
    </footer>
  </div>

  <script>
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in:not(.show)').forEach(el => observer.observe(el));
  </script>
</body>
</html>
```

---

## Homework

1. **Build a component library** — Create a single HTML page with at least 5 different framework components (navbar, cards, modal, form, accordion) using either Bootstrap or Tailwind
2. **Customise the theme** — Change the default colours, font, and border radius to create a consistent brand look. If using Bootstrap, set up Sass compilation
3. **Add scroll animations** — Implement fade-in-up animations on at least 3 sections using Intersection Observer
4. **Generate with AI** — Use an AI tool to generate one additional component not covered in class (e.g., a carousel, pricing table, or timeline). Document the prompt and result
5. **Deploy** — Push your page to GitHub Pages and submit the URL

---

## Resources

- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind CSS Play CDN](https://tailwindcss.com/docs/installation/play-cdn)
- [Sass Basics](https://sass-lang.com/guide)
- [Animate.css](https://animate.style/)
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- [Intersection Observer API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Customising Bootstrap with Sass](https://getbootstrap.com/docs/5.3/customize/sass/)
- [Tailwind Config Reference](https://tailwindcss.com/docs/configuration)
