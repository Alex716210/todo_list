function createTodoElement(task) {
  let item = document.createElement('li'),
    buttonGroup = document.createElement('div'),
    isDoneButton = document.createElement('button'),
    deleteButton = document.createElement('button');

    if (task.isDone == true) {
      item.classList.toggle('list-group-item-success')
    };

  item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  item.textContent = task.name;
  buttonGroup.classList.add('btn-group', 'btn-group-sm');
  isDoneButton.classList.add('btn', 'btn-success')
  isDoneButton.textContent = 'Готово';
  deleteButton.classList.add('btn', 'btn-danger')
  deleteButton.textContent = 'удалить';

  buttonGroup.append(isDoneButton);
  buttonGroup.append(deleteButton);
  item.append(buttonGroup);

  function listenerIsDoneBtn(btn) {
    btn.addEventListener('click', () => {
      item.classList.toggle('list-group-item-success');
      for (const listItem of tasks) {
        if (listItem.id == task.id) {
          listItem.isDone = !listItem.isDone
          markTodoAsDone(task)
        }
      }
      console.log(tasks)
    });
  }

  listenerIsDoneBtn(isDoneButton);

  function listenerDeleteBtn(btn) {
    btn.addEventListener('click', () => {
      if (confirm('Вы уверены?')) {
        item.remove();
        for (let i = 0; i < tasks.length; i++) {
          if (tasks[i].id == task.id) {
            tasks.splice(i, 1);
            deleteTodoItem(task);
          }
        }
      }
    });
  }

  listenerDeleteBtn(deleteButton);

  return item
}