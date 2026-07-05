// Select the DOM Elements 
const todoInput = document.getElementById('todo-input');
const todoDate = document.getElementById('todo-date');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Array For Storing The TO-DO Items
let todos = [
    { text: "Complete The JS Within Project", date: "2026-06-30" },
    { text: "Starting The React For MERN", date: "2026-07-15" },
    { text: "Create The Complete Project", date: "2026-07-30" }
];

// Function that Shows The Task On The Screen
function renderTodos() {
    todoList.innerHTML = ''; // Firstly Clear The List

    todos.forEach((todo, index) => {
        // Change The Date Formate Acoording To The UI
        let formattedDate = "";
        if (todo.date) {
            const dateObj = new Date(todo.date);
            const day = String(dateObj.getDate());
            const month = String(dateObj.getMonth() + 1);
            const year = dateObj.getFullYear();
            formattedDate = `${day}-${month}-${year}`;
        }

        // Create The New TO-DO Item Row
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        todoItem.innerHTML = `
            <div class="todo-text">${todo.text}</div>
            <div class="todo-date-text">${formattedDate}</div>
            <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
        `;

        todoList.appendChild(todoItem);
    });
}

// Fuction For Add The New TO-DO
function addTodo() {
    const text = todoInput.value.trim();
    const date = todoDate.value;

    if (text === '' || date === '') {
        alert('Kindly Enter The Both Task And Date');
        return;
    }

    // Add The New Object Into the Array
    todos.push({ text: text, date: date });

    // Clear the Inputs
    todoInput.value = '';
    todoDate.value = '';

    // Update The UI
    renderTodos();
}

// Function For Deleting The TO-DO
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Event Listeners
addBtn.addEventListener('click', addTodo);

// Function For Add The TO-DO On PUshing The Enter
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Showing My Own List AT Starting
renderTodos();