function filterTasks() {
    const showCompleted = document.getElementById('checkbox').checked;

    const searchQuery = document.getElementById('search-by-name').value.toLowerCase().trim();

    let filteredTasks = getList(getPageName());

    if (searchQuery) {
        filteredTasks = filteredTasks.filter(item => item.name.toLowerCase().includes(searchQuery));
    }

    if (showCompleted) {
        filteredTasks = filteredTasks.filter(item => item.isDone);
    }


    showList(filteredTasks);
    createPagination(filteredTasks, document.getElementById('pagination'), rows);
}