async function postTodoItem(task) {
    const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    const taskItem = await response.json();

    tasks.push(new Task(taskItem.id, taskItem.name, taskItem.isDone, taskItem.owner));

    loadPage(getPageName() || 'My');
    console.log(tasks)
}