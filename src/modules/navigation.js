function makeDots() {
	const dotsDiv = document.querySelector('#dots');

	for (let i = 0; i < 5; i++) {
		const dot = document.createElement('div');
		dot.classList.add('all-dots');
		dot.setAttribute('data-index', i);
		dotsDiv.appendChild(dot);
	}
}

export { makeDots };
