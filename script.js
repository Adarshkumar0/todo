// script.js
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');





// Function to create a task item
function createTaskItem(taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <input type="checkbox">
        <span class="task-text">${taskText}</span>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
    `;

    // Add event listeners for the new task item
    const editButton = taskItem.querySelector('.edit-button');
    const deleteButton = taskItem.querySelector('.delete-button');
    
    editButton.addEventListener('click', () => editTask(taskItem));
    deleteButton.addEventListener('click', () => deleteTask(taskItem));

    return taskItem;
}

// Add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = '';
}

// Edit a task
function editTask(taskItem) {
    const taskText = taskItem.querySelector('.task-text');
    const newText = prompt('Edit the task:', taskText.textContent);
    if (newText !== null) {
        taskText.textContent = newText;
    }
}

// Delete a task
function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}

// Event listeners
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') addTask();
});
