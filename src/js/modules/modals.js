'use strict'

function modals() {
    const modalsBtns = document.querySelectorAll('[data-modal=consultation]'),
        modals = document.querySelectorAll('.modal'),
        modalConsultation = modals[0],
        modalOrder = modals[1],
        modalThanks = modals[2],
        modalsClose = document.querySelectorAll('.modal__close'),
        overlay = document.querySelector('.overlay');
    console.log(modalOrder);
    modalsBtns.forEach(modalBtn => modalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('overlay_active');
        if (modalBtn.dataset['modal'] === 'consultation') {
            modalConsultation.classList.add('modal_active');
        }
    }));
    modalsClose.forEach(closeItem => closeItem.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.remove('overlay_active');
        modals.forEach(modal => modal.classList.remove('modal_active'));
    }));
}
module.exports = modals;