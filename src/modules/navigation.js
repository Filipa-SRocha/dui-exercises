function makeDots() {
	const dotsDiv = document.querySelector('#dots');

	for (let i = 0; i < 5; i++) {
		const dot = document.createElement('div');
		dot.classList.add('all-dots');
		dot.setAttribute('data-dot-index', i);
		dotsDiv.appendChild(dot);
	}
}

function paintDots(index) {
	const dots = document.querySelectorAll('.all-dots');
	const activeDot = document.querySelector(`[data-dot-index='${index}']`);

	dots.forEach((dot) => {
		if (dot.classList.contains('painted')) {
			dot.classList.toggle('painted');
		}
	});

	activeDot.classList.toggle('painted');
}

export { makeDots, paintDots };
