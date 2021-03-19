const imageArray = [];

function makeImage(imgUrl) {
	const image = document.createElement('img');
	image.classList.add('off-image');
	image.src = imgUrl;
	image.setAttribute('data-index', imageArray.length);

	return image;
}

function loadImages() {
	const urls = [
		'../src/img/img1.jpg',
		'../src/img/img2.jpeg',
		'../src/img/artur-malagueta.png',
		'../src/img/printar.jpg',
		'../src/img/img5.png',
	];

	urls.forEach((url) => imageArray.push(makeImage(url)));
}

function appendImages() {
	const imagesDiv = document.querySelector('#all-images-div');

	imageArray.forEach((image) => imagesDiv.appendChild(image));
}

function displayImage(index) {
	imageArray.forEach((otherImg) => {
		if (otherImg.classList.contains('displaying')) {
			otherImg.classList.toggle('displaying');
		}
	});

	imageArray[index].classList.toggle('displaying');
}

function getDisplayedImage() {
	const currentImg = document.querySelector('.displaying');
	return parseInt(currentImg.dataset.index);
}

function nextImage(direction) {
	const index = getDisplayedImage();
	console.log(index);
	let newIndex = direction == 'arrow-left' ? index - 1 : index + 1;

	if (newIndex < 0) newIndex = 4;
	else if (newIndex > 4) newIndex = 0;

	displayImage(newIndex);
}

export { loadImages, appendImages, displayImage, nextImage };
