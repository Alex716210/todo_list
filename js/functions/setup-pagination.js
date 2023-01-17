function setupPagination(tasks, wrapper, rowsToPage) {
	wrapper.innerHTML = "";

	let pageCount = Math.ceil(tasks.length / rowsToPage);
	for (let i = 1; i < pageCount + 1; i++) {
		let btn = paginationButton(i, tasks);
		wrapper.appendChild(btn);
	}
}
