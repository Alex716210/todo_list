function saveTask(task) {
    task.id == null ? postItem(task) : patchItem(task);
}