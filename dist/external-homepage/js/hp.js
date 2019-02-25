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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/external-homepage/hp.js");
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

/***/ "./js/external-homepage/homepage-carousel.jquery.js":
/*!**********************************************************!*\
  !*** ./js/external-homepage/homepage-carousel.jquery.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modernizr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modernizr */ "modernizr");
/* harmony import */ var modernizr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(modernizr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "lodash-es");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var panelsnap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! panelsnap */ "./node_modules/panelsnap/lib/panelsnap.umd.js");
/* harmony import */ var panelsnap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(panelsnap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _change_location_hash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../change-location-hash */ "./js/change-location-hash.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-env browser */





var Config = {
  /**
   * @return {string}
   */
  PanelsCSSTemplate: function PanelsCSSTemplate(o) {
    return "body .id7-masthead .id7-search .fa {color: rgba(".concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(o.colour_r), ", ").concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(o.colour_g), ", ").concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(o.colour_b), ", 0.5);}\n      body .id7-masthead .id7-search .twitter-typeahead:hover + .fa {color: ").concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(o.colour), ";}\n      body .id7-masthead .id7-search .twitter-typeahead .tt-suggestion.tt-cursor {background: ").concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(o.colour), ";}\n      body .form-control:focus {border-color: ").concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(o.colour), "; -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(").concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(o.colour_r), ", ").concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(o.colour_g), ", ").concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(o.colour_b), ", 0.6); box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(").concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(o.colour_r), ", ").concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(o.colour_g), ", ").concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(o.colour_b), ", 0.6);}\n      .id7-page-header {background: ").concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(o.colour), ";}\n      .id7-masthead .id7-logo-row nav {opacity: 1; filter: alpha(opacity=100);}\n      .id7-masthead .id7-logo-row nav a {color: ").concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(o.colour), " !important;}");
  },

  /**
   * @return {string}
   */
  NavCSSTemplate: function NavCSSTemplate(o) {
    return lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.map(o.panels, function (panel) {
      return ".carousel-nav a[href=\"#".concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(panel.id), "\"]:hover, .carousel-nav li.active a[href=\"#").concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(panel.id), "\"] {color: ").concat(lodash_es__WEBPACK_IMPORTED_MODULE_2___default.a.escape(panel.lighter_colour), ";}");
    }).join('');
  },
  Defaults: {
    menu: '.carousel-nav',
    logo: '.id7-logo a',
    panels: '.jumbotron-carousel > article',
    menuSelector: 'a',
    animation: {
      length: 300,
      easing: 'swing'
    },
    defaultImageFocalPoint: 'center center',
    defaultImageScaling: 'cover',
    showFullpageImageCarouselTest: function showFullpageImageCarouselTest() {
      // As per ID-94, if a browser can't do Flexbox (and therefore can't do panel layouts),
      // serve the mobile hp
      return modernizr__WEBPACK_IMPORTED_MODULE_1___default.a.mq('only all and (min-width: 768px)') && modernizr__WEBPACK_IMPORTED_MODULE_1___default.a.flexbox;
    }
  }
};
/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   red: number       The red color value
 * @param   green: number       The green color value
 * @param   blue: number       The blue color value
 * @return  {saturation: number, lightness: number, hue: number}   The HSL representation
 */

function rgbToHsl(red, green, blue) {
  var r = red / 255;
  var g = green / 255;
  var b = blue / 255;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h;
  var s;
  var l = (max + min) / 2;

  if (max === min) {
    h = 0;
    s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;

      default:
        throw new Error();
    }

    h /= 6;
  }

  return {
    hue: h,
    saturation: s,
    lightness: l
  };
}

