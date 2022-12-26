import Task from '../models/task.js';
import createTodoItem from '../functions/create-todo-item.js';
import getNewId from '../functions/get-new-id.js';
import saveList from '../functions/save-list.js';

let listArray = [];

function createTodoApp() {
  let formBtn = document.getElementById('form-btn'),
    formInput = document.getElementById('input'),
    form = document.getElementById('form'),
    list = document.getElementById('list');

  formInput.addEventListener('input', function () {
    formInput.value !== "" ?  formBtn.disabled = false :formBtn.disabled = true; 
  });

  let localData = localStorage.getItem('my')

  if (localData !== null && localData !== '') listArray = JSON.parse(localData)

  for (const itemList of listArray) {
    let item = createTodoItem(itemList);
    list.append(item);
  }

  function listenFormSubmit(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!formInput.value) {
        return;
      }

      let newInstance = new Task(
        getNewId(listArray),
        formInput.value,
        false
      )
      let item = createTodoItem(newInstance);

      listArray.push(newInstance);

      saveList(listArray, 'my');



      list.append(item);
      formInput.value = '';
      formBtn.disabled = true;
    });
  }
  listenFormSubmit(form);
}

window.listArray = listArray;
window.createTodoApp = createTodoApp;