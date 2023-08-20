'use strict'

function sliders() {
    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        speed: 1500,
        // autoHeight: true,
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