'use strict'

window.addEventListener('DOMContentLoaded', ()=> {
    const sliders = require('./modules/sliders'),
        tabs = require('./modules/tabs'),
        modals = require('./modules/modals');
    sliders();
    tabs();
    modals();
});