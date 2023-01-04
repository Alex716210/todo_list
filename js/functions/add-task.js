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
            getNewId(tasks),
            inputElement.value,
            false,
            getPageName()
        );
     
    
        tasks.push(newInstance);
        createTodoItem(newInstance)

    inputElement.value = '';
    btnElement.disabled = true;

    loadPage(getPageName())
   
}

loadPage(getPageName() || 'My');