function hue2rgb(p, q, rawT) {
  var t = rawT;
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   h: number       The hue
 * @param   s: number       The saturation
 * @param   l: number       The lightness
 * @return  {red: number, green: number, blue: number}           The RGB representation
 */


function hslToRgb(h, s, l) {
  var r;
  var g;
  var b;

  if (s === 0) {
    r = l;
    g = l;
    b = l; // achromatic
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    red: r * 255,
    green: g * 255,
    blue: b * 255
  };
}
/**
 * Display a megamenu popover
 */


var HomepageCarousel =
/*#__PURE__*/
function () {
  function HomepageCarousel(options) {
    _classCallCheck(this, HomepageCarousel);

    var o = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Config.Defaults, options);
    this.$container = o.container;
    this.options = o; // Apply the colour from the first panel - on mobile, this is the only one ever applied

    HomepageCarousel.applyPanelStyles(this.$container.find("".concat(this.options.panels, "[data-colour]")).first().data('colour'));
    this.onScreenResize();
    this.wireEventHandlers();
  }

  _createClass(HomepageCarousel, [{
    key: "wireEventHandlers",
    value: function wireEventHandlers() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize.id7.homepage', jquery__WEBPACK_IMPORTED_MODULE_0___default.a.proxy(this.onScreenResize, this)); // ID-30 on load (i.e. after fonts have loaded) run this, forcing a resize

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', jquery__WEBPACK_IMPORTED_MODULE_0___default.a.proxy(function onLoad(e) {
        this.onScreenResize(e, true);
      }, this));
      var $container = this.$container; // When popovers are open, disable the panel snap

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).on('shown.bs.popover', function () {
        if ($container.data('panelSnap')) {
          $container.data('panelSnap').disable();
        }
      }).on('hidden.bs.popover', function () {
        if ($container.data('panelSnap')) {
          $container.data('panelSnap').enable();
        }
      });
    }
  }, {
    key: "onScreenResize",
    value: function onScreenResize() {
      var isOnLoad = typeof this.lastIsDesktop === 'undefined'; // Which stop-point are we on?

      var isDesktop = this.options.showFullpageImageCarouselTest(); // Don't re-init if we're not transitioning

      if (isDesktop !== this.lastIsDesktop) {
        this.initPanelSnap(isOnLoad, isDesktop);
        this.initMenu(isOnLoad, isDesktop);
        this.initBackgroundImages(isOnLoad, isDesktop);
        this.initIframes(isOnLoad, isDesktop);
        this.initBackgroundColours(isOnLoad, isDesktop);
        HomepageCarousel.initHashChangeListener(isOnLoad, isDesktop);
        this.initCaptionIcons(isOnLoad, isDesktop);
        this.initScrollWatcher(isOnLoad, isDesktop);
        this.lastIsDesktop = isDesktop;
      } // Warning: be careful about what events you're looking for here


      this.resizeIframes(isOnLoad, isDesktop);
    }
  }, {
    key: "initPanelSnap",
    value: function initPanelSnap(isOnLoad, isDesktop) {
      var $container = this.$container,
          options = this.options;

      if ($container.data('panelSnap')) {
        if (isDesktop) {
          $container.data('panelSnap').enable();
        } else {
          $container.data('panelSnap').disable();
        }
      } else if (isDesktop) {
        // First time init
        var panelSnap = new panelsnap__WEBPACK_IMPORTED_MODULE_3___default.a({
          container: $container.get()[0],
          panelSelector: options.panels,
          duration: options.animation.length,
          easing: options.animation.easing
        });
        panelSnap.on('activatePanel', HomepageCarousel.onChangePanel);
        panelSnap.on('snapStart', HomepageCarousel.onChangePanel);
        panelSnap.on('snapStop', HomepageCarousel.onChangePanelComplete);
        $container.data('panelSnap', panelSnap);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(options.menu).on('click', options.menuSelector, function snapToPanel(e) {
          var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href'));

          if ($target.length) {
            e.stopPropagation();
            e.preventDefault();
            panelSnap.snapToPanel($target.get()[0]);
          }
        });
      } // Scroll to right panel on page load


      if (isDesktop && isOnLoad && window.location.hash.length > 0 && $container.find(options.panels + window.location.hash).length) {
        setTimeout(function () {
          return jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').scrollTop(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window.location.hash).offset().top);
        }, 100);
      }
    }
  }, {
    key: "initMenu",
    value: function initMenu(isOnLoad, isDesktop) {
      var $container = this.$container,
          options = this.options;
      var $menu = $container.find(options.menu);
      var $logo = jquery__WEBPACK_IMPORTED_MODULE_0___default()(options.logo);
      $menu.find('a[href^="#"]').off('click.id7.homepage');
      $logo.off('click.id7.homepage'); // Link the logo to the first item in the menu

      $logo.attr('href', $menu.find('a[href^="#"]').first().attr('href'));

      if (isDesktop) {
        $container.scrollspy({
          target: options.menu
        }); // Idempotent, safe to call multiple times

        var smoothScrollToTarget = function smoothScrollToTarget(e) {
          // prevent default anchor click behavior
          e.preventDefault(); // store hash

          var hash = this.hash;
          HomepageCarousel.onChangePanel(jquery__WEBPACK_IMPORTED_MODULE_0___default()(hash)); // animate

          jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
            scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()(hash).offset().top
          }, options.animation.length, function () {
            if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.megamenu-links.popover').is(':visible')) {
              Object(_change_location_hash__WEBPACK_IMPORTED_MODULE_4__["default"])(hash);
            }
          });
        };

        $menu.find('a[href^="#"]').on('click.id7.homepage', smoothScrollToTarget);
        $logo.on('click.id7.homepage', smoothScrollToTarget);
        var $navStyles = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#homepage-style-rules-nav');

        if ($navStyles.is(':empty')) {
          var panelColours = [];
          $container.find("".concat(options.panels, "[id][data-colour]")).each(function collatePanelColours() {
            function componentToHex(c) {
              var hex = Math.round(c).toString(16);
              return hex.length === 1 ? "0".concat(hex) : hex;
            }

            function rgbToHex(r, g, b) {
              return "#".concat(componentToHex(r)).concat(componentToHex(g)).concat(componentToHex(b));
            }

            var $panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
            var id = $panel.attr('id');
            var colour = $panel.data('colour');
            var r = parseInt(colour.substring(1, 3), 16);
            var g = parseInt(colour.substring(3, 5), 16);
            var b = parseInt(colour.substring(5, 7), 16);
            var hsl = rgbToHsl(r, g, b);
            var lighterRGB = hslToRgb(hsl.hue, hsl.saturation, 0.9);
            panelColours.push({
              id: id,
              colour: colour,
              lighter_colour: rgbToHex(lighterRGB.red, lighterRGB.green, lighterRGB.blue),
              colour_r: parseInt(colour.substring(1, 3), 16),
              colour_g: parseInt(colour.substring(3, 5), 16),
              colour_b: parseInt(colour.substring(5, 7), 16)
            });
          });
          $navStyles.text(Config.NavCSSTemplate({
            panels: panelColours
          }));
        }
      }
    }
  }, {
    key: "initBackgroundColours",
    value: function initBackgroundColours(isOnLoad, isDesktop) {
      var $container = this.$container; // Init background colours

      $container.find('[data-colour]').each(function setBackgroundColour() {
        var $panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var colour = $panel.data('colour');
        var red = parseInt(colour.substring(1, 3), 16);
        var green = parseInt(colour.substring(3, 5), 16);
        var blue = parseInt(colour.substring(5, 7), 16);
        $panel.css('background-color', colour);
        var $content = $panel.find('.caption-content');
        $content.css('background-color', colour);

        if (isDesktop) {
          $content.css('background-color', "rgba(".concat(red, ", ").concat(green, ", ").concat(blue, ", 0.9)"));
        }
      });
    }
  }, {
    key: "initBackgroundImages",
    value: function initBackgroundImages(isOnLoad, isDesktop) {
      var $container = this.$container,
          options = this.options; // Background images

      if (isDesktop) {
        $container.find('[data-image]').each(function setPanelBackground() {
          var $panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
          $panel.css('background-image', "url(".concat($panel.data('image'), ")"));
          var position = $panel.data('image-focal-point') || options.defaultImageFocalPoint;
          $panel.css('background-position', position);
          var scaling = $panel.data('image-scaling') || options.defaultImageScaling;
          $panel.css('background-size', scaling);
        });
      } else {
        $container.find('[data-image]').css({
          'background-image': '',
          'background-position': '',
          'background-size': ''
        });
      }
    }
  }, {
    key: "initIframes",
    value: function initIframes(isOnLoad, isDesktop) {
      var $container = this.$container; // Embedded content (mostly video)

      if (isDesktop) {
        $container.find('[data-iframe]').each(function embedVideo() {
          var $panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
          if ($panel.find('> .iframe-container').length) return;
          $panel.prepend(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('iframe-container').append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<iframe />').attr({
            src: $panel.data('iframe'),
            frameborder: 0
          }).prop('allowfullscreen', true)));
        });
      } else {
        $container.find('[data-iframe]').find('> .iframe-container').remove();
      }
    }
  }, {
    key: "resizeIframes",
    value: function resizeIframes(isOnLoad, isDesktop) {
      var $container = this.$container;

      if (isDesktop) {
        $container.find('[data-iframe]').each(function resizeIframe() {
          var $panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
          var panelWidth = $panel.width();
          var panelHeight = $panel.height();
          var aspectRatio = panelWidth / panelHeight;
          var targetAspectRatio = 1920 / 1080;
          var width;
          var height;

          if (aspectRatio > targetAspectRatio) {
            width = panelWidth;
            height = Math.ceil(panelWidth / targetAspectRatio);
          } else {
            height = panelHeight;
            width = Math.ceil(panelHeight * targetAspectRatio);
          }

          $panel.find('> .iframe-container > iframe').attr({
            width: width,
            height: height
          });
        });
      }
    }
  }, {
    key: "initCaptionIcons",
    value: function initCaptionIcons(isOnLoad, isDesktop) {
      var $container = this.$container;

      if (!isDesktop) {
        $container.find('[data-icon]').each(function initCaptionIcon() {
          var $caption = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
          var $target = $caption;
          var $icon = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<img />').addClass('caption-icon').attr({
            alt: $caption.find('h2').first().text(),
            src: $caption.data('icon')
          });

          if ($caption.find('a').length > 0) {
            // Shallow clone
            var $iconLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()($caption.find('a')[0].cloneNode(false)).addClass('caption-icon-link');
            $target.prepend($iconLink.append($icon));
          } else {
            $target.prepend($icon);
          }
        });
      } else {
        $container.find('[data-icon] .caption-icon-link').remove();
        $container.find('[data-icon] .caption-icon').remove();
      }
    }
  }, {
    key: "initScrollWatcher",
    value: function initScrollWatcher(isOnLoad, isDesktop) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('scrollstop.id7.homepage');

      if (!isDesktop) {
        var $container = this.$container,
            options = this.options;
        var fixedHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.id7-page-header').outerHeight();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scrollstop.id7.homepage', function () {
          var scrollY = fixedHeight + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
          var beforeScroll = $container.find("".concat(options.panels, "[data-colour]:visible")).filter(function isAboveScroll() {
            var $panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
            var offsetY = $panel.offset().top;
            return offsetY <= scrollY;
          });

          if (beforeScroll.length === $container.find("".concat(options.panels, "[data-colour]:visible")).length) {
            // We've scrolled past all of them, use Warwick Aubergine
            HomepageCarousel.applyPanelStyles('#5b3069');
          } else {
            var $panel = beforeScroll.length > 0 ? beforeScroll.last() : $container.find("".concat(options.panels, "[data-colour]:visible")).first();
            HomepageCarousel.onChangePanel($panel);
          }
        });
      }
    }
  }], [{
    key: "initHashChangeListener",
    value: function initHashChangeListener(isOnLoad, isDesktop) {
      // Handle in-page bookmarks.
      if (isOnLoad && !isDesktop && window.location.hash) HomepageCarousel.hashChanged();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange.id7.homepage');

      if (!modernizr__WEBPACK_IMPORTED_MODULE_1___default.a.mq('only all and (min-width: 768px)')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange.id7.homepage', HomepageCarousel.hashChanged);
      }
    }
  }, {
    key: "hashChanged",
    value: function hashChanged() {
      var scrollY = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.id7-page-header').outerHeight();
      setTimeout(function () {
        return window.scrollBy(0, -scrollY);
      }, 1);
    }
  }, {
    key: "onChangePanel",
    value: function onChangePanel(panel) {
      HomepageCarousel.applyPanelStyles(jquery__WEBPACK_IMPORTED_MODULE_0___default()(panel).data('colour'));
    }
  }, {
    key: "applyPanelStyles",
    value: function applyPanelStyles(colour) {
      if (!colour) return;
      var r = parseInt(colour.substring(1, 3), 16);
      var g = parseInt(colour.substring(3, 5), 16);
      var b = parseInt(colour.substring(5, 7), 16);

      try {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#homepage-style-rules-panels').text(Config.PanelsCSSTemplate({
          colour: colour,
          // brighter_colour: rgbToHex(r_brighter, g_brighter, b_brighter),
          colour_r: r,
          colour_g: g,
          colour_b: b
        }));
      } catch (e) {// This fails on IE8. Just accept the default colours
      }
    }
  }, {
    key: "onChangePanelComplete",
    value: function onChangePanelComplete(panel) {
      // when done, add hash to url
      // (default click behaviour)
      // Only if the more links popover is not open
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.megamenu-links.popover').is(':visible')) {
        Object(_change_location_hash__WEBPACK_IMPORTED_MODULE_4__["default"])("#".concat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(panel).attr('id')));
      }
    }
  }]);

  return HomepageCarousel;
}();

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.homepageCarousel = function initPlugin() {
  var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  function attach(i, element) {
    var $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var homepageCarousel = new HomepageCarousel(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, $container.data(), o, {
      container: $container
    }));
    $container.data('id7.homepage-carousel', homepageCarousel);
  }

  return this.each(attach);
};

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  return jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').homepageCarousel();
});

