/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/any.ts":
/*!********************!*\
  !*** ./src/any.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var int = new XMLHttpRequest();
var text = int;
console.log(text.replace('a', 'x'));


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./any */ "./src/any.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_any__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructor */ "./src/constructor.ts");
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ "./src/enums.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_enums__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _intersection_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intersection-types */ "./src/intersection-types.ts");
/* harmony import */ var _intersection_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_intersection_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _never__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./never */ "./src/never.ts");
/* harmony import */ var _never__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_never__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _overload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overload */ "./src/overload.ts");
/* harmony import */ var _overload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_overload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _partial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partial */ "./src/partial.ts");
/* harmony import */ var _partial__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_partial__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tuple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tuple */ "./src/tuple.ts");
/* harmony import */ var _tuple__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tuple__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _type_assertions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./type-assertions */ "./src/type-assertions.ts");
/* harmony import */ var _type_assertions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_type_assertions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _union_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./union-types */ "./src/union-types.ts");
/* harmony import */ var _union_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_union_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _void__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./void */ "./src/void.ts");
/* harmony import */ var _void__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_void__WEBPACK_IMPORTED_MODULE_10__);













/***/ }),

/***/ "./src/constructor.ts":
/*!****************************!*\
  !*** ./src/constructor.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Form = /** @class */ (function () {
    function Form(config) {
        this.formElement = document.querySelector(config.formClass);
        // mais configurações
    }
    return Form;
}());


/***/ }),

/***/ "./src/enums.ts":
/*!**********************!*\
  !*** ./src/enums.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Direction;
(function (Direction) {
    Direction[Direction["Down"] = 0] = "Down";
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function a(type) {
    console.log(type);
}
a(Direction.Down);
a(Direction.Up);
a(Direction.Left);
a(Direction.Right);


/***/ }),

/***/ "./src/intersection-types.ts":
/*!***********************************!*\
  !*** ./src/intersection-types.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var obj = {
    field1: '1',
    field2: 1,
    field3: 'olar'
};


/***/ }),

/***/ "./src/never.ts":
/*!**********************!*\
  !*** ./src/never.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function Exception(msg) {
    throw new Error(msg);
}


/***/ }),

/***/ "./src/overload.ts":
/*!*************************!*\
  !*** ./src/overload.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function soma(a, b) {
    return {};
}
var b = soma(1, 1);
b.setFullYear(2020);


/***/ }),

/***/ "./src/partial.ts":
/*!************************!*\
  !*** ./src/partial.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function MyComponent(props) {
    // faz o app do uber
}
MyComponent({
    text: 'text',
    callback: function () { }
});


/***/ }),

/***/ "./src/tuple.ts":
/*!**********************!*\
  !*** ./src/tuple.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tupla = [
    123,
    'guilherme',
    {
        street: 'brigadeiro luis antonio',
        number: 1884
    }
];
// tupla[0] = ''
// tupla[1] = 123
// tupla[2] = {
//   street: '',
//   number: 1
// }
// tupla[3] = 123


/***/ }),

/***/ "./src/type-assertions.ts":
/*!********************************!*\
  !*** ./src/type-assertions.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var x2 = {
    field1: 123,
    field2: 123
};
var x3 = x2;


/***/ }),

/***/ "./src/union-types.ts":
/*!****************************!*\
  !*** ./src/union-types.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function x(param) {
    console.log(param.field2);
    if ('field2' in param) {
        console.log(param.field2);
    }
    // if (param.field2) {
    //   console.log(field2);
    // }
}


/***/ }),

