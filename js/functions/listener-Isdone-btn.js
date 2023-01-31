function listenerIsDoneBtn(btn, task, item) {
    btn.addEventListener('click', () => {
        item.classList.toggle('list-group-item-success');
        taskService.patchIsdone(task);
    });
}