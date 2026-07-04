// Mock API simulation for a to-do service
const mockTodoAPI = {
  async fetchTodos() {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Try loading from localStorage first
    const saved = localStorage.getItem("todos");
    if (saved) {
      return JSON.parse(saved);
    }

    // Default seed data
    return [
      { id: 1, title: "Learn JavaScript variables", completed: true, priority: "high", createdAt: "2026-07-11" },
      { id: 2, title: "Practice DOM manipulation", completed: true, priority: "high", createdAt: "2026-07-15" },
      { id: 3, title: "Build a quiz app", completed: false, priority: "high", createdAt: "2026-07-18" },
      { id: 4, title: "Study async/await", completed: false, priority: "medium", createdAt: "2026-07-22" },
      { id: 5, title: "Review event delegation", completed: false, priority: "low", createdAt: "2026-07-22" }
    ];
  },

  async addTodo(title, priority = "medium") {
    await new Promise(resolve => setTimeout(resolve, 300));

    const todos = await this.fetchTodos();
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
      priority,
      createdAt: new Date().toISOString().split("T")[0]
    };

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    return newTodo;
  },

  async toggleTodo(id) {
    await new Promise(resolve => setTimeout(resolve, 200));

    const todos = await this.fetchTodos();
    const todo = todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    return todo;
  },

  async deleteTodo(id) {
    await new Promise(resolve => setTimeout(resolve, 200));

    let todos = await this.fetchTodos();
    todos = todos.filter(t => t.id !== id);
    localStorage.setItem("todos", JSON.stringify(todos));
    return true;
  },

  async updatePriority(id, priority) {
    await new Promise(resolve => setTimeout(resolve, 200));

    const todos = await this.fetchTodos();
    const todo = todos.find(t => t.id === id);
    if (todo) {
      todo.priority = priority;
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    return todo;
  }
};

// DOM references
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const prioritySelect = document.getElementById("priority-select");
const todoList = document.getElementById("todo-list");
const todoCount = document.getElementById("todo-count");
const loadingTodos = document.getElementById("loading-todos");
const errorDiv = document.getElementById("error-display");

// Render todos
async function renderTodos() {
  try {
    loadingTodos.style.display = "block";
    todoList.innerHTML = "";

    const todos = await mockTodoAPI.fetchTodos();

    loadingTodos.style.display = "none";

    if (todos.length === 0) {
      todoList.innerHTML = '<li class="empty-state">No todos yet. Add one above!</li>';
      todoCount.textContent = "0 tasks";
      return;
    }

    const activeCount = todos.filter(t => !t.completed).length;
    todoCount.textContent = `${activeCount} task${activeCount !== 1 ? "s" : ""} remaining`;

    for (const todo of todos) {
      const li = document.createElement("li");
      li.className = `todo-item priority-${todo.priority}`;
      if (todo.completed) li.classList.add("completed");

      li.innerHTML = `
        <input type="checkbox" ${todo.completed ? "checked" : ""} data-id="${todo.id}">
        <span class="todo-title">${todo.title}</span>
        <span class="priority-badge ${todo.priority}">${todo.priority}</span>
        <select class="priority-change" data-id="${todo.id}">
          <option value="low" ${todo.priority === "low" ? "selected" : ""}>Low</option>
          <option value="medium" ${todo.priority === "medium" ? "selected" : ""}>Medium</option>
          <option value="high" ${todo.priority === "high" ? "selected" : ""}>High</option>
        </select>
        <button class="delete-btn" data-id="${todo.id}">✕</button>
      `;

      todoList.appendChild(li);
    }
  } catch (error) {
    loadingTodos.style.display = "none";
    errorDiv.textContent = `Error loading todos: ${error.message}`;
    errorDiv.style.display = "block";
  }
}

// Event delegation for todo actions
todoList.addEventListener("change", async (e) => {
  if (e.target.matches('input[type="checkbox"]')) {
    const id = parseInt(e.target.dataset.id);
    await mockTodoAPI.toggleTodo(id);
    await renderTodos();
  }

  if (e.target.matches(".priority-change")) {
    const id = parseInt(e.target.dataset.id);
    const priority = e.target.value;
    await mockTodoAPI.updatePriority(id, priority);
    await renderTodos();
  }
});

todoList.addEventListener("click", async (e) => {
  if (e.target.matches(".delete-btn")) {
    const id = parseInt(e.target.dataset.id);
    await mockTodoAPI.deleteTodo(id);
    await renderTodos();
  }
});

// Add new todo
todoForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = todoInput.value.trim();
  if (!title) return;

  const priority = prioritySelect.value;

  try {
    await mockTodoAPI.addTodo(title, priority);
    todoInput.value = "";
    await renderTodos();
  } catch (error) {
    errorDiv.textContent = `Error adding todo: ${error.message}`;
    errorDiv.style.display = "block";
  }
});

// Initial render
document.addEventListener("DOMContentLoaded", renderTodos);
