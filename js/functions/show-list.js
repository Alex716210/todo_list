function showList(tasks) {

    const contentElement = document.getElementById('content');
    const listElement = document.createElement('ul');
    listElement.classList.add('list-group');
    contentElement.textContent = '';

    let start = rows * currentPage;
    let end = start + rows;
    let paginatedItems = tasks.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
        let item = createTodoElement(paginatedItems[i]);

        listElement.append(item);

    }
    contentElement.append(listElement);

}