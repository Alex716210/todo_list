class TaskService {

    // data;


    async get() {
        const response = await fetch('http://localhost:3000/posts');
        const taskItems = await response.json();

        tasks = taskItems.map(item => new Task(item.id, item.name, item.isDone, item.owner));


        loadPage(getPageName() || 'My');

    }


    async patchIsdone(task) {
        const response = await fetch(`http://localhost:3000/posts/${task.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isDone: task.isDone = !task.isDone
            })
        });
        loadPage(getPageName() || 'My');
    }

    async delete(task) {
        const response = await fetch(`http://localhost:3000/posts/${task.id}`, {
            method: 'DELETE'
        });
        if (response.status === 404) console.log('Не удалось удалить дело, так как его не существует');

        tasks = tasks.filter((item) => item.id != task.id)

        loadPage(getPageName() || 'My');

    }


    async patchName(task) {
        const response = await fetch(`http://localhost:3000/posts/${task.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        taskService.get();
    }

    async post(task) {
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
    }

}


const taskService = new TaskService();