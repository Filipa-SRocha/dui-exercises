import { displayImage, nextImage } from './modules/handleImg';
import { load } from './modules/loadPage';

load();

const Dom = (function () {
	const arrows = document.querySelectorAll('.arrows');
	const dots = document.querySelectorAll('.all-dots');

	arrows.forEach((arrow) =>
		arrow.addEventListener('click', function (e) {
			nextImage(this.id);
		})
	);

	dots.forEach((dot) =>
		dot.addEventListener('click', function (e) {
			displayImage(this.dataset.index);
		})
	);
})();
