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

function displayImage(img) {
	imageArray.forEach((otherImg) => {
		if (otherImg.classList.contains('displaying')) {
			otherImg.classList.toggle('displaying');
		}
	});

	img.classList.toggle('displaying');
}

export { loadImages, appendImages, displayImage };
