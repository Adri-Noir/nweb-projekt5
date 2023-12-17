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

/***/ "./src/worker/index.ts":
/*!*****************************!*\
  !*** ./src/worker/index.ts ***!
  \*****************************/
/***/ (() => {

eval("async function fetchUpcomingMovies() {\n    try {\n        const response = await fetch(\"/api/getUpcomingMovies\", {\n            method: \"GET\"\n        });\n        const data = await response.json();\n        window.localStorage.setItem(\"upcomingMovies\", JSON.stringify(data.results));\n        return data;\n    } catch (error) {\n        return console.log(error);\n    }\n}\nself.addEventListener(\"periodicsync\", function(event) {\n    // @ts-ignore\n    if (event.tag === \"sync-upcoming-movies\") {\n        // @ts-ignore\n        event.waitUntil(fetchUpcomingMovies());\n    }\n});\n\n\n//# sourceURL=webpack://nweb-projekt5/./src/worker/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/worker/index.ts"]();
/******/ 	
/******/ })()
;