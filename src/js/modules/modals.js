'use strict'

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