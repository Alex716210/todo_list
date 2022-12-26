 //                                                create an element from a list

import saveList from "./save-list.js";

  export default  function createTodoItem(obj) {
    let item = document.createElement('li'),
      buttonGroup = document.createElement('div'),
      isDoneButton = document.createElement('button'),
      deleteButton = document.createElement('button');

    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = obj.name;
    buttonGroup.classList.add('btn-group', 'btn-group-sm', );
    isDoneButton.classList.add('btn', 'btn-success')
    isDoneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger')
    deleteButton.textContent = 'удалить';

    if (obj.isDone == true) item.classList.add('list-group-item-success');

    buttonGroup.append(isDoneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    function listenerIsDoneBtn(btn) {
      btn.addEventListener('click',()=> {
        item.classList.toggle('list-group-item-success');
        for (const listItem of listArray) {
          if (listItem.id == obj.id) listItem.isDone = !listItem.isDone
        }
        saveList(listArray, 'my');
      });
    }
    listenerIsDoneBtn(isDoneButton);

    function listenerDeleteBtn(btn) {
      btn.addEventListener('click',()=> {
        if (confirm('Вы уверены?')) {
          item.remove();
          for (let i = 0; i < listArray.length; i++) {
            if (listArray[i].id == obj.id) listArray.splice(i, 1)
          }
          saveList(listArray, 'my');
        }
      });
    }
    listenerDeleteBtn(deleteButton);

    return item;
  }
