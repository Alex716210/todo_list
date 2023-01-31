function deleteByOwnerItems() {
    tasks.map(item => {
        if (item.owner === getPageName() && item.isDone === true) {
           taskService.delete(item);
        }

    });
}