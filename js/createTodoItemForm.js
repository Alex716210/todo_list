  //                                      create and return a form to create a case
  export default function createTodoItemForm() {
    let input = document.createElement('input'),
      form = document.createElement('form'),
      buttonWrapper = document.createElement('div'),
      button = document.createElement('button');

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