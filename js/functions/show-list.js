function showList(tasks) {
    const contentElement = document.getElementById('content');
    const listElement = document.createElement('ul');
    listElement.classList.add('list-group');
    contentElement.textContent = '';

    for (let i = 0; i < tasks.length; i++) {

        let item = createTodoElement(tasks[i]);

        listElement.append(item);

    }

    contentElement.append(listElement);
}