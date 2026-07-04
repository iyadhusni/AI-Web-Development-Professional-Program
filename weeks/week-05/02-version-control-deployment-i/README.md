# Week 5, Session 2: Version Control & Deployment I

- **Date:** Wednesday, 29 July 2026
- **Duration:** 2 hours
- **Instructor:** Dr Motaz
- **Topics:** Git basics, GitHub, committing, pushing, GitHub Pages deployment

---

## Objectives

By the end of this session, students will be able to:

- Initialize a Git repository and configure user identity
- Stage, commit, and push code to GitHub
- Create and switch between branches
- Deploy a static site using GitHub Pages
- Use AI to generate meaningful commit messages and .gitignore files

---

## Agenda (120 minutes)

| Time | Activity | Duration |
|------|----------|----------|
| 0:00 – 0:15 | Why Version Control? — analogy, real-world scenarios | 15 min |
| 0:15 – 0:50 | Git Basics: init, add, commit, status, log | 35 min |
| 0:50 – 1:10 | GitHub: remote repos, pushing, cloning | 20 min |
| 1:10 – 1:35 | Branching: create, switch, merge locally | 25 min |
| 1:35 – 1:55 | GitHub Pages: deploy a static site | 20 min |
| 1:55 – 2:00 | Wrap-up & Homework | 5 min |

---

## Git Commands Guide

### 1. Configuration (run once)

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

Verify:
```bash
git config --list
```

### 2. Starting a Project

```bash
# Navigate to your project folder
cd path/to/your-project

# Initialize a new Git repository
git init

# Check the status of your files
git status
```

### 3. Staging & Committing

```bash
# Stage a specific file
git add index.html

# Stage all changes
git add .

# Stage all changes interactively (hunks)
git add -p

# Commit with a message
git commit -m "Add weather app with API integration"

# Commit with a longer message (opens editor)
git commit

# View commit history
git log --oneline --graph --all

# See what changed
git diff
git diff --staged   # changes staged for commit
```

### 4. Working with Remotes (GitHub)

```bash
# Add a remote repository
git remote add origin https://github.com/your-username/your-repo.git

# Verify remote
git remote -v

# Push to GitHub (first time: set upstream)
git push -u origin main

# Subsequent pushes
git push

# Pull latest changes
git pull

# Clone an existing repo
git clone https://github.com/username/repo.git
```

### 5. Branching Basics

```bash
# List branches
git branch

# Create a new branch
git branch feature-dark-mode

# Switch to a branch
git checkout feature-dark-mode

# Create and switch in one command
git checkout -b feature-dark-mode

# Merge a branch into the current branch
git checkout main
git merge feature-dark-mode

# Delete a branch (after merge)
git branch -d feature-dark-mode
```

### Common Workflow

```bash
# Daily flow: edit → stage → commit → push
git add .
git commit -m "Add 5-day forecast feature"
git push
```

---

## GitHub Pages Setup

### Step-by-Step Deployment

