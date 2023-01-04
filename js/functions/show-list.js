const tasks = [
    new Task(1, 'Сходить в магазин', false, 'My'),
    new Task(2, 'Помыть машину', false, 'My'),
    new Task(3, 'Купить хлеб', false, 'Dad'),
    new Task(4, 'приготовить ужин', false, 'Mom')
  ];
function showList(tasks) {
    const contentElement = document.getElementById('content');
    const listElement = document.createElement('ul');
    listElement.classList.add('list-group');
    contentElement.textContent = '';

    for (let i = 0; i < tasks.length; i++) {

        let item = createTodoItem(tasks[i]);

        listElement.append(item);

    }

    contentElement.append(listElement);

}