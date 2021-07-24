/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/moveCarFunc.js":
/*!************************************!*\
  !*** ./src/scripts/moveCarFunc.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPX\": () => (/* binding */ addPX),\n/* harmony export */   \"getFlagPos\": () => (/* binding */ getFlagPos),\n/* harmony export */   \"moveCar\": () => (/* binding */ moveCar),\n/* harmony export */   \"addMoveEvent\": () => (/* binding */ addMoveEvent),\n/* harmony export */   \"addStopEvent\": () => (/* binding */ addStopEvent),\n/* harmony export */   \"addAnimation\": () => (/* binding */ addAnimation)\n/* harmony export */ });\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ \"./src/scripts/shared.js\");\n\nfunction addPX(position) {\n    const posNum = Number(position.split(\"px\")[0]);\n    return `${posNum + 60}px`;\n}\nconst getFlagPos = (race) => {\n    const flagElem = race.querySelector(\".flag\");\n    const styles = getComputedStyle(flagElem);\n    const flagPos = styles.left;\n    return flagPos;\n};\nconst moveCar = () => {\n    _shared__WEBPACK_IMPORTED_MODULE_0__.cars_arr.forEach((car) => {\n        const race = car.getRace();\n        const startBtn = race.querySelector(\".start\");\n        addMoveEvent(startBtn, car);\n        car.removeCar();\n        car.updateCar();\n    });\n};\nfunction addMoveEvent(startBtn, car) {\n    startBtn.addEventListener(\"click\", function moveEvent() {\n        startBtn.removeEventListener(\"click\", moveEvent);\n        car.move();\n    });\n}\nfunction addStopEvent(stopBtn, car) {\n    stopBtn.addEventListener(\"click\", function stopEvent() {\n        car.stopMove();\n        stopBtn.removeEventListener(\"click\", stopEvent);\n    });\n}\nfunction addAnimation(car, carFinishPos, time) {\n    return car.animate([{ left: \"60px\" }, { left: carFinishPos }], {\n        duration: time,\n        easing: \"linear\",\n        fill: \"forwards\",\n    });\n}\n//# sourceMappingURL=moveCarFunc.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9zY3JpcHRzL21vdmVDYXJGdW5jLmpzP2FmMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvQztBQUM3QjtBQUNQO0FBQ0EsY0FBYyxZQUFZO0FBQzFCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxJQUFJLHFEQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1AseUJBQXlCLGVBQWUsR0FBRyxxQkFBcUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3ZlQ2FyRnVuYy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhcnNfYXJyIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5leHBvcnQgZnVuY3Rpb24gYWRkUFgocG9zaXRpb24pIHtcbiAgICBjb25zdCBwb3NOdW0gPSBOdW1iZXIocG9zaXRpb24uc3BsaXQoXCJweFwiKVswXSk7XG4gICAgcmV0dXJuIGAke3Bvc051bSArIDYwfXB4YDtcbn1cbmV4cG9ydCBjb25zdCBnZXRGbGFnUG9zID0gKHJhY2UpID0+IHtcbiAgICBjb25zdCBmbGFnRWxlbSA9IHJhY2UucXVlcnlTZWxlY3RvcihcIi5mbGFnXCIpO1xuICAgIGNvbnN0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoZmxhZ0VsZW0pO1xuICAgIGNvbnN0IGZsYWdQb3MgPSBzdHlsZXMubGVmdDtcbiAgICByZXR1cm4gZmxhZ1Bvcztcbn07XG5leHBvcnQgY29uc3QgbW92ZUNhciA9ICgpID0+IHtcbiAgICBjYXJzX2Fyci5mb3JFYWNoKChjYXIpID0+IHtcbiAgICAgICAgY29uc3QgcmFjZSA9IGNhci5nZXRSYWNlKCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0QnRuID0gcmFjZS5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0XCIpO1xuICAgICAgICBhZGRNb3ZlRXZlbnQoc3RhcnRCdG4sIGNhcik7XG4gICAgICAgIGNhci5yZW1vdmVDYXIoKTtcbiAgICAgICAgY2FyLnVwZGF0ZUNhcigpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBhZGRNb3ZlRXZlbnQoc3RhcnRCdG4sIGNhcikge1xuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBtb3ZlRXZlbnQoKSB7XG4gICAgICAgIHN0YXJ0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb3ZlRXZlbnQpO1xuICAgICAgICBjYXIubW92ZSgpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZFN0b3BFdmVudChzdG9wQnRuLCBjYXIpIHtcbiAgICBzdG9wQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBzdG9wRXZlbnQoKSB7XG4gICAgICAgIGNhci5zdG9wTW92ZSgpO1xuICAgICAgICBzdG9wQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdG9wRXZlbnQpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFuaW1hdGlvbihjYXIsIGNhckZpbmlzaFBvcywgdGltZSkge1xuICAgIHJldHVybiBjYXIuYW5pbWF0ZShbeyBsZWZ0OiBcIjYwcHhcIiB9LCB7IGxlZnQ6IGNhckZpbmlzaFBvcyB9XSwge1xuICAgICAgICBkdXJhdGlvbjogdGltZSxcbiAgICAgICAgZWFzaW5nOiBcImxpbmVhclwiLFxuICAgICAgICBmaWxsOiBcImZvcndhcmRzXCIsXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb3ZlQ2FyRnVuYy5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/moveCarFunc.js\n");

