async function createTodoItem(task) {
    const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id:task.id,
            name:task.name,
            isDone: task.isDone,
            owner:task.owner
        })
    });
    const data = await response.json();
    console.log(data);
}
