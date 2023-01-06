 function addTask() {
     const inputElement = document.getElementById('input'),
         btnElement = document.getElementById('form-btn');

     inputElement.addEventListener('input', function () {
         inputElement.value !== "" ? btnElement.disabled = false : btnElement.disabled = true;
     });

     if (!inputElement.value) {
         return;
     }

     let newInstance = new Task(
         null,
         inputElement.value,
         false,
         getPageName()
     );

     postTodoItem(newInstance)

     inputElement.value = '';
     btnElement.disabled = true;
 }