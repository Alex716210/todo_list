"use strict";

function listenerIsDoneBtn(btn, task, item) {
  btn.addEventListener('click', function () {
    item.classList.toggle('list-group-item-success');
    taskService.patchIsdone(task);
  });
}