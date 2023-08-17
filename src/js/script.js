'use strict'

document.addEventListener('DOMContentLoaded', ()=> {
    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        speed: 1500,
        // autoHeight: true,
        slideBy: 'page',
        // autoplay: true,
        // autoplayTimeout: 5000,
        // autoplayButtonOutput: false,
        arrowKeys: true,
        nav: false,
        controls: false,
        responsive: {
            '991': {
                nav: false
            },
            '768': {
                nav: false
            },
            '576': {
                nav: true
            },
            
          }
      
      });    
    
    document.querySelector('.arrow-prev').addEventListener('click', (e) => {
        e.preventDefault();
        slider.goTo('prev');
    })
    document.querySelector('.arrow-next').addEventListener('click', (e) => {
        e.preventDefault();
        slider.goTo('next')
    })
});

