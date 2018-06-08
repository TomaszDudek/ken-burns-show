const kenBurns = (function () {
    'use strict';

    const CONFIG = {
        interval: 3000,
        classes: {
            item: 'ken-burns__item',
            itemIsActive: 'ken-burns__item--is-active'
        }
    };

    let items,
        activeItem;

    /**
     * References dom objects.
     */
    const setupDomReferences = function () {
        items = document.getElementsByClassName(CONFIG.classes.item);
    };

    /**
     *
     * @returns {*}
     */
    const findActiveItem = function () {
        let count;
        for(count = 0; items.length >= count; count++) {
            console.log('loop', count); // TODO: Remove after develop!
            if(items[count].classList.contains(CONFIG.classes.itemIsActive)) {
                return items[count];
            }
        }
    };

    /**
     *
     */
    const activateNext = function () {
        let currentItem = findActiveItem();
        let nextItem = currentItem.nextElementSibling;

        currentItem.classList.remove(CONFIG.classes.itemIsActive);
        console.log(nextItem);
        nextItem.classList.add(CONFIG.classes.itemIsActive);
    };

    /**
     * Initialize java script.
     */
    const init = function () {
        setupDomReferences();
        setTimeout(activateNext, CONFIG.interval);
    };

    return {
        init: init()
    }

})();

kenBurns.init;
