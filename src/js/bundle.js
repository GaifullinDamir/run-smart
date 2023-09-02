/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ (function(module) {



function modals() {
    const modalsBtns = document.querySelectorAll('.button'),
        btnsMini = document.querySelectorAll('.button_mini'),
        modals = document.querySelectorAll('.modal'),
        modalConsultation = modals[0],
        modalOrder = modals[1],
        modalThanks = modals[2],
        modalsClose = document.querySelectorAll('.modal__close'),
        overlay = document.querySelector('.overlay');

    modalsBtns.forEach(modalBtn => modalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('overlay_active');
        if (modalBtn.dataset['modal'] === 'consultation') {
            modalConsultation.classList.add('modal_active');
        } else if (modalBtn.classList.contains('button_mini')) {
            modalOrder.classList.add('modal_active');
        }
    }));

    modalsClose.forEach(closeItem => closeItem.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.remove('overlay_active');
        modals.forEach(modal => modal.classList.remove('modal_active'));
    }));

    btnsMini.forEach(btn => btn.addEventListener('click', function(e) {
        e.preventDefault();
        const parentItem = e.currentTarget.parentElement.parentElement;
        const subtitle = parentItem.querySelector('.catalog-item__subtitle');
        console.dir(subtitle.textContent);
        modalOrder.childNodes[5].innerHTML = subtitle.textContent;
    }));
}
module.exports = modals;

/***/ }),

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

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ (function(module) {



function tabs() {
    const catalogTabs = document.querySelectorAll('.catalog__tab'),
        catalogTabsParent = document.querySelector('.catalog__tabs'),
        catalogTabsContent = document.querySelectorAll('.catalog__content');

    function hideTabContent() {
        catalogTabsContent.forEach(tabContent => {
            tabContent.classList.add('catalog__content_hide');
            tabContent.classList.remove('catalog__content_active');
            catalogTabs.forEach(catalogTab => {
                catalogTab.classList.remove('catalog__tab_active');
            })
        })
    };
    function showTabContent(i = 0) {
        catalogTabsContent[i].classList.add('catalog__content_active');
        catalogTabsContent[i].classList.remove('catalog__content_hide');
        catalogTabs[i].classList.add('catalog__tab_active');
    };

    hideTabContent();
    showTabContent();

    catalogTabsParent.addEventListener('click', (e) => {
        e.preventDefault();
        catalogTabs.forEach((tab, i) => {
            if (e.target && e.target.parentElement.classList.contains('catalog__tab')) {
                if (e.target.parentElement == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            }
        })
    })

    const catalogItems = document.querySelectorAll('.catalog-item');

    catalogItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            if(e.target == this.querySelector('.catalog-item__link') || e.target == this.querySelector('.catalog-item__back')) {
                this.querySelector('.catalog-item__content').classList.toggle('catalog-item__content_active');
                this.querySelector('.catalog-item__list').classList.toggle('catalog-item__list_active');
            }
            
        })
    })
}

module.exports = tabs;

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/


window.addEventListener('DOMContentLoaded', ()=> {
    const sliders = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js"),
        tabs = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js"),
        modals = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
    sliders();
    tabs();
    modals();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map