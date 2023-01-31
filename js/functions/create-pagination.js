function createPagination(tasks,wrapper,rows) {

	wrapper.innerHTML = "";

	let pageCount = Math.ceil(tasks.length / rows);
	
	for (let i = 0; i < pageCount; i++) {
		
		let btn = createPaginationButton(i, tasks);
		wrapper.appendChild(btn);
	}
}
