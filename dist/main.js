/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const imageArray = [];\n\nfunction makeImage(imgUrl) {\n\tconst image = document.createElement('img');\n\timage.classList.add('off-image');\n\timage.src = imgUrl;\n\timage.setAttribute('data-index', imageArray.length);\n\n\treturn image;\n}\n\nfunction loadImages() {\n\tconst urls = [\n\t\t'../src/img/img1.jpg',\n\t\t'../src/img/img2.jpeg',\n\t\t'../src/img/artur-malagueta.png',\n\t\t'../src/img/printar.jpg',\n\t\t'../src/img/img5.png',\n\t];\n\n\turls.forEach((url) => imageArray.push(makeImage(url)));\n}\n\nfunction appendImages() {\n\tconst imagesDiv = document.querySelector('#all-images-div');\n\n\timageArray.forEach((image) => imagesDiv.appendChild(image));\n}\n\nfunction displayImage(img) {\n\timageArray.forEach((otherImg) => {\n\t\tif (otherImg.classList.contains('displaying')) {\n\t\t\totherImg.classList.toggle('displaying');\n\t\t}\n\t});\n\n\timg.classList.toggle('displaying');\n}\n\nloadImages();\nappendImages();\ndisplayImage(imageArray[1]);\n\n\n//# sourceURL=webpack://dui-exercises/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;