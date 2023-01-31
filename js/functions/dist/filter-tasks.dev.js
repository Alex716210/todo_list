"use strict";

function filterTasks() {
  var showCompleted = document.getElementById('checkbox').checked;
  var searchQuery = document.getElementById('search-by-name').value.toLowerCase().trim();
  var filteredTasks = getList(getPageName());

  if (searchQuery) {
    filteredTasks = filteredTasks.filter(function (item) {
      return item.name.toLowerCase().includes(searchQuery);
    });
  }

  if (showCompleted) {
    filteredTasks = filteredTasks.filter(function (item) {
      return item.isDone;
    });
  }

  showList(filteredTasks);
  createPagination(filteredTasks, document.getElementById('pagination'), rows);
}