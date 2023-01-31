function saveTask(task) {
    task.id == null ? taskService.post(task) : taskService.patchName(task);
}