"use strict";

function changeByOwnerIsDoneItems() {
  tasks.map(function (item) {
    if (item.owner === getPageName() && item.isDone === false) {
      taskService.patchIsdone(item);
    }
  });
}