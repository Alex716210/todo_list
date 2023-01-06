async function deleteTodoItem(task) {
  const response = await fetch(`http://localhost:3000/posts/${task.id}`, {
    method: 'DELETE'
  });
  if (response.status === 404) console.log('Не удалось удалить дело, так как его не существует');
 
}