let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');
const filterBtns = document.querySelectorAll('.filters button');

// === CRUD ===

function addTodo(text) {
  const todo = {
    id: Date.now().toString(),
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };
  todos.push(todo);
  save();
}

function getFilteredTodos() {
  if (currentFilter === 'active') return todos.filter(t => !t.completed);
  if (currentFilter === 'completed') return todos.filter(t => t.completed);
  return todos;
}

function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    save();
  }
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  save();
}

function save() {
  localStorage.setItem('todos', JSON.stringify(todos));
  render();
}

// === Render ===
function render() {
  const filtered = getFilteredTodos();
  todoList.innerHTML = filtered.map(todo => `
    <div class="todo-item ${todo.completed ? 'completed' : ''}">
      <label>
        <input type="checkbox" ${todo.completed ? 'checked' : ''} data-id="${todo.id}" />
        <span>${escapeHtml(todo.text)}</span>
      </label>
      <button class="delete-btn" data-id="${todo.id}">✕</button>
    </div>
  `).join('');
  todoCount.textContent = `${todos.filter(t => !t.completed).length} items left`;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// === Event Listeners ===
addBtn.addEventListener('click', () => {
  const text = todoInput.value.trim();
  if (text) {
    addTodo(text);
    todoInput.value = '';
    todoInput.focus();
  }
});

todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addBtn.click();
});

todoList.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (!id) return;
  if (e.target.matches('input[type="checkbox"]')) toggleTodo(id);
  if (e.target.matches('.delete-btn')) deleteTodo(id);
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    render();
  });
});

render();
