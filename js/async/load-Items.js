async function loadItems() {
  const response = await fetch('http://localhost:3000/posts');
  const taskItems = await response.json();


  taskItems.forEach(task => {
    tasks.push(new Task(task.id, task.name, task.isDone, task.owner));
  });
  
  loadPage(getPageName() || 'My');
  console.log(tasks)
}