/*** Return last modified date ***/

// Shows the last modified date of the file in format yyyy-mm-dd
(function lastModified() {
    // assign date to variable ModifyDate
    var ModifyDate = new Date(document.lastModified);

    var year = ModifyDate.getFullYear()
    var month = function () {
        var formMonth = ModifyDate.getMonth();
        formMonth += 1; // months are numbered from 0 to 11
        if (formMonth < 10) {
            formMonth = '0' + formMonth;
        }
        return formMonth;
    }
    var day = function () {
        var formDate = ModifyDate.getDate();
        if (formDate < 10) {
            formDate = '0' + formDate;
        }
        return formDate;
    }

    // write date to variable showAs
    var showAs = year + '-' + month() + '-' + day();

    document.getElementById("date").innerHTML = showAs;
})();

/*** Mobile navigation hide/show toggle ***/

// Source: http://www.hongkiat.com/blog/responsive-web-nav/

$(function () {
    var pull = $('#pull');
    menu = $('nav ul');
    menuHeight = menu.height();

    $(pull).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });
});

// Fix to show menu after resize if hidden.
$(window).resize(function () {
    var w = $(window).width();
    if (w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});
