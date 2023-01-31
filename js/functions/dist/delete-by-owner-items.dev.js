"use strict";

function deleteByOwnerItems() {
  tasks.map(function (item) {
    if (item.owner === getPageName() && item.isDone === true) {
      taskService["delete"](item);
    }
  });
}