/***/ }),

/***/ "./js/external-homepage/hp.js":
/*!************************************!*\
  !*** ./js/external-homepage/hp.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_fn_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/fn/array/from */ "./node_modules/core-js/fn/array/from.js");
/* harmony import */ var core_js_fn_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _homepage_carousel_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage-carousel.jquery */ "./js/external-homepage/homepage-carousel.jquery.js");
/* harmony import */ var _more_links_popover_jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./more-links-popover.jquery */ "./js/external-homepage/more-links-popover.jquery.js");
/* eslint-env browser */




/***/ }),

/***/ "./js/external-homepage/more-links-popover.jquery.js":
/*!***********************************************************!*\
  !*** ./js/external-homepage/more-links-popover.jquery.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modernizr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modernizr */ "modernizr");
/* harmony import */ var modernizr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(modernizr__WEBPACK_IMPORTED_MODULE_1__);
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
        content: jquery__WEBPACK_IMPORTED_MODULE_0___default()(options.target).find('> .container').html(),
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
          } else {
            // Set us back to the first panel
            Object(_change_location_hash__WEBPACK_IMPORTED_MODULE_2__["default"])("#".concat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.jumbotron-carousel > article[id]:visible').first().attr('id')));
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
  if (modernizr__WEBPACK_IMPORTED_MODULE_1___default.a.flexbox) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-toggle="id7:megamenu-popover"]').moreLinksPopover();
  }
});

