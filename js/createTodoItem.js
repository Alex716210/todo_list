 //                                                create an element from a list
  export default function createTodoItem(obj) {
    let item = document.createElement('li'),
      buttonGroup = document.createElement('div'),
      doneButton = document.createElement('button'),
      deleteButton = document.createElement('button');

    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = obj.name;
    buttonGroup.classList.add('btn-group', 'btn-group-sm', );
    doneButton.classList.add('btn', 'btn-success')
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger')
    deleteButton.textContent = 'удалить';

    if (obj.isDone == true) item.classList.add('list-group-item-success');

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    doneButton.addEventListener('click', function () {

      item.classList.toggle('list-group-item-success');
      for (const listItem of listArray) {
        if (listItem.id == obj.id) listItem.isDone = !listItem.isDone
      }

      saveList(listArray, listName);

    });
    deleteButton.addEventListener('click', function () {
      if (confirm('Вы уверены?')) {
        item.remove();
        for (let i = 0; i < listArray.length; i++) {
          if (listArray[i].id == obj.id) listArray.splice(i, 1)
        }
        saveList(listArray, listName);
      }
    });
    return item;
  }
  