/***/ }),

/***/ "./src/scripts/shared.js":
/*!*******************************!*\
  !*** ./src/scripts/shared.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BODY\": () => (/* binding */ BODY),\n/* harmony export */   \"cars_arr\": () => (/* binding */ cars_arr),\n/* harmony export */   \"createInput\": () => (/* binding */ createInput),\n/* harmony export */   \"updateCarCount\": () => (/* binding */ updateCarCount),\n/* harmony export */   \"generatePages\": () => (/* binding */ generatePages)\n/* harmony export */ });\nconst BODY = document.querySelector(\"body\");\nlet cars_arr = [];\nconst createInput = (type, className, value) => {\n    if (value === \"disabled\") {\n        return `\n      <input type='${type}' class='${className}' disabled='${value}'></input>\n    `;\n    }\n    else {\n        return `\n      <input type='${type}' class='${className}' value='${value}'></input>\n  `;\n    }\n};\nconst updateCarCount = () => {\n    const garage = document.querySelector(\".garage\");\n    const newCarCount = document.querySelectorAll(\".raceTrack\").length;\n    garage.innerHTML = `Garage (${newCarCount})`;\n};\nconst generatePages = (start, end) => {\n    const races = document.querySelectorAll(\".raceTrack\");\n    const nextBtn = document.querySelector(\".next\");\n    if (!races[end]) {\n        nextBtn.setAttribute(\"disabled\", \"disabled\");\n        nextBtn.classList.add(\"blockedBtn\");\n    }\n    else {\n        nextBtn.removeAttribute(\"disabled\");\n        nextBtn.classList.remove(\"blockedBtn\");\n    }\n    const prevBtn = document.querySelector(\".prev\");\n    if (start === 0) {\n        prevBtn.setAttribute(\"disabled\", \"disabled\");\n        prevBtn.classList.add(\"blockedBtn\");\n    }\n    else {\n        prevBtn.removeAttribute(\"disabled\");\n        prevBtn.classList.remove(\"blockedBtn\");\n    }\n    races.forEach((race, idx) => {\n        race.classList.remove(\"nextPage_race\");\n        if (!(idx >= start && idx < end)) {\n            race.classList.add(\"nextPage_race\");\n        }\n    });\n};\n//# sourceMappingURL=shared.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9zY3JpcHRzL3NoYXJlZC5qcz81MWNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU87QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNBLHFCQUFxQixLQUFLLFdBQVcsVUFBVSxjQUFjLE1BQU07QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNO0FBQ2hFO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtDQUFrQyxZQUFZO0FBQzlDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL3NoYXJlZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBCT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5leHBvcnQgbGV0IGNhcnNfYXJyID0gW107XG5leHBvcnQgY29uc3QgY3JlYXRlSW5wdXQgPSAodHlwZSwgY2xhc3NOYW1lLCB2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gXCJkaXNhYmxlZFwiKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICA8aW5wdXQgdHlwZT0nJHt0eXBlfScgY2xhc3M9JyR7Y2xhc3NOYW1lfScgZGlzYWJsZWQ9JyR7dmFsdWV9Jz48L2lucHV0PlxuICAgIGA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgPGlucHV0IHR5cGU9JyR7dHlwZX0nIGNsYXNzPScke2NsYXNzTmFtZX0nIHZhbHVlPScke3ZhbHVlfSc+PC9pbnB1dD5cbiAgYDtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhckNvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhcmFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FyYWdlXCIpO1xuICAgIGNvbnN0IG5ld0NhckNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yYWNlVHJhY2tcIikubGVuZ3RoO1xuICAgIGdhcmFnZS5pbm5lckhUTUwgPSBgR2FyYWdlICgke25ld0NhckNvdW50fSlgO1xufTtcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVBhZ2VzID0gKHN0YXJ0LCBlbmQpID0+IHtcbiAgICBjb25zdCByYWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmFjZVRyYWNrXCIpO1xuICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5leHRcIik7XG4gICAgaWYgKCFyYWNlc1tlbmRdKSB7XG4gICAgICAgIG5leHRCdG4uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgbmV4dEJ0bi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tlZEJ0blwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5leHRCdG4ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIG5leHRCdG4uY2xhc3NMaXN0LnJlbW92ZShcImJsb2NrZWRCdG5cIik7XG4gICAgfVxuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXZcIik7XG4gICAgaWYgKHN0YXJ0ID09PSAwKSB7XG4gICAgICAgIHByZXZCdG4uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgcHJldkJ0bi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tlZEJ0blwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByZXZCdG4ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHByZXZCdG4uY2xhc3NMaXN0LnJlbW92ZShcImJsb2NrZWRCdG5cIik7XG4gICAgfVxuICAgIHJhY2VzLmZvckVhY2goKHJhY2UsIGlkeCkgPT4ge1xuICAgICAgICByYWNlLmNsYXNzTGlzdC5yZW1vdmUoXCJuZXh0UGFnZV9yYWNlXCIpO1xuICAgICAgICBpZiAoIShpZHggPj0gc3RhcnQgJiYgaWR4IDwgZW5kKSkge1xuICAgICAgICAgICAgcmFjZS5jbGFzc0xpc3QuYWRkKFwibmV4dFBhZ2VfcmFjZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNoYXJlZC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/shared.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/moveCarFunc.js");
/******/ 	
/******/ })()
;