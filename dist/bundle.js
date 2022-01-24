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

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gamevers/./src/scss/main.scss?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\nvar routes_1 = __webpack_require__(/*! ./ts/routes */ \"./src/ts/routes.ts\");\nvar setRoute = function () {\n    var path = window.location.hash.substring(1).split('/');\n    var pageArgument = path[1] || \"\";\n    var pageContent = document.getElementById('pageContent');\n    if (pageContent) {\n        routes_1.default[path[0]]({ pageArgument: pageArgument, pageContent: pageContent });\n        return true;\n    }\n    console.error(\"Oups, there was an issue!\");\n    return false;\n};\nwindow.addEventListener('hashchange', function () { return setRoute(); });\nwindow.addEventListener('DOMContentLoaded', function () { return setRoute(); });\n\n\n//# sourceURL=webpack://gamevers/./src/index.ts?");

/***/ }),

/***/ "./src/ts/Home.ts":
/*!************************!*\
  !*** ./src/ts/Home.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Home = function (_a) {\n    var pageArgument = _a.pageArgument, pageContent = _a.pageContent;\n    var render = function () {\n        pageContent.innerHTML = \"\\n      <section class=\\\"home\\\">\\n        <div class=\\\"articles\\\">Hey, this is the Home page!</div>\\n      </section>\\n    \";\n    };\n    render();\n};\nexports[\"default\"] = Home;\n\n\n//# sourceURL=webpack://gamevers/./src/ts/Home.ts?");

/***/ }),

/***/ "./src/ts/PageDetail.ts":
/*!******************************!*\
  !*** ./src/ts/PageDetail.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar PageDetail = function (_a) {\n    var pageArgument = _a.pageArgument, pageContent = _a.pageContent;\n    var render = function () {\n        pageContent.innerHTML = \"\\n      <section class=\\\"home\\\">\\n        <div class=\\\"articles\\\">Hey, this is the Details Page of \".concat(pageArgument, \"!</div>\\n      </section>\\n    \");\n    };\n    render();\n};\nexports[\"default\"] = PageDetail;\n\n\n//# sourceURL=webpack://gamevers/./src/ts/PageDetail.ts?");

/***/ }),

/***/ "./src/ts/PageList.ts":
/*!****************************!*\
  !*** ./src/ts/PageList.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar PageList = function (_a) {\n    var pageArgument = _a.pageArgument, pageContent = _a.pageContent;\n    var render = function () {\n        pageContent.innerHTML = \"\\n      <section class=\\\"home\\\">\\n        <div class=\\\"articles\\\">Hey, this page is a PageList template, about: \".concat(pageArgument, \"!</div>\\n      </section>\\n    \");\n    };\n    console.log(\"caca\");\n    render();\n};\nexports[\"default\"] = PageList;\n\n\n//# sourceURL=webpack://gamevers/./src/ts/PageList.ts?");

/***/ }),

/***/ "./src/ts/routes.ts":
/*!**************************!*\
  !*** ./src/ts/routes.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Home_1 = __webpack_require__(/*! ./Home */ \"./src/ts/Home.ts\");\nvar PageDetail_1 = __webpack_require__(/*! ./PageDetail */ \"./src/ts/PageDetail.ts\");\nvar PageList_1 = __webpack_require__(/*! ./PageList */ \"./src/ts/PageList.ts\");\nvar routes = {\n    \"\": Home_1.default,\n    pageList: PageList_1.default,\n    pageDetail: PageDetail_1.default\n};\nexports[\"default\"] = routes;\n\n\n//# sourceURL=webpack://gamevers/./src/ts/routes.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;