/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ (function(module) {

function sliders() {
    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        speed: 1500,
        autoHeight: true,
        slideBy: 'page',
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayButtonOutput: false,
        preventScrollOnTouch: 'auto',
        arrowKeys: true,
        navPosition: 'bottom',
        controlsContainer: '.carousel__controls',
        nav: true,
        navAsThumbnails: true,
        responsive: {
            576: {
                nav: true
            },
            768: {
                nav: false
            }
          }
      });    
}

module.exports = sliders;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/


window.addEventListener('DOMContentLoaded', ()=> {
    const sliders = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
    sliders();
});


}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map