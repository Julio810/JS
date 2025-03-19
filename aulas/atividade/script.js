document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('task-list');

    // Adicionar evento de clique para o botão de concluir
    taskList.addEventListener('click', function (event) {
        if (event.target.classList.contains('done-btn')) {
            const taskItem = event.target.closest('.task-box');
            taskItem.classList.toggle('done'); // Adiciona ou remove a classe "done"
        }
    });

    // Adicionar evento de clique para o botão de remover
    taskList.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-btn')) {
            const taskItem = event.target.closest('.task-box');
            taskItem.remove(); // Remove a tarefa
        }
    });

    // Adicionar nova tarefa
    const addTaskForm = document.getElementById('add-task-form');
    addTaskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskTitle = document.getElementById('task-title').value;
        if (taskTitle.trim() === '') return;

        const newTask = document.createElement('li');
        newTask.className = 'task-box';
        newTask.innerHTML = `
            <span class="task-title">${taskTitle}</span>
            <ion-icon class="done-btn" name="checkmark-outline"></ion-icon>
            <ion-icon class="remove-btn" name="close-outline"></ion-icon>
        `;

        taskList.appendChild(newTask);
        document.getElementById('task-title').value = ''; // Limpa o campo de input
    });
});