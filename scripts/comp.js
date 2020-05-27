$(document).ready(function() {
    $('.rapper .head .menu #schedule').on('click', function() {
        $('html, body, #rapper').animate({
            scrollTop: $(".rapper .dates").offset().top
        }, 1000);
    });
    $('.rapper .head .menu #about').on('click', function() {
        $('html, body, #rapper').animate({
            scrollTop: $(".rapper .about").offset().top
        }, 1000);
    });
})