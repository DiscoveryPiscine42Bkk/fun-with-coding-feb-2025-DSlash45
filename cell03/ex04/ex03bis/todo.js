$(document).ready(function() {
    loadTodos();

    $('#addTodoBtn').click(function() {
        addTodo();
    });

    function loadTodos() {
        const todos = getCookies();
        $('#ft_list').empty();
        todos.forEach(todo => {
            createTodoElement(todo).prependTo('#ft_list');
        });
    }

    function addTodo() {
        const todoText = prompt('Enter a new TO DO:');
        if (todoText && todoText.trim() !== '') {
            createTodoElement(todoText.trim()).prependTo('#ft_list');
            saveTodos();
        }
    }

    function createTodoElement(todoText) {
        const todoDiv = $('<div></div>')
            .addClass('todo')
            .text(todoText)
            .click(function() {
                if (confirm('Do you want to remove this TO DO?')) {
                    $(this).remove();
                    saveTodos();
                }
            });
        return todoDiv;
    }

    function saveTodos() {
        const todos = [];
        $('.todo').each(function() {
            todos.push($(this).text());
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
});
