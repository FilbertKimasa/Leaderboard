"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["scores"],{

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrores = [\n  { id: 1, name: 'name 1', score: 100 },\n  { id: 1, name: 'name 1', score: 500 },\n  { id: 1, name: 'name 1', score: 70 },\n  { id: 1, name: 'name 1', score: 80 },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrores);\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/scores.js":
/*!*******************************!*\
  !*** ./src/modules/scores.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/modules/data.js\");\n\n\nconst scoreList = document.querySelector('.score-list');\nconst renderScores = () => {\n  scoreList.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    .map((score) => ` <li>${score.name} : ${score.score}</li>`)\n    .join('');\n};\n\nrenderScores();\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/scores.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/scores.js"));
/******/ }
]);