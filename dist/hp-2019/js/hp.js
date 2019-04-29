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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/hp-2019/hp.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/change-location-hash.js":
/*!************************************!*\
  !*** ./js/change-location-hash.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return changeLocationHash; });
/* eslint-env browser */
function changeLocationHash(hash) {
  if ('replaceState' in window.history) {
    window.history.replaceState({}, null, hash);
  } else {
    window.location.hash = hash;
  }
}

/***/ }),

/***/ "./js/feature-detect.js":
/*!******************************!*\
  !*** ./js/feature-detect.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureDetect; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-env browser */
var matchMedia = window.matchMedia || window.msMatchMedia || function () {
  return false;
};

var FeatureDetect =
/*#__PURE__*/
function () {
  function FeatureDetect() {
    _classCallCheck(this, FeatureDetect);

    this.tests = {};
  }

  _createClass(FeatureDetect, [{
    key: "addTest",
    value: function addTest(name, result) {
      this.tests[name] = result;
      FeatureDetect.prototype[name] = result; // Detect when DOMReady has already happened

      if (this.$container) {
        FeatureDetect.toggleClasses(this.$container, name, result);
      }
    }
  }, {
    key: "addClasses",
    value: function addClasses($container) {
      var _this = this;

      this.$container = $container;
      Object.keys(this.tests).forEach(function (name) {
        FeatureDetect.toggleClasses($container, name, _this.tests[name]);
      });
    }
  }], [{
    key: "mq",
    value: function mq(query) {
      var mql = matchMedia(query);
      return mql && mql.matches || false;
    }
  }, {
    key: "cssSupports",
    value: function cssSupports(property, value) {
      if (typeof window.CSS !== 'undefined' && 'supports' in window.CSS) {
        return window.CSS.supports(property, value);
      }

      if ('suportsCSS' in window) {
        return window.suportsCSS("".concat(property, ":").concat(value));
      }

      return false;
    }
  }, {
    key: "toggleClasses",
    value: function toggleClasses($container, feature, supported) {
      if (supported) {
        $container.removeClass("no-".concat(feature)).addClass(feature);
      } else {
        $container.removeClass(feature).addClass("no-".concat(feature));
      }
    }
  }]);

  return FeatureDetect;
}();



/***/ }),

/***/ "./js/hp-2019/hp.js":
/*!**************************!*\
  !*** ./js/hp-2019/hp.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _more_links_popover_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more-links-popover.jquery */ "./js/hp-2019/more-links-popover.jquery.js");
/* eslint-env browser */


/***/ }),

/***/ "./js/hp-2019/more-links-popover.jquery.js":
/*!*************************************************!*\
  !*** ./js/hp-2019/more-links-popover.jquery.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _feature_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feature-detect */ "./js/feature-detect.js");
/* harmony import */ var _change_location_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../change-location-hash */ "./js/change-location-hash.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-env browser */



var Config = {
  Defaults: {
    container: 'body',
    // Needed to avoid being drawn under the nav carousel which is fixed in the body
    template: "\n      <div class=\"popover megamenu-links\">\n        <div class=\"arrow\"></div>\n        <div class=\"popover-inner\">\n          <div class=\"popover-content container-fluid\"></div>\n        </div>\n      </div>".trim()
  }
};
/**
 * Display a megamenu popover
 */

var MoreLinksPopover =
/*#__PURE__*/
function () {
  function MoreLinksPopover(options) {
    _classCallCheck(this, MoreLinksPopover);

    var o = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Config.Defaults, options);
    this.$trigger = o.trigger;
    this.options = o;
    this.wireEventHandlers();
  }

  _createClass(MoreLinksPopover, [{
    key: "wireEventHandlers",
    value: function wireEventHandlers() {
      var $trigger = this.$trigger,
          options = this.options;
      $trigger.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }).popover({
        container: options.container,
        content: jquery__WEBPACK_IMPORTED_MODULE_0___default()(options.target).html(),
        template: options.template,
        html: true,
        placement: 'bottom',
        title: 'More links',
        trigger: 'click'
      }).on('show.bs.popover', function () {
        $trigger.data('previous-hash', window.location.hash);
        Object(_change_location_hash__WEBPACK_IMPORTED_MODULE_2__["default"])(options.target);
      }).on('hide.bs.popover', function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popover.megamenu-links').is(':visible')) {
          if ($trigger.data('previous-hash') && $trigger.data('previous-hash') !== '#more-links') {
            Object(_change_location_hash__WEBPACK_IMPORTED_MODULE_2__["default"])($trigger.data('previous-hash'));
          }
        }
      });

      if ($trigger.is(':visible') && window.location.hash === options.target) {
        $trigger.popover('show');
      } // Click away to dismiss


      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').on('click.popoverDismiss', function (e) {
        // if clicking anywhere other than the popover itself
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.popover').length === 0 && jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.use-popover').length === 0) {
          $trigger.popover('hide');
        }
      });
    }
  }]);

  return MoreLinksPopover;
}();

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.moreLinksPopover = function initPlugin() {
  var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  function attach(i, element) {
    var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var moreLinksPopover = new MoreLinksPopover(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, $trigger.data(), o, {
      trigger: $trigger
    }));
    $trigger.data('id7.more-links-popover', moreLinksPopover);
  }

  return this.each(attach);
};

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  if (_feature_detect__WEBPACK_IMPORTED_MODULE_1__["default"].cssSupports('display', 'flex')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-toggle="id7:megamenu-popover"]').moreLinksPopover();
  }
});

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=hp.js.map