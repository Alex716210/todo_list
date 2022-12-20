import Task from './Task.js';
import createAppTitle from './createAppTitle.js';
import createTodoItem from './createTodoItem.js';
import createTodoItemForm from './createTodoItemForm.js';
import createTodoList from './createTodoList.js';
import getNewId from './getNewId.js';
import saveList from './saveList.js';
  let listArray = [];
  let listName = '';
 function createTodoApp(container, title = 'Список дел', kayName) {

    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();
    listName = kayName;

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);
    let localData = localStorage.getItem(listName);
    if (localData !== null && localData !== '') listArray = JSON.parse(localData)
    for (const itemList of listArray) {
      let item = createTodoItem(itemList);
      todoList.append(item);
    }
    todoItemForm.form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!todoItemForm.input.value) {
        return;
      }

      let newInstance = new Task(
        getNewId(listArray),
        todoItemForm.input.value,
        false
      )
      let item = createTodoItem(newInstance);

      listArray.push(newInstance);

      saveList(listArray, listName);

      todoList.append(item);
      todoItemForm.input.value = '';
      todoItemForm.button.disabled = true;
    });
    window.saveList = saveList;
    window.listArray = listArray;
    window.listName = listName;
  }

  window.createTodoApp = createTodoApp;

