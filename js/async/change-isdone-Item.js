async function changeIsDoneItem(task) {
    const response = await fetch(`http://localhost:3000/posts/${task.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            isDone: task.isDone = !task.isDone
        })
    });
}