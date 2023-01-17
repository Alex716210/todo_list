function loadPage(name) {
    const list = getList(name);
    localStorage.setItem('pageName', name)
    document.getElementById('title').textContent = name;


    let currentPage = 1;
    let rows = 5;
    showList(list, rows, currentPage);
    setupPagination(list, document.getElementById('pagination'), rows);
}