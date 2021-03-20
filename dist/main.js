/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_handleImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/handleImg */ \"./src/modules/handleImg.js\");\n/* harmony import */ var _modules_loadPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadPage */ \"./src/modules/loadPage.js\");\n/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/navigation */ \"./src/modules/navigation.js\");\n\n\n\n\n(0,_modules_loadPage__WEBPACK_IMPORTED_MODULE_1__.load)();\n\nconst Dom = (function () {\n\tconst arrows = document.querySelectorAll('.arrows');\n\tconst dots = document.querySelectorAll('.all-dots');\n\n\tarrows.forEach((arrow) =>\n\t\tarrow.addEventListener('click', function (e) {\n\t\t\t(0,_modules_handleImg__WEBPACK_IMPORTED_MODULE_0__.nextImage)(this.id);\n\t\t\t(0,_modules_navigation__WEBPACK_IMPORTED_MODULE_2__.paintDots)((0,_modules_handleImg__WEBPACK_IMPORTED_MODULE_0__.getDisplayedImage)());\n\t\t\tclearInterval(timer);\n\t\t\tauto();\n\t\t})\n\t);\n\n\tdots.forEach((dot) =>\n\t\tdot.addEventListener('click', function (e) {\n\t\t\t(0,_modules_handleImg__WEBPACK_IMPORTED_MODULE_0__.displayImage)(this.dataset.dotIndex);\n\t\t\t(0,_modules_navigation__WEBPACK_IMPORTED_MODULE_2__.paintDots)(this.dataset.dotIndex);\n\t\t\tclearInterval(timer);\n\t\t\tauto();\n\t\t})\n\t);\n\n\tlet timer;\n\tfunction auto() {\n\t\ttimer = setInterval(() => {\n\t\t\t(0,_modules_handleImg__WEBPACK_IMPORTED_MODULE_0__.nextImage)(_modules_handleImg__WEBPACK_IMPORTED_MODULE_0__.getDisplayedImage);\n\t\t\t(0,_modules_navigation__WEBPACK_IMPORTED_MODULE_2__.paintDots)((0,_modules_handleImg__WEBPACK_IMPORTED_MODULE_0__.getDisplayedImage)());\n\t\t}, 2000);\n\t}\n\tauto();\n})();\n\n\n//# sourceURL=webpack://dui-exercises/./src/index.js?");

/***/ }),

/***/ "./src/modules/handleImg.js":
/*!**********************************!*\
  !*** ./src/modules/handleImg.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadImages\": () => (/* binding */ loadImages),\n/* harmony export */   \"appendImages\": () => (/* binding */ appendImages),\n/* harmony export */   \"displayImage\": () => (/* binding */ displayImage),\n/* harmony export */   \"nextImage\": () => (/* binding */ nextImage),\n/* harmony export */   \"getDisplayedImage\": () => (/* binding */ getDisplayedImage)\n/* harmony export */ });\nconst imageArray = [];\n\nfunction makeImage(imgUrl) {\n\tconst image = document.createElement('img');\n\timage.classList.add('off-image');\n\timage.src = imgUrl;\n\timage.setAttribute('data-index', imageArray.length);\n\n\treturn image;\n}\n\nfunction loadImages() {\n\tconst urls = [\n\t\t'../src/img/img1.jpg',\n\t\t'../src/img/img2.jpeg',\n\t\t'../src/img/artur-malagueta.png',\n\t\t'../src/img/printar.jpg',\n\t\t'../src/img/img5.png',\n\t];\n\n\turls.forEach((url) => imageArray.push(makeImage(url)));\n}\n\nfunction appendImages() {\n\tconst imagesDiv = document.querySelector('#all-images-div');\n\n\timageArray.forEach((image) => imagesDiv.appendChild(image));\n}\n\nfunction displayImage(index) {\n\timageArray.forEach((otherImg) => {\n\t\tif (otherImg.classList.contains('displaying')) {\n\t\t\totherImg.classList.toggle('displaying');\n\t\t}\n\t});\n\n\timageArray[index].classList.toggle('displaying');\n}\n\nfunction getDisplayedImage() {\n\tconst currentImg = document.querySelector('.displaying');\n\treturn parseInt(currentImg.dataset.index);\n}\n\nfunction nextImage(direction) {\n\tconst index = getDisplayedImage();\n\tconsole.log(index);\n\tlet newIndex = direction == 'arrow-left' ? index - 1 : index + 1;\n\n\tif (newIndex < 0) newIndex = 4;\n\telse if (newIndex > 4) newIndex = 0;\n\n\tdisplayImage(newIndex);\n}\n\n\n\n\n//# sourceURL=webpack://dui-exercises/./src/modules/handleImg.js?");

/***/ }),

/***/ "./src/modules/loadPage.js":
/*!*********************************!*\
  !*** ./src/modules/loadPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load\": () => (/* binding */ load)\n/* harmony export */ });\n/* harmony import */ var _handleImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleImg */ \"./src/modules/handleImg.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ \"./src/modules/navigation.js\");\n\n\n\nfunction load() {\n\t(0,_handleImg__WEBPACK_IMPORTED_MODULE_0__.loadImages)();\n\t(0,_handleImg__WEBPACK_IMPORTED_MODULE_0__.appendImages)();\n\t(0,_navigation__WEBPACK_IMPORTED_MODULE_1__.makeDots)();\n\t(0,_handleImg__WEBPACK_IMPORTED_MODULE_0__.displayImage)('0');\n\t(0,_navigation__WEBPACK_IMPORTED_MODULE_1__.paintDots)('0');\n}\n\n\n\n\n//# sourceURL=webpack://dui-exercises/./src/modules/loadPage.js?");

/***/ }),

/***/ "./src/modules/navigation.js":
/*!***********************************!*\
  !*** ./src/modules/navigation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeDots\": () => (/* binding */ makeDots),\n/* harmony export */   \"paintDots\": () => (/* binding */ paintDots)\n/* harmony export */ });\nfunction makeDots() {\n\tconst dotsDiv = document.querySelector('#dots');\n\n\tfor (let i = 0; i < 5; i++) {\n\t\tconst dot = document.createElement('div');\n\t\tdot.classList.add('all-dots');\n\t\tdot.setAttribute('data-dot-index', i);\n\t\tdotsDiv.appendChild(dot);\n\t}\n}\n\nfunction paintDots(index) {\n\tconst dots = document.querySelectorAll('.all-dots');\n\tconst activeDot = document.querySelector(`[data-dot-index='${index}']`);\n\n\tdots.forEach((dot) => {\n\t\tif (dot.classList.contains('painted')) {\n\t\t\tdot.classList.toggle('painted');\n\t\t}\n\t});\n\n\tactiveDot.classList.toggle('painted');\n}\n\n\n\n\n//# sourceURL=webpack://dui-exercises/./src/modules/navigation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;