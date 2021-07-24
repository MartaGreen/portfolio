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

/***/ "./src/scripts/requests.js":
/*!*********************************!*\
  !*** ./src/scripts/requests.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getGarageData\": () => (/* binding */ getGarageData),\n/* harmony export */   \"getCarEngine\": () => (/* binding */ getCarEngine),\n/* harmony export */   \"getDriveStatus\": () => (/* binding */ getDriveStatus),\n/* harmony export */   \"getStopCar\": () => (/* binding */ getStopCar),\n/* harmony export */   \"getCreateCar\": () => (/* binding */ getCreateCar),\n/* harmony export */   \"getRemoveCar\": () => (/* binding */ getRemoveCar),\n/* harmony export */   \"getUpdateCar\": () => (/* binding */ getUpdateCar)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst SERVER_URL = \"http://127.0.0.1:3000/\";\nconst getGarageData = () => __awaiter(void 0, void 0, void 0, function* () { return (yield fetch(`${SERVER_URL}garage`)).json(); });\nconst getCarEngine = (id) => __awaiter(void 0, void 0, void 0, function* () { return (yield fetch(`${SERVER_URL}engine?id=${id}&status=started`)).json(); });\nconst getDriveStatus = (id) => __awaiter(void 0, void 0, void 0, function* () { return (yield fetch(`${SERVER_URL}engine?id=${id}&status=drive`)).json(); });\nconst getStopCar = (id) => __awaiter(void 0, void 0, void 0, function* () { return (yield fetch(`${SERVER_URL}engine?id=${id}&status=stopped`)).json(); });\nconst getCreateCar = (name, color) => __awaiter(void 0, void 0, void 0, function* () {\n    return (yield fetch(`${SERVER_URL}garage`, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify({\n            name: name,\n            color: color,\n        }),\n    })).json();\n});\nconst getRemoveCar = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    return (yield fetch(`${SERVER_URL}garage/${id}`, {\n        method: \"DELETE\",\n    })).json();\n});\nconst getUpdateCar = (id, name, color) => __awaiter(void 0, void 0, void 0, function* () {\n    return (yield fetch(`${SERVER_URL}garage/${id}`, {\n        method: \"PUT\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify({\n            name: name,\n            color: color\n        })\n    })).json();\n});\n//# sourceMappingURL=requests.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9zY3JpcHRzL3JlcXVlc3RzLmpzPzVlZDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTyw0RUFBNEUsd0JBQXdCLFdBQVcsaUJBQWlCLEVBQUU7QUFDbEksNkVBQTZFLHdCQUF3QixXQUFXLFlBQVksR0FBRywwQkFBMEIsRUFBRTtBQUMzSiwrRUFBK0Usd0JBQXdCLFdBQVcsWUFBWSxHQUFHLHdCQUF3QixFQUFFO0FBQzNKLDJFQUEyRSx3QkFBd0IsV0FBVyxZQUFZLEdBQUcsMEJBQTBCLEVBQUU7QUFDeko7QUFDUCwyQkFBMkIsV0FBVztBQUN0QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ007QUFDUCwyQkFBMkIsV0FBVyxTQUFTLEdBQUc7QUFDbEQ7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNNO0FBQ1AsMkJBQTJCLFdBQVcsU0FBUyxHQUFHO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRCIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL3JlcXVlc3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jb25zdCBTRVJWRVJfVVJMID0gXCJodHRwOi8vMTI3LjAuMC4xOjMwMDAvXCI7XG5leHBvcnQgY29uc3QgZ2V0R2FyYWdlRGF0YSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyByZXR1cm4gKHlpZWxkIGZldGNoKGAke1NFUlZFUl9VUkx9Z2FyYWdlYCkpLmpzb24oKTsgfSk7XG5leHBvcnQgY29uc3QgZ2V0Q2FyRW5naW5lID0gKGlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuICh5aWVsZCBmZXRjaChgJHtTRVJWRVJfVVJMfWVuZ2luZT9pZD0ke2lkfSZzdGF0dXM9c3RhcnRlZGApKS5qc29uKCk7IH0pO1xuZXhwb3J0IGNvbnN0IGdldERyaXZlU3RhdHVzID0gKGlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuICh5aWVsZCBmZXRjaChgJHtTRVJWRVJfVVJMfWVuZ2luZT9pZD0ke2lkfSZzdGF0dXM9ZHJpdmVgKSkuanNvbigpOyB9KTtcbmV4cG9ydCBjb25zdCBnZXRTdG9wQ2FyID0gKGlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuICh5aWVsZCBmZXRjaChgJHtTRVJWRVJfVVJMfWVuZ2luZT9pZD0ke2lkfSZzdGF0dXM9c3RvcHBlZGApKS5qc29uKCk7IH0pO1xuZXhwb3J0IGNvbnN0IGdldENyZWF0ZUNhciA9IChuYW1lLCBjb2xvcikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuICh5aWVsZCBmZXRjaChgJHtTRVJWRVJfVVJMfWdhcmFnZWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgIH0pLFxuICAgIH0pKS5qc29uKCk7XG59KTtcbmV4cG9ydCBjb25zdCBnZXRSZW1vdmVDYXIgPSAoaWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiAoeWllbGQgZmV0Y2goYCR7U0VSVkVSX1VSTH1nYXJhZ2UvJHtpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICB9KSkuanNvbigpO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0VXBkYXRlQ2FyID0gKGlkLCBuYW1lLCBjb2xvcikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuICh5aWVsZCBmZXRjaChgJHtTRVJWRVJfVVJMfWdhcmFnZS8ke2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvclxuICAgICAgICB9KVxuICAgIH0pKS5qc29uKCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3RzLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/requests.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/requests.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;