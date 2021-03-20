import {
	displayImage,
	getDisplayedImage,
	nextImage,
} from './modules/handleImg';
import { load } from './modules/loadPage';
import { paintDots } from './modules/navigation';

load();

const Dom = (function () {
	const arrows = document.querySelectorAll('.arrows');
	const dots = document.querySelectorAll('.all-dots');

	arrows.forEach((arrow) =>
		arrow.addEventListener('click', function (e) {
			nextImage(this.id);
			paintDots(getDisplayedImage());
			clearInterval(timer);
			auto();
		})
	);

	dots.forEach((dot) =>
		dot.addEventListener('click', function (e) {
			displayImage(this.dataset.dotIndex);
			paintDots(this.dataset.dotIndex);
			clearInterval(timer);
			auto();
		})
	);

	let timer;
	function auto() {
		timer = setInterval(() => {
			nextImage(getDisplayedImage);
			paintDots(getDisplayedImage());
		}, 2000);
	}
	auto();
})();
