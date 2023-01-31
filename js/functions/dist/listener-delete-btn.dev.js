"use strict";

function listenerDeleteBtn(btn, task) {
  btn.addEventListener('click', function () {
    if (confirm('Вы уверены?')) taskService["delete"](task);
  });
}