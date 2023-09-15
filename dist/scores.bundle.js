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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addScore: () => (/* binding */ addScore),\n/* harmony export */   scoreUrl: () => (/* binding */ scoreUrl)\n/* harmony export */ });\nconst apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';\nconst gameKey = 'HA3SIpAdpyV6mTFiQEzK';\nconst scoreUrl = `${apiUrl}/games/${gameKey}/scores`;\n\nconst addScore = async (user, score) => {\n  try {\n    const response = await fetch(scoreUrl, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({ user, score }),\n    });\n    const data = await response.json();\n    // eslint-disable-next-line no-console\n    console.log(data);\n  } catch {\n    throw new Error();\n  }\n};\n\n\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/scores.js":
/*!*******************************!*\
  !*** ./src/modules/scores.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchScores: () => (/* binding */ fetchScores),\n/* harmony export */   refresh: () => (/* binding */ refresh)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/modules/data.js\");\n\n\nconst scoreList = document.querySelector('.score-list');\n\nconst fetchScores = async () => {\n  try {\n    const data = await (\n      await fetch(_data_js__WEBPACK_IMPORTED_MODULE_0__.scoreUrl, {\n        method: 'GET',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      })\n    ).json();\n    const scoreArray = data.result;\n    scoreList.innerHTML = scoreArray\n      .map((score) => ` <li>${score.user} : ${score.score}</li>`)\n      .join('');\n    return scoreArray;\n  } catch {\n    throw new Error();\n  }\n};\n\nconst refresh = () => {\n  window.location.reload();\n  if (scoreList === '') {\n    fetchScores();\n  }\n};\n\n\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/scores.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/scores.js"));
/******/ }
]);