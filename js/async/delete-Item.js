async function deleteItem(task) {
  const response = await fetch(`http://localhost:3000/posts/${task.id}`, {
    method: 'DELETE'
  });
  if (response.status === 404) console.log('Не удалось удалить дело, так как его не существует');

  tasks = tasks.filter((item) => item.id != task.id)

  loadPage(getPageName() || 'My');
}