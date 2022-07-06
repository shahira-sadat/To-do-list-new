export default class Tasks {
    constructor() {
        this.tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    populateList = () => {
        const todoContainer = document.querySelector('#todo-list');
        todoContainer.innerHTML = '';
        this.tasksArray.forEach((task) => {
            const li = document.createElement('li');
            li.innerHTML 
            = `<button class="check-task">
            <i class="fa-regular fa-square"></i> 
            <input class="todo-item" type="text" value="${task.description}">
            </button>
            <button class="delete-task">
            <i class="fa-solid fa-trash-can"></i>
            </button>`;
            todoContainer.insertBefore(li, todoContainer.children[task.index]);
        });

    }
}
