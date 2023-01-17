function listenerDeleteBtn(btn, task) {
    btn.addEventListener('click', () => {
        if (confirm('Вы уверены?')) deleteItem(task);
    });
}