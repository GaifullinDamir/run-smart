'use strict'

document.addEventListener('DOMContentLoaded', ()=> {
    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        nav: false,
        controls: false
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

