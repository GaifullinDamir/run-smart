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
}

module.exports = tabs;