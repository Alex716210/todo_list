function showModal(task = null) {
    const modalElement = document.getElementById('task-form-modal');
    const input = document.getElementById('input');
    const modal = new bootstrap.Modal(modalElement);

    input.value = '';

    if (task) {
        input.value = task.name;
    }

    modal.show();

    const saveBtn = document.getElementById('save-btn');

    saveBtn.disabled = true;

    saveBtn.textContent = task ? 'Сохранить' : 'Добавить';

    input.addEventListener('input', function () {
        input.value !== "" ? saveBtn.disabled = false : saveBtn.disabled = true;
    });

    saveBtn.addEventListener('click', () => {
        if (input.value == " ") {
            return;
        }

        const taskToSave = task ? new Task(task.id, input.value, task.isDone, task.owner) : new Task(null, input.value, false, getPageName());

        saveTask(taskToSave);

        modal.hide();
    }, {
        once: true
    });
}