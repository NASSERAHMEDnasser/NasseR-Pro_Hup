/*global $ ,alert,console*/
$(function () {
    'use strict';
    //Trigger Nice scroll

    $("body").niceScroll({

        cursorcolor: "#F7600F"

    });

    //Calc Height
    $(".header").height($(window).height());

    //Trigger chevron
    $(".header .arrow i").click(function () {

        $('html , body').animate({

            scrollTop: $(".features").offset().top

        }, 1000);

    });
    //Trigger show more
    $(".show-more").click(function () {

        $(".hidden").fadeIn("slow");

    });

    //Trigger Right Left

    var leftArrow = $(".testim .fa-chevron-left"),

        rightAroow = $(".testim .fa-chevron-right");

    function checkclients() {
        $(".clients:first").hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn(1000);
        $(".clients:last").hasClass('active') ? rightAroow.fadeOut() : rightAroow.fadeIn(1000);

    }
    checkclients();
    $(".testim i").click(function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testim .active').fadeOut(400, function () {
                $(this).removeClass('active').next().addClass('active').fadeIn();
                checkclients();
            });
        } else {
            $('.testim .active').fadeOut(400, function () {
                $(this).removeClass('active').prev().addClass('active').fadeIn();
                checkclients();
            });
        }
    });








});
