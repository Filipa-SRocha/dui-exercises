import { loadImages, appendImages, displayImage } from './handleImg';
import { makeDots } from './navigation';

function load() {
	loadImages();
	appendImages();
	makeDots();
}

export { load };