1. **Create a GitHub repo** — on github.com, click "New repository" (don't initialize with README)

2. **Connect local repo to remote:**

   ```bash
   git remote add origin https://github.com/your-username/your-repo.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repo → Settings → Pages
   - Under "Branch", select `main` and `/ (root)` folder
   - Click Save

4. **Your site is live at:** `https://your-username.github.io/your-repo/`

### Deploying the Weather or To-Do App

Ensure your app's structure works as a static site:

```
weather-app/
├── index.html
├── app.js
└── style.css       (optional, if external)
```

No build step needed — HTML/CSS/JS deploys as-is.

**Important:** If using an API key, do NOT commit it directly. For GitHub Pages, consider:
- Using a free tier API with no key (limited options)
- Having users provide their own key via an input field
- Using Netlify/Vercel serverless functions (covered in Week 6)

---

## AI Prompts for Git Workflows

### Web Assistant (ChatGPT, Claude, Gemini)

**Generating Commit Messages:**
```
Generate 5 concise, conventional commit messages for these changes:
- Added a 5-day weather forecast feature
- Refactored the todo app into store.js, ui.js, app.js
- Fixed a bug where the temperature showed NaN
- Added dark mode CSS variables
- Updated the README with setup instructions

Use the Conventional Commits format (feat:, fix:, refactor:, docs:, style:).
```

```
I modified these files:
  modified:   src/app.js
  modified:   src/ui.js
  new file:   src/store.js
  deleted:    old-helper.js

Changes: extracted state management from app.js into a new store.js file,
moved all DOM rendering into ui.js, deleted the old helper file.

Write a commit message for this refactoring.
```

**Generating .gitignore:**
```
Generate a .gitignore file for a vanilla JavaScript frontend project
that uses:
- No build tools (plain HTML/CSS/JS)
- .env or config.js for API keys (optional)
- macOS and Windows hidden files
- IDE settings (VS Code)
- node_modules (if any npm dependencies are added later)
```

**Explaining Git Concepts:**
```
Explain the difference between `git merge` and `git rebase` to a beginner.
Use a simple analogy and show the command syntax for each.
```

```
I got this error when trying to push to GitHub:
  ! [rejected] main -> main (fetch first)
  error: failed to push some refs

What does this mean and how do I fix it? Show me the exact commands.
```

### CLI / IDE Agent (OpenCode, Claude Code, Copilot)

**Generating Commit Messages — run from your repo:**
```
Look at the current git diff (staged and unstaged changes). Generate a conventional commit message for these changes using the feat:/fix:/refactor:/docs:/style: format.
```

```
Analyse the git log and the working tree changes. I extracted state management into store.js and moved DOM rendering into ui.js. Generate a commit message for this refactoring.
```

**Generating .gitignore:**
```
Create a .gitignore file for this project. It's a vanilla JS frontend (no build tools). Include: .env files, macOS/Windows hidden files, VS Code settings, and node_modules.
```

**Explaining Git Concepts:**
```
Explain the difference between git merge and git rebase with a simple analogy and command syntax for each.
```

```
I got this git error: "failed to push some refs" — the remote has commits I don't have locally. What does this mean? Run the correct commands to fix it without losing work.
```

---

## Deployment Instructions Summary

| Platform | Free Tier | Static Sites | Custom Domain | Build Step |
|----------|-----------|-------------|---------------|------------|
| GitHub Pages | ✅ Unlimited | ✅ | ✅ | Optional (Jekyll) |
| Netlify | ✅ 100GB/mo | ✅ | ✅ | Optional |
| Vercel | ✅ 100GB/mo | ✅ | ✅ | Optional |

For today, we use **GitHub Pages** exclusively. Netlify/Vercel covered in Week 6.

---

## Common Mistakes & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `fatal: not a git repository` | Haven't run `git init` yet | Run `git init` in project root |
| `Please tell me who you are` | Missing git config | `git config --global user.name/email` |
| `failed to push` (non-fast-forward) | Remote has commits you don't | `git pull --rebase` then `git push` |
| `src refspec main does not match any` | No commits yet | `git add . && git commit -m "init"` first |
| GitHub Pages shows 404 | Repo settings or branch wrong | Check Pages settings → branch = main |

---

## Homework

1. **Set up Git** — Install Git, configure your name and email.

2. **Version-control your project** — Initialize a Git repo for your Weather or To-Do app (or both). Make at least 3 commits with meaningful messages.

3. **Deploy to GitHub Pages** — Push your repo to GitHub, enable Pages, and verify your app is live at `https://your-username.github.io/repo-name/`.

4. **Use AI for commits** — Use an AI assistant to generate commit messages for at least 2 of your commits. Paste the AI-generated messages into a file called `ai-commits.md` in your project.

5. **Read** — [Pro Git Book, Chapters 1-2](https://git-scm.com/book/en/v2). Focus on the basic workflow: init, add, commit, push, clone.

6. **Prepare** — Think about what you'd like to add to your project next. We'll cover branching and collaboration workflows next session.
