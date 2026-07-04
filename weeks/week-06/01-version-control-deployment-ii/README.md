# Week 6, Session 1: Version Control & Deployment II

- **Date:** Saturday, 1 August 2026
- **Duration:** 3 hours
- **Instructor:** Dr Motaz
- **Topics:** Git branching, merging, collaboration workflows, CI/CD basics

---

## Objectives

By the end of this session, students will be able to:

- Create feature branches and merge them using both `merge` and `rebase`
- Resolve merge conflicts with and without AI assistance
- Collaborate on a shared repository using fork/pull request or shared-branch workflows
- Set up a basic CI/CD pipeline (GitHub Actions) to deploy to Netlify/Vercel
- Write conventional commits and generate changelogs

---

## Agenda (180 minutes)

| Time | Activity | Duration |
|------|----------|----------|
| 0:00 – 0:15 | Recap: Git basics from Week 5 / Q&A | 15 min |
| 0:15 – 0:55 | Branching & Merging Deep Dive: merge, rebase, fast-forward | 40 min |
| 0:55 – 1:35 | Merge Conflicts: causes, resolution strategies, AI prompts | 40 min |
| 1:35 – 1:45 | Break | 10 min |
| 1:45 – 2:20 | Collaboration Workflows: feature branches, PRs, code review | 35 min |
| 2:20 – 2:50 | CI/CD Basics: GitHub Actions for deploy | 30 min |
| 2:50 – 3:00 | Wrap-up & Homework | 10 min |

---

## Branching & Merging Guide

### Branching Model

A clean branching strategy keeps your project organized:

```
main ──────●──────────●─────────────●─────────
            \        / \           /
feature-a    ●──●──●    \         /
                          \       /
feature-b                  ●──●──●
```

**Golden rule:** `main` should always be deployable. Work on feature branches, merge back when ready.

### Merge vs. Rebase

| Operation | What it does | When to use |
|-----------|-------------|-------------|
| `git merge feature` | Creates a merge commit, preserves full history | When merging into `main` from a shared branch |
| `git rebase main` | Rewrites commits to sit on top of `main`, linear history | For cleaning up a local feature branch before merging |
| `git merge --squash feature` | Collapses all feature commits into one | When you want a single clean commit on `main` |

### Merge Examples

```bash
# Start on main, create a feature branch
git checkout -b feature-forecast

# Work on the feature...
git add . && git commit -m "feat: add 5-day forecast API call"
git add . && git commit -m "feat: render forecast cards on page"

# Return to main and merge
git checkout main
git merge feature-forecast

# Delete the feature branch (cleanup)
git branch -d feature-forecast
```

### Rebase Workflow

```bash
# While on feature branch, pull latest main changes
git checkout main
git pull
git checkout feature-forecast

# Rebase: replay your commits on top of main
git rebase main

# If conflicts occur, resolve them, then:
git add .
git rebase --continue

# When done, merge (fast-forward possible now)
git checkout main
git merge feature-forecast
```

### Visualizing Branches

```bash
git log --oneline --graph --all --decorate
```

Consider using a GUI tool or VS Code's GitLens extension for branch visualization.

---

## Merge Conflicts

### What Causes a Conflict?

A conflict happens when two branches modify the **same line** of the **same file** in different ways.

### Conflict Resolution Process

1. **Attempt the merge:**

   ```bash
   git merge feature-branch
   ```

   Output:
   ```
   Auto-merging src/app.js
   CONFLICT (content): Merge conflict in src/app.js
   Automatic merge failed; fix conflicts and then commit the result.
   ```

2. **View conflicted files:**

   ```bash
   git status
   ```

3. **Open the file** — conflict markers look like this:

   ```js
   <<<<<<< HEAD
   const API_URL = 'https://api.example.com/v1';
   =======
   const API_URL = 'https://api.weather.org/v2';
   >>>>>>> feature-branch
   ```

4. **Resolve** — edit the file to keep the correct version (or a combination), remove the markers.

5. **Stage & commit:**

   ```bash
   git add src/app.js
   git commit -m "fix: resolve merge conflict in API URL"
   ```

### AI Prompts for Conflict Resolution

**Web Assistant:** paste the conflict markers directly:

> **Prompt:**

```
I have a merge conflict in my JavaScript project. Here are the two conflicting
sections:

<<<<<<< HEAD
function formatTemp(temp) {
  return Math.round(temp) + '°C';
}
=======
function formatTemp(temp, unit = 'C') {
  const t = unit === 'F' ? (temp * 9/5) + 32 : temp;
  return Math.round(t) + '°' + unit;
}
>>>>>>> feature-units

Explain what each side does. Which version should I keep if I want
to support both Celsius and Fahrenheit? Show me the resolved code.
```

```
I'm rebasing and hit a conflict in a CSS file. The conflict is about
color variables:

<<<<<<< HEAD
  --primary: #3b82f6;
  --danger: #ef4444;
=======
  --primary: #6366f1;
  --danger: #dc2626;
>>>>>>> feature-design-update

I want to keep the new primary color from the feature branch but keep
the old danger color from main. How do I resolve this?
```

**CLI / IDE Agent:**

> **Prompt:**
> ```
> I have a merge conflict in my project. Read the conflicted files, explain what each side of each conflict does, and help me resolve them. I want to support both Celsius and Fahrenheit in the formatTemp function. Keep the new primary colour from the feature branch but the old danger colour from main. Resolve the conflicts and stage the fixes.
> ```

---

## Collaboration Workflows

### Workflow 1: Shared Repository (Team)

Best for small teams working on the same repo.

