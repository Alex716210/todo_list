function changeByOwnerIsDoneItems() {
    tasks.map(item => {
        if (item.owner === getPageName() && item.isDone === false) {
           taskService.patchIsdone(item)
        }     
    });
}