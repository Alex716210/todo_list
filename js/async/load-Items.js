async function loadItems() {
  const response = await fetch('http://localhost:3000/posts');
  const data = await response.json();

  data.forEach(element => {
    tasks.push(new Task(element.id, element.name, element.isDone, element.owner));
  });

}
loadItems()