```
1. Clone the repo
   git clone https://github.com/org/project.git

2. Create a feature branch
   git checkout -b feat/weather-cache

3. Work, commit, push
   git add . && git commit -m "feat: add weather cache layer"
   git push -u origin feat/weather-cache

4. Open a Pull Request on GitHub

5. Code review → approve → merge

6. Delete the remote branch
   git push origin --delete feat/weather-cache
```

### Workflow 2: Fork & Pull Request (Open Source)

Best for external contributors or when you don't have write access.

```
1. Fork the repo on GitHub (click "Fork")

2. Clone your fork
   git clone https://github.com/your-username/project.git

3. Add upstream remote
   git remote add upstream https://github.com/original-owner/project.git

4. Create feature branch, work, commit, push to your fork

5. Open a Pull Request from your fork to the original repo

6. Keep your fork in sync:
   git checkout main
   git pull upstream main
   git push origin main
```

### Conventional Commits

Structured commit messages help with changelogs and automation:

```
<type>(<scope>): <description>

feat: add 5-day weather forecast
fix: handle empty city input correctly
refactor: extract API layer from app.js
docs: add setup instructions to README
style: format CSS with consistent spacing
chore: update .gitignore for macOS files
```

### AI Prompt for Code Review

**Web Assistant:** paste the diff or code:

> **Prompt:**

```
Act as a code reviewer. Review this pull request that adds a dark mode
toggle to a weather app. Here are the changes:

[diff or code]

Check for:
- Accessibility (contrast, keyboard navigation)
- Performance (unnecessary re-renders)
- Edge cases (localStorage unavailable, system preference)
- Code style (consistent with existing code)
```

**CLI / IDE Agent:**

> **Prompt:**
> ```
> Read the git diff of the current branch compared to main. Act as a code reviewer checking for: accessibility, performance issues, edge cases, and code style. Provide specific feedback with line numbers.
> ```

---

## CI/CD Basics

### What is CI/CD?

- **Continuous Integration** — automatically run tests/lint on every push
- **Continuous Deployment** — automatically deploy when merging to `main`

### GitHub Actions — Deploy to GitHub Pages

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### GitHub Actions — Deploy to Netlify

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2
        with:
          publish-dir: '.'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

**Setup:**
1. Create a Netlify account
2. Get a personal access token from Netlify → User settings → Applications
3. Add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` to GitHub repo → Settings → Secrets and variables → Actions

### AI Prompts for CI/CD

**Web Assistant:**

> **Prompt:**
```
Write a GitHub Actions workflow for a static HTML/CSS/JS project that:
1. Runs on push to main and on pull requests
2. Lints JavaScript with ESLint
3. Checks for broken links in HTML
4. Deploys to GitHub Pages (only on push to main)
```

```
Explain this GitHub Actions workflow step by step:

[PASTE WORKFLOW YAML]

What does each `on:`, `jobs:`, and `steps:` section do?
```

**CLI / IDE Agent:**

> **Prompt:**
```
Create a GitHub Actions workflow file at .github/workflows/deploy.yml for a static HTML/CSS/JS project. It should: run on push to main and PRs, lint JS with ESLint, check for broken links, and deploy to GitHub Pages (push to main only).
```

```
Read the GitHub Actions workflow file in this project. Explain each section (on, jobs, steps) and what it does, line by line.
```

---

## AI Prompts — Full Session

### Web Assistant (ChatGPT, Claude, Gemini)

**Understanding Git Concepts:**
```
Explain git cherry-pick to me like I'm 12 years old. Give me a concrete
example of when I would use it instead of merge.
```

```
What's the difference between `git reset --soft`, `git reset --mixed`,
and `git reset --hard`? When would I use each one?
```

**Debugging Git Issues:**
```
I was on my feature branch and ran `git reset --hard HEAD~1` by accident.
I lost my last commit. How do I get it back? (I haven't pushed yet.)
```

```
I tried to push but got:
  error: failed to push some refs to 'github.com:user/repo.git'
  hint: Updates were rejected because the remote contains work that you do
  hint: not have locally.

I'm the only one working on this branch. What happened and how do I fix it?
```

### CLI / IDE Agent (OpenCode, Claude Code, Copilot)

**Understanding Git Concepts:**
```
Explain git cherry-pick to me like I'm 12 years old. Give me a concrete example of when I would use it instead of merge.
```

```
What's the difference between git reset --soft, --mixed, and --hard? When would I use each one?
```

**Debugging Git Issues:**
```
I was on my feature branch and ran git reset --hard HEAD~1 by accident and lost my last commit (haven't pushed yet). How do I get it back?
```

```
I tried to push but got "failed to push some refs" — the remote has work I don't have locally. I'm the only one working on this branch. What happened and how do I fix it? Run the commands.
```

---

## Homework

1. **Branching practice** — In your weather or to-do app repo:
   - Create a feature branch: `git checkout -b feat-extra-feature`
   - Add a new feature (e.g., dark mode toggle, unit conversion, sound effects)
   - Commit the changes on the branch
   - Merge the feature branch into `main`
   - Push to GitHub

2. **Simulate a merge conflict** — With a partner or using two local branches:
   - Create branch A, modify the same line in two different ways
   - Try to merge, resolve the conflict
   - Document the conflict and resolution in `conflict-log.md`

3. **CI/CD setup** — Choose one:
   - Set up GitHub Actions to deploy your site to GitHub Pages on push to `main`
   - OR set up Netlify automatic deployment (connect GitHub repo, enable auto-deploy)

4. **Use AI for PR description** — Open a pull request (or simulate one) and use AI to generate the PR description. Include:
   - What was changed
   - Why it was changed
   - How to test

5. **Read** — [Pro Git Book, Chapter 3 (Branching)](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) and [GitHub's Hello World guide](https://docs.github.com/en/get-started/quickstart/hello-world).
