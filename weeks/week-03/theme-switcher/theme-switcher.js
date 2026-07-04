// Theme definitions (array of objects)
const themes = [
  {
    name: "light",
    colors: {
      bg: "#ffffff",
      text: "#333333",
      primary: "#667eea",
      cardBg: "#f8f9ff",
      border: "#e0e0e0"
    }
  },
  {
    name: "dark",
    colors: {
      bg: "#1a1a2e",
      text: "#e0e0e0",
      primary: "#bb86fc",
      cardBg: "#16213e",
      border: "#0f3460"
    }
  },
  {
    name: "ocean",
    colors: {
      bg: "#e8f4f8",
      text: "#023047",
      primary: "#0077b6",
      cardBg: "#caf0f8",
      border: "#90e0ef"
    }
  },
  {
    name: "sunset",
    colors: {
      bg: "#fff5eb",
      text: "#5c2a00",
      primary: "#e65c00",
      cardBg: "#ffedd5",
      border: "#fed7aa"
    }
  }
];

// Feature card data
const features = [
  { title: "DOM Manipulation", desc: "Change styles, content, and structure with JS." },
  { title: "Event Handling", desc: "Respond to clicks, hovers, and keyboard input." },
  { title: "Dynamic Styling", desc: "Apply CSS variables and class changes on the fly." }
];

// DOM references
const root = document.documentElement;
const themeButtons = document.querySelectorAll(".theme-btn");
const cardGrid = document.getElementById("card-grid");

// Function: apply theme
function applyTheme(themeName) {
  const theme = themes.find(t => t.name === themeName);
  if (!theme) return;

  // Set CSS custom properties
  root.style.setProperty("--bg-color", theme.colors.bg);
  root.style.setProperty("--text-color", theme.colors.text);
  root.style.setProperty("--primary-color", theme.colors.primary);
  root.style.setProperty("--card-bg", theme.colors.cardBg);
  root.style.setProperty("--border-color", theme.colors.border);

  // Update active button styling
  themeButtons.forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.theme === themeName) {
      btn.classList.add("active");
    }
  });

  // Log theme change (good for debugging)
  console.log(`Theme changed to: ${themeName}`);
}

// Function: render feature cards using a loop
function renderCards() {
  cardGrid.innerHTML = "";

  for (const feature of features) {
    const card = document.createElement("div");
    card.classList.add("feature-card");

    const title = document.createElement("h3");
    title.textContent = feature.title;

    const desc = document.createElement("p");
    desc.textContent = feature.desc;

    card.appendChild(title);
    card.appendChild(desc);
    cardGrid.appendChild(card);

    // Animate in with a small delay
    card.style.opacity = "0";
    setTimeout(() => {
      card.style.transition = "opacity 0.5s ease";
      card.style.opacity = "1";
    }, 100);
  }
}

// Attach event listeners to theme buttons
for (const btn of themeButtons) {
  btn.addEventListener("click", () => {
    applyTheme(btn.dataset.theme);
  });
}

// Initialize
renderCards();
applyTheme("light");
