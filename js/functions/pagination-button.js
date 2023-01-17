function paginationButton(page, tasks) {
	let currentPage = 1;
	let rows = 5;
	let button = document.createElement('button');
	button.innerText = page;

	if (currentPage == page) button.classList.add('active');

	button.addEventListener('click', function () {
		currentPage = page;
		showList(tasks, rows, currentPage)

		let currentBtn = document.querySelector('.pagenumbers button.active');
		currentBtn.classList.remove('active');

		button.classList.add('active');
	});
	return button;
}