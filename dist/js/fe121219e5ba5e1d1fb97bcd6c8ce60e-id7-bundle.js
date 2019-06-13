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
/******/ 	__webpack_require__.p = "/static";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/id7-bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/id7-bundle.js":
/*!**************************!*\
  !*** ./js/id7-bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/adamwilliams/Documents/Projects/id7/js/id7-bundle.js: Unexpected token, expected \")\" (44:121)\n\n\u001b[0m \u001b[90m 42 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 43 | \u001b[39m$\u001b[33m.\u001b[39mfn\u001b[33m.\u001b[39mdropdown\u001b[33m.\u001b[39m\u001b[33mConstructor\u001b[39m\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mkeydown \u001b[33m=\u001b[39m \u001b[36mfunction\u001b[39m (e) {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 44 | \u001b[39m    \u001b[36mif\u001b[39m ((\u001b[33m!\u001b[39m(\u001b[35m/(38|40|27|32)/\u001b[39m\u001b[33m.\u001b[39mtest(e\u001b[33m.\u001b[39mwhich) \u001b[33m&&\u001b[39m (e\u001b[33m.\u001b[39mwhich \u001b[33m<\u001b[39m \u001b[35m65\u001b[39m \u001b[33m||\u001b[39m e\u001b[33m.\u001b[39mwhich \u001b[33m>\u001b[39m \u001b[35m90\u001b[39m)) \u001b[33m||\u001b[39m \u001b[35m/input|textarea/i\u001b[39m\u001b[33m.\u001b[39mtest(e\u001b[33m.\u001b[39mtarget\u001b[33m.\u001b[39mtagName)) \u001b[36mreturn\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                                                                                                         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 45 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 46 | \u001b[39m    \u001b[36mconst\u001b[39m $this \u001b[33m=\u001b[39m $(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 47 | \u001b[39m\u001b[0m\n    at Parser.raise (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:3831:17)\n    at Parser.unexpected (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:5143:16)\n    at Parser.expect (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:5135:28)\n    at Parser.parseParenExpression (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:6387:10)\n    at Parser.parseIfStatement (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:7601:22)\n    at Parser.parseStatementContent (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:7292:21)\n    at Parser.parseStatement (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:7243:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:7810:25)\n    at Parser.parseBlockBody (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:7797:10)\n    at Parser.parseBlock (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:7786:10)\n    at Parser.parseFunctionBody (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:6876:24)\n    at Parser.parseFunctionBodyAndFinish (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:6860:10)\n    at withTopicForbiddingContext (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:7945:12)\n    at Parser.withTopicForbiddingContext (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:7150:14)\n    at Parser.parseFunction (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:7944:10)\n    at Parser.parseFunctionExpression (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:6326:17)\n    at Parser.parseExprAtom (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:6232:21)\n    at Parser.parseExprSubscripts (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:5862:23)\n    at Parser.parseMaybeUnary (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:5842:21)\n    at Parser.parseExprOps (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:5729:23)\n    at Parser.parseMaybeConditional (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:5702:23)\n    at Parser.parseMaybeAssign (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:5647:21)\n    at Parser.parseMaybeAssign (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:5688:25)\n    at Parser.parseExpression (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:5595:23)\n    at Parser.parseStatementContent (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:7378:23)\n    at Parser.parseStatement (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:7243:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:7810:25)\n    at Parser.parseBlockBody (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:7797:10)\n    at Parser.parseTopLevel (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:7181:10)\n    at Parser.parse (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:8660:17)\n    at parse (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/parser/lib/index.js:10660:38)\n    at parser (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\n    at normalizeFile (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\n    at runSync (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/home/adamwilliams/Documents/Projects/id7/node_modules/@babel/core/lib/transform.js:34:34)");

/***/ })

/******/ });
//# sourceMappingURL=id7-bundle.js.map