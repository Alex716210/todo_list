function listenerDeleteBtn(btn, task) {
    btn.addEventListener('click', () => {
        if (confirm('Вы уверены?')) taskService.delete(task);
    });
}