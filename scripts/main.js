/**
 * Name  : main.js
 * Date  : April 20, 2021
 * @author Nathan Wisla
 */

'use strict';

let m = {};

m.images = ['/images/gallery']

$(document).ready(() => {

    let topicDivs = $('.subject'),
        buttons = $('.click'),
        activeButtons = $('.active');

    topicDivs.hide();
    $('#home').show();

    activeButtons.click(e => {
        console.log('assdfadfasfsaf');
        return false;
    });


    buttons.click(e => m.fadeNavigation(e, buttons, topicDivs, 300));


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

