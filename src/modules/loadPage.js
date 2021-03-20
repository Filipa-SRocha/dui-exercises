import { loadImages, appendImages, displayImage } from './handleImg';
import { makeDots, paintDots } from './navigation';

function load() {
	loadImages();
	appendImages();
	makeDots();
	displayImage('0');
	paintDots('0');
}

export { load };
