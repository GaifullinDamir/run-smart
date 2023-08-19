'use strict'

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

    const catalogBackLinks = document.querySelectorAll('.catalog-item__back'),
        catalogLinks = document.querySelectorAll('.catalog-item__link');

    catalogLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.offsetParent.classList.remove('catalog-item__content_active');
            e.target.parentElement.parentElement.children[1].classList.add('catalog-item__list_active');
        })
    })
    catalogBackLinks.forEach(backLink => {
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.classList.remove('catalog-item__list_active');
            e.target.parentElement.parentElement.children[0].classList.add('catalog-item__content_active');
            
        })
    })
}

module.exports = tabs;