function createPaginationButton(page, tasks) {

	let button = document.createElement('button');

	button.innerText = page + 1 ;
	// button.classList.remove('active');
	button.addEventListener('click', function () {
		currentPage = page;
		// button.classList.add('active');
		showList(tasks);
	});

	return button;
}