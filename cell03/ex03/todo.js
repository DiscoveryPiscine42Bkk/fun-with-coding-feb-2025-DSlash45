document.addEventListener('DOMContentLoaded', function() {
    loadTodos();
});

function loadTodos() {
    const todos = getCookies();
    const ftList = document.getElementById('ft_list');
    ftList.innerHTML = '';
    todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo';
        todoDiv.textContent = todo;
        todoDiv.onclick = function() {
            if (confirm('Do you want to remove this TO DO?')) {
                ftList.removeChild(todoDiv);
                saveTodos();
            }
        };
        ftList.prepend(todoDiv);
    });
}

function addTodo() {
    const todoText = prompt('Enter a new TO DO:');
    if (todoText && todoText.trim() !== '') {
        const ftList = document.getElementById('ft_list');
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo';
        todoDiv.textContent = todoText.trim();
        todoDiv.onclick = function() {
            if (confirm('Do you want to remove this TO DO?')) {
                ftList.removeChild(todoDiv);
                saveTodos();
            }
        };
        ftList.prepend(todoDiv);
        saveTodos();
    }
}

function saveTodos() {
    const todos = [];
    document.querySelectorAll('#ft_list .todo').forEach(todo => {
        todos.push(todo.textContent);
    });
    document.cookie = `todos=${JSON.stringify(todos)}; path=/`;
}

function getCookies() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'todos') {
            return JSON.parse(value);
        }
    }
    return [];
}