async function loadItems() {
  const response = await fetch('http://localhost:3000/posts');
  const taskItems = await response.json();

  tasks = taskItems.map(item => new Task(item.id, item.name, item.isDone, item.owner));

  loadPage(getPageName() || 'My');
}