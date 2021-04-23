/**
 * Name  : main.js
 * Date  : April 20, 2021
 * @author Nathan Wisla
 */

'use strict';

let m = {};

$(document).ready(() => {

    let topicDivs = $('.tab'),
        buttons = $('.click'),
        accordion = $('.accordion'),
        activeButtons = $('.active');

    topicDivs.hide();
    $('#home').show();

    activeButtons.click(e => {
        return false;
    });


    buttons.click(e => m.fadeNavigation(e, buttons, topicDivs, 300));
    accordion.click(e => m.accordionArrowToggle(e));


});

/**
 * Fades a linked element away depending on if a button was pressed. the button's attribute MUST be of datatype data-refid
 * @param event {event}
 * @param buttons {Object} jQuery object of all buttons
 * @param linkedElements {Object} jQuery object of all elements linked to the buttons via data-refid=<button id>
 * @param fadeRate {int} The time in milliseconds that the fade should happen
 */
m.fadeNavigation = function (event, buttons, linkedElements, fadeRate) {
    let target = $(event.target);

    if (target.parent().hasClass('disabled')) {
        return false;
    } else {
        buttons.removeClass('active disabled');
        linkedElements.fadeOut(fadeRate);

        window.setTimeout(() => {

                target.parent().addClass('active disabled');
                for (let topic of linkedElements) {
                    if (event.target.hash === `#${topic.id}`) {
                        topic = $(topic);
                        topic.fadeIn(fadeRate);
                    }

                }
            }, fadeRate
        );
        return true;
    }
}

/**
 * Toggles an accordion arrow that is animated by CSS selectors
 * @param event {event}
 */
m.accordionArrowToggle = function (event) {
    let target = $(event.target);
    if (target.hasClass('collapsed')) {
        target.addClass('active');
    } else {
        target.removeClass('active');
    }
}

