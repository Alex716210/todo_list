import Task from './class-todo.js'

(function () {

  let listArray = [ ];
  let listName = '';

  //                                         создаем и возвращаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  //                                        создаем и возвращаем форму для создания дела
  function createTodoItemForm() {
    let input = document.createElement('input');
    let form = document.createElement('form');

    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);
    button.disabled = true;



    input.addEventListener('input', function () {

      if (input.value !== "") {
        button.disabled = false;

      } else {
        button.disabled = true;
      }
    });

    return {
      form,
      input,
      button,
    };
  }


  //                                                создаем и возвращаем список элементов
  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  //                                                  создаем элемент из списка
  function createTodoItem(obj) {
    let item = document.createElement('li');



    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');


    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    item.textContent = obj.name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm', );
    doneButton.classList.add('btn', 'btn-success')
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger')
    deleteButton.textContent = 'удалить';

    if (obj.done == true) item.classList.add('list-group-item-success');

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    doneButton.addEventListener('click', function () {
      item.classList.toggle('list-group-item-success');

      for (const listItem of listArray) {
        if (listItem.id == obj.id) listItem.done = !listItem.done
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
  //     создание уникального id
  function getNewId(arr) {
    let max = 0;
    for (const item of arr) {
      if (item.id > max) max = item.id
    }
    return max + 1;
  }

  function saveList(arr, kayName) {
    localStorage.setItem(kayName, JSON.stringify(arr))
  }

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

      // игнорируем создание формы если пользователь ничего не ввел

      if (!todoItemForm.input.value) {
        return;
      }
      // создаем обьект в массив
      let newInstance = new Task(
        getNewId(listArray),
        todoItemForm.input.value,
        false
      )

      let item = createTodoItem(newInstance);

      // тут элемент, который будет добавляться в массив тудушек

      listArray.push(newInstance);

      saveList(listArray, listName);


      //  создаем и добавляем в список новое дело с название из поля для ввода
      todoList.append(item);


      todoItemForm.input.value = '';

      todoItemForm.button.disabled = true;
    });
  }

  window.createTodoApp = createTodoApp;

})();