/***/ "./src/void.ts":
/*!*********************!*\
  !*** ./src/void.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function dummy() {
    console.log('dummy');
}
dummy();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FueS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW51bXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyc2VjdGlvbi10eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsb2FkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYXJ0aWFsLnRzIiwid2VicGFjazovLy8uL3NyYy90dXBsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZS1hc3NlcnRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy91bmlvbi10eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RB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QUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzNCO0lBRUQsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixJQUFJO0FBQ04sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN0QkQsU0FBUyxLQUFLO0lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QixDQUFDO0FBR0QsS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJkaXN0XCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC50c1wiKTtcbiIsImNvbnN0IGludDogYW55ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5jb25zdCB0ZXh0OiBzdHJpbmcgPSBpbnQ7XG5cbmNvbnNvbGUubG9nKHRleHQucmVwbGFjZSgnYScsICd4JykpOyIsImltcG9ydCAnLi9hbnknO1xuaW1wb3J0ICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCAnLi9lbnVtcyc7XG5pbXBvcnQgJy4vaW50ZXJzZWN0aW9uLXR5cGVzJztcbmltcG9ydCAnLi9uZXZlcic7XG5pbXBvcnQgJy4vb3ZlcmxvYWQnO1xuaW1wb3J0ICcuL3BhcnRpYWwnO1xuaW1wb3J0ICcuL3R1cGxlJztcbmltcG9ydCAnLi90eXBlLWFzc2VydGlvbnMnO1xuaW1wb3J0ICcuL3VuaW9uLXR5cGVzJztcbmltcG9ydCAnLi92b2lkJztcbiIsInR5cGUgRm9ybUNvbmZpZyA9IHtcbiAgZm9ybUNsYXNzOiBzdHJpbmdcbn1cblxuY2xhc3MgRm9ybSB7XG4gIHByaXZhdGUgZm9ybUVsZW1lbnQ6IEhUTUxGb3JtRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IEZvcm1Db25maWcpIHtcbiAgICB0aGlzLmZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuZm9ybUNsYXNzKSEgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgIC8vIG1haXMgY29uZmlndXJhw6fDtWVzXG4gIH1cblxuICAvLyBjb25maWd1cmUoY29uZmlnOiBGb3JtQ29uZmlnKSB7XG4gIC8vICAgdGhpcy5mb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmZvcm1DbGFzcykhIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgLy8gfVxufSIsImVudW0gRGlyZWN0aW9uIHtcbiAgRG93bixcbiAgVXAsXG4gIExlZnQsXG4gIFJpZ2h0XG59XG5cbmZ1bmN0aW9uIGEodHlwZTogRGlyZWN0aW9uKTogdm9pZCB7XG4gIGNvbnNvbGUubG9nKHR5cGUpXG59XG5cbmEoRGlyZWN0aW9uLkRvd24pXG5hKERpcmVjdGlvbi5VcClcbmEoRGlyZWN0aW9uLkxlZnQpXG5hKERpcmVjdGlvbi5SaWdodCkiLCJcblxuXG5cbnR5cGUgQSA9IHtcbiAgZmllbGQxOiBzdHJpbmc7XG4gIGZpZWxkMjogbnVtYmVyO1xufVxuXG50eXBlIEIgPSB7XG4gIGZpZWxkMTogc3RyaW5nO1xuICBmaWVsZDM6IFN0cmluZztcbn1cblxudHlwZSBDID0gQSAmIEI7XG5cbmNvbnN0IG9iajogQyA9IHtcbiAgZmllbGQxOiAnMScsXG4gIGZpZWxkMjogMSxcbiAgZmllbGQzOiAnb2xhcidcbn0iLCJmdW5jdGlvbiBFeGNlcHRpb24obXNnOiBzdHJpbmcpIHtcbiAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG59XG4iLCJmdW5jdGlvbiBzb21hKGE6IG51bWJlciwgYjogbnVtYmVyKTogRGF0ZVxuZnVuY3Rpb24gc29tYShhOiBudW1iZXIsIGI6IHN0cmluZyk6IHN0cmluZ1xuZnVuY3Rpb24gc29tYShhOiBudW1iZXIsIGI6IGFueSkge1xuICByZXR1cm4ge31cbn1cblxuY29uc3QgYiA9IHNvbWEoMSwgMSk7XG5iLnNldEZ1bGxZZWFyKDIwMjApOyIsInR5cGUgUHJvcHMgPSB7XG4gIHRleHQ6IHN0cmluZztcbiAgY2FsbGJhY2s6ICgpID0+IHZvaWRcbn1cblxuZnVuY3Rpb24gTXlDb21wb25lbnQocHJvcHM6IFByb3BzKSB7XG4gIC8vIGZheiBvIGFwcCBkbyB1YmVyXG59XG5cbk15Q29tcG9uZW50KHtcbiAgdGV4dDogJ3RleHQnLFxuICBjYWxsYmFjazogKCkgPT4geyB9XG59KTtcbiIsInR5cGUgQWRkcmVzcyA9IHtcbiAgc3RyZWV0OiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xufVxuXG5jb25zdCB0dXBsYTogW251bWJlciwgc3RyaW5nLCBBZGRyZXNzXSA9IFtcbiAgMTIzLFxuICAnZ3VpbGhlcm1lJyxcbiAge1xuICAgIHN0cmVldDogJ2JyaWdhZGVpcm8gbHVpcyBhbnRvbmlvJyxcbiAgICBudW1iZXI6IDE4ODRcbiAgfVxuXTtcblxuLy8gdHVwbGFbMF0gPSAnJ1xuLy8gdHVwbGFbMV0gPSAxMjNcbi8vIHR1cGxhWzJdID0ge1xuLy8gICBzdHJlZXQ6ICcnLFxuLy8gICBudW1iZXI6IDFcbi8vIH1cblxuLy8gdHVwbGFbM10gPSAxMjMiLCJ0eXBlIFggPSB7XG4gIGZpZWxkMTogbnVtYmVyXG59XG5cbmNvbnN0IHgyID0ge1xuICBmaWVsZDE6IDEyMyxcbiAgZmllbGQyOiAxMjNcbn1cblxuY29uc3QgeDMgPSB4MiBhcyBYOyIsInR5cGUgQTEgPSB7XG4gIGZpZWxkMTogc3RyaW5nO1xuICBmaWVsZDI6IG51bWJlcjtcbn1cblxudHlwZSBCMSA9IHtcbiAgZmllbGQxOiBzdHJpbmc7XG4gIGZpZWxkMzogU3RyaW5nO1xufVxuXG5mdW5jdGlvbiB4KHBhcmFtOiBBMSB8IEIxKSB7XG5cbiAgY29uc29sZS5sb2coKHBhcmFtIGFzIEExKS5maWVsZDIpXG5cblxuICBpZiAoJ2ZpZWxkMicgaW4gcGFyYW0pIHtcbiAgICBjb25zb2xlLmxvZyhwYXJhbS5maWVsZDIpO1xuICB9XG5cbiAgLy8gaWYgKHBhcmFtLmZpZWxkMikge1xuICAvLyAgIGNvbnNvbGUubG9nKGZpZWxkMik7XG4gIC8vIH1cbn0iLCJmdW5jdGlvbiBkdW1teSgpOiB2b2lkIHtcbiAgY29uc29sZS5sb2coJ2R1bW15Jyk7XG59XG5cblxuZHVtbXkoKTsiXSwic291cmNlUm9vdCI6IiJ9