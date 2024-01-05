function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        taskItem.classList.toggle('completed', checkbox.checked);
    });

    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    const deleteBtn = document.createElement('span');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);

    taskInput.value = ''; // Clear input after adding task
}

function clearTasks() {
    const taskList = document.getElementById('taskList');
    const completedTasks = document.querySelectorAll('.completed');

    completedTasks.forEach(task => {
        taskList.removeChild(task);
    });
}