/***/ }),

/***/ "./node_modules/core-js/fn/array/from.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/fn/array/from.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");

__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.from;

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag'); // ES3 wrong here


var ARG = cof(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {
    /* empty */
  }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
  : ARG ? cof(O) // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.6.5'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

    if (target) redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global.core = core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;

module.exports = document && document.documentElement;

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js"); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);

  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  } // Plug for library


  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }

  return methods;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();

  riter['return'] = function () {
    SAFE_CLOSING = true;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {
  /* empty */
}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;

  try {
    var arr = [7];
    var iter = arr[ITERATOR]();

    iter.next = function () {
      return {
        done: safe = true
      };
    };

    arr[ITERATOR] = function () {
      return iter;
    };

    exec(arr);
  } catch (e) {
    /* empty */
  }

  return safe;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

var Empty = function Empty() {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;

  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }

  return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var dP = Object.defineProperty;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }

  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');

var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");

var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js"); // true  -> String#at
// false -> String#codePointAt


module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

var _Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;

var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");

var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  Array.from(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);

      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }

    result.length = index;
    return result;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true); // 21.1.3.27 String.prototype[@@iterator]()


__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target

  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),

/***/ "./node_modules/panelsnap/lib/panelsnap.umd.js":
/*!*****************************************************!*\
  !*** ./node_modules/panelsnap/lib/panelsnap.umd.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * PanelSnap.js v1.2.1
 * Copyright (c) 2013-present, Guido Bouman
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function (t, n) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function t(t, n) {
    for (var e = 0; e < n.length; e++) {
      var i = n[e];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function n(t, n, e) {
    return n in t ? Object.defineProperty(t, n, {
      value: e,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = e, t;
  }

  function e(t) {
    return function (t) {
      if (Array.isArray(t)) {
        for (var n = 0, e = new Array(t.length); n < t.length; n++) {
          e[n] = t[n];
        }

        return e;
      }
    }(t) || function (t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
    }(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }

  var i = function () {
    function t(t, n) {
      for (var e = 0; e < n.length; e++) {
        var i = n[e];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    return function (n, e, i) {
      return e && t(n.prototype, e), i && t(n, i), n;
    };
  }();

  var o = function () {
    function t() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      !function (t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this.duration = n.duration || 1e3, this.ease = n.easing || this._defaultEase, this.start = n.start, this.end = n.end, this.frame = null, this.next = null, this.isRunning = !1, this.events = {}, this.direction = this.start < this.end ? "up" : "down";
    }

    return i(t, [{
      key: "begin",
      value: function value() {
        return this.isRunning || this.next === this.end || (this.frame = window.requestAnimationFrame(this._tick.bind(this))), this;
      }
    }, {
      key: "stop",
      value: function value() {
        return window.cancelAnimationFrame(this.frame), this.isRunning = !1, this.frame = null, this.timeStart = null, this.next = null, this;
      }
    }, {
      key: "on",
      value: function value(t, n) {
        return this.events[t] = this.events[t] || [], this.events[t].push(n), this;
      }
    }, {
      key: "emit",
      value: function value(t, n) {
        var e = this,
            i = this.events[t];
        i && i.forEach(function (t) {
          return t.call(e, n);
        });
      }
    }, {
      key: "_tick",
      value: function value(t) {
        this.isRunning = !0;
        var n = this.next || this.start;
        this.timeStart || (this.timeStart = t), this.timeElapsed = t - this.timeStart, this.next = Math.round(this.ease(this.timeElapsed, this.start, this.end - this.start, this.duration)), this._shouldTick(n) ? (this.emit("tick", this.next), this.frame = window.requestAnimationFrame(this._tick.bind(this))) : (this.emit("tick", this.end), this.emit("done", null));
      }
    }, {
      key: "_shouldTick",
      value: function value(t) {
        return {
          up: this.next < this.end && t <= this.next,
          down: this.next > this.end && t >= this.next
        }[this.direction];
      }
    }, {
      key: "_defaultEase",
      value: function value(t, n, e, i) {
        return (t /= i / 2) < 1 ? e / 2 * t * t + n : -e / 2 * (--t * (t - 2) - 1) + n;
      }
    }]), t;
  }();

  function s(t) {
    return t !== document.body ? t : "scrollingElement" in document ? document.scrollingElement : navigator.userAgent.indexOf("WebKit") > -1 ? document.body : document.documentElement;
  }

  function r(t) {
    return t === document.body ? {
      top: 0,
      left: 0,
      bottom: window.innerHeight,
      right: window.innerWidth,
      height: window.innerHeight,
      width: window.innerWidth
    } : t.getBoundingClientRect();
  }

  var a = function () {
    var t = !1;

    try {
      var n = Object.defineProperty({}, "passive", {
        get: function get() {
          t = !0;
        }
      });
      window.addEventListener("test", null, n), window.removeEventListener("test", null, n);
    } catch (t) {}

    return t;
  }(),
      l = 0,
      h = {
    container: document.body,
    panelSelector: "> section",
    directionThreshold: 50,
    delay: 0,
    duration: 300,
    easing: function easing(t) {
      return t;
    }
  };

  return function () {
    function i(t) {
      if (function (t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
      }(this, i), this.options = function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {},
              o = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(i).filter(function (t) {
            return Object.getOwnPropertyDescriptor(i, t).enumerable;
          }))), o.forEach(function (e) {
            n(t, e, i[e]);
          });
        }

        return t;
      }({}, h, t), this.options.container.dataset.panelsnapId) throw new Error("PanelSnap is already initialised on this container, aborting.");
      var e;
      this.container = this.options.container, this.scrollContainer = s(this.container), this.scrollEventContainer = (e = this.container) === document.body ? window : s(e), l += 1, this.instanceIndex = l, this.container.dataset.panelsnapId = this.instanceIndex;
      var o = '[data-panelsnap-id="'.concat(this.instanceIndex, '"] ').concat(this.options.panelSelector);
      this.panelList = Array.from(document.querySelectorAll(o)), this.events = [], this.isEnabled = !0, this.isInteracting = !1, this.scrollTimeout = null, this.resetAnimation(), this.scrollEventContainer.addEventListener("keydown", this.onInteractStart.bind(this), a && {
        passive: !0
      }), this.scrollEventContainer.addEventListener("keyup", this.onInteractStop.bind(this), a && {
        passive: !0
      }), this.scrollEventContainer.addEventListener("mousedown", this.onInteractStart.bind(this), a && {
        passive: !0
      }), this.scrollEventContainer.addEventListener("mouseup", this.onInteractStop.bind(this), a && {
        passive: !0
      }), this.scrollEventContainer.addEventListener("touchstart", this.onInteractStart.bind(this), a && {
        passive: !0
      }), this.scrollEventContainer.addEventListener("touchend", this.onInteractStop.bind(this), a && {
        passive: !0
      }), this.scrollEventContainer.addEventListener("scroll", this.onScroll.bind(this), a && {
        passive: !0
      }), this.scrollEventContainer.addEventListener("wheel", this.onInteract.bind(this), a && {
        passive: !0
      }), this.findSnapTarget();
    }

    var c, u, f;
    return c = i, (u = [{
      key: "enable",
      value: function value() {
        this.isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function value() {
        this.isEnabled = !1;
      }
    }, {
      key: "on",
      value: function value(t, n) {
        var i = this.events[t] || [];
        this.events[t] = e(i).concat([n]), "activatePanel" === t && n.call(this, this.activePanel);
      }
    }, {
      key: "off",
      value: function value(t, n) {
        var e = this.events[t] || [];
        this.events[t] = e.filter(function (t) {
          return t !== n;
        });
      }
    }, {
      key: "emit",
      value: function value(t, n) {
        var e = this;
        (this.events[t] || []).forEach(function (t) {
          return t.call(e, n);
        });
      }
    }, {
      key: "onInteractStart",
      value: function value() {
        this.stopAnimation(), this.isInteracting = !0;
      }
    }, {
      key: "onInteractStop",
      value: function value() {
        this.isInteracting = !1, this.findSnapTarget();
      }
    }, {
      key: "onInteract",
      value: function value() {
        this.stopAnimation(), this.onScroll();
      }
    }, {
      key: "onScroll",
      value: function value() {
        clearTimeout(this.scrollTimeout), this.isInteracting || this.animation || (this.scrollTimeout = setTimeout(this.findSnapTarget.bind(this), 50 + this.options.delay));
      }
    }, {
      key: "findSnapTarget",
      value: function value() {
        var t = this.scrollContainer.scrollTop - this.currentScrollOffset.top,
            n = this.scrollContainer.scrollLeft - this.currentScrollOffset.left;
        this.currentScrollOffset = {
          top: this.scrollContainer.scrollTop,
          left: this.scrollContainer.scrollLeft
        };
        var e,
            i,
            o,
            s = (e = this.container, i = this.panelList, o = r(e), i.filter(function (t) {
          var n = t.getBoundingClientRect();
          return n.top < o.bottom && n.right > o.left && n.bottom > o.top && n.left < o.right;
        }));
        if (0 === s.length) throw new Error("PanelSnap could not find a snappable panel, aborting.");

        if (s.length > 1) {
          if (Math.abs(t) < this.options.directionThreshold && Math.abs(n) < this.options.directionThreshold && this.activePanel) return void this.snapToPanel(this.activePanel, t > 0, n > 0);
          var a = t > 0 || n > 0 ? 1 : s.length - 2;
          this.snapToPanel(s[a], t < 0, n < 0);
        } else {
          var l = s[0];
          !function (t, n) {
            var e = r(t),
                i = n.getBoundingClientRect();
            return i.top <= e.top && i.bottom >= e.bottom && i.left <= e.left && i.right >= e.right;
          }(this.container, l) ? (console.error("PanelSnap does not support space between panels, snapping back."), this.snapToPanel(l, t > 0, n > 0)) : this.activatePanel(l);
        }
      }
    }, {
      key: "snapToPanel",
      value: function value(t) {
        var n = this,
            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.activatePanel(t), this.isEnabled && (this.animation && this.animation.stop(), this.targetScrollOffset = function (t, n) {
          var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              o = r(t),
              a = n.getBoundingClientRect(),
              l = a.top - o.top,
              h = a.left - o.left,
              c = e ? a.height - o.height : 0,
              u = i ? a.width - o.width : 0,
              f = s(t);
          return {
            top: l + c + f.scrollTop,
            left: h + u + f.scrollLeft
          };
        }(this.container, t, e, i), this.animation = new o({
          start: 0,
          end: 1e4,
          duration: this.options.duration
        }), this.animation.on("tick", this.animationTick.bind(this)), this.animation.on("done", function () {
          n.emit("snapStop", t), n.resetAnimation();
        }), this.emit("snapStart", t), this.animation.begin());
      }
    }, {
      key: "animationTick",
      value: function value(t) {
        var n = this.targetScrollOffset.top - this.currentScrollOffset.top,
            e = this.currentScrollOffset.top + n * t / 1e4;
        this.scrollContainer.scrollTop = e;
        var i = this.targetScrollOffset.left - this.currentScrollOffset.left,
            o = this.currentScrollOffset.left + i * t / 1e4;
        this.scrollContainer.scrollLeft = o;
      }
    }, {
      key: "stopAnimation",
      value: function value() {
        this.animation && (this.animation.stop(), this.resetAnimation());
      }
    }, {
      key: "resetAnimation",
      value: function value() {
        this.currentScrollOffset = {
          top: this.scrollContainer.scrollTop,
          left: this.scrollContainer.scrollLeft
        }, this.targetScrollOffset = {
          top: 0,
          left: 0
        }, this.animation = null;
      }
    }, {
      key: "activatePanel",
      value: function value(t) {
        this.activePanel !== t && (this.emit("activatePanel", t), this.activePanel = t);
      }
    }]) && t(c.prototype, u), f && t(c, f), i;
  }();
});

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "lodash-es":
/*!********************!*\
  !*** external "_" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = _;

/***/ }),

/***/ "modernizr":
/*!****************************!*\
  !*** external "Modernizr" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Modernizr;

/***/ })

/******/ });
//# sourceMappingURL=hp.js.map