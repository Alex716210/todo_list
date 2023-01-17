function createTodoElement(task) {
  let elementItem = document.createElement('li'),
    buttonGroup = document.createElement('div'),
    isDoneButton = document.createElement('button'),
    deleteButton = document.createElement('button'),
    editButton = document.createElement('button');


  if (task.isDone == true) {
    elementItem.classList.toggle('list-group-item-success')
  };

  elementItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  elementItem.textContent = task.name;
  editButton.addEventListener('click',()=>showModal(task)); 
  editButton.classList.add('btn', 'btn-warning');
  editButton.textContent = 'Изменить';
  buttonGroup.classList.add('btn-group', 'btn-group-sm');
  isDoneButton.classList.add('btn', 'btn-success');
  isDoneButton.textContent = 'Готово';
  deleteButton.classList.add('btn', 'btn-danger')
  deleteButton.textContent = 'удалить';

  buttonGroup.append(editButton)
  buttonGroup.append(isDoneButton);
  buttonGroup.append(deleteButton);
  elementItem.append(buttonGroup);

  listenerIsDoneBtn(isDoneButton, task, elementItem);

  listenerDeleteBtn(deleteButton, task);

  return elementItem;
}