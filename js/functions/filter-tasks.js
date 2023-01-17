function filterTasks(str = null) {
    let input = document.getElementById('search-by-name');

    let newArr;
    switch (str) {
        case 'isDone':
            getList(getPageName()).filter(item => changeIsDoneItem(item));
            break;
        case 'completed':
            newArr = getList(getPageName()).filter(item => item.isDone == true);
            if (newArr != null && newArr != "") {
                tasks = newArr;
            }
            break;
        case 'delet':
            getList(getPageName()).filter(item => deleteItem(item));
            break;
        case null:
            if (input.value == "") {
                loadItems()
            } else {
                newArr = getList(getPageName()).filter(item => item.name.includes(input.value));
                tasks = newArr;
            }
            break;
        default:
            loadItems()
    }

    loadPage(getPageName() || 'My');

}