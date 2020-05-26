
$(document).ready(function () {

  });

/* Sample Questions Section */
$(document).ready(function() { //wait for shizzles to 
    let mySwiper1; let mySwiper2;
    let current = 1;  
    //initialize swiper when document ready
    mySwiper1 = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    mySwiper2 = new Swiper ('.swiper-containerdos', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        watchOverflow: true,
        slidesPerView: 1,
        preloadImages: false,
        initialSlide: 0,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
    });

    /* Click Listeners */
    $('.sample-questions #lvl1but').on('click', function() {
        if (current != 1) {
            $(this).addClass('selected');
            if (current == 2) {
                $('.sample-questions #lvl2but').removeClass('selected');
            } else if (current == 3) {
                $('.sample-questions #lvl3but').removeClass('selected');
            }
            $('.sample-questions #uiline').css({
                left: '40%',
                transform: 'translateX(-50%)'
            });
            mySwiper2.slideTo(0, 100);
            current = 1; 
        }
    });
    $('.sample-questions #lvl2but').on('click', function() {
        if (current != 2) {
            $(this).addClass('selected');
            if (current == 1) {
                $('.sample-questions #lvl1but').removeClass('selected');
            } else if (current == 3) {
                $('.sample-questions #lvl3but').removeClass('selected');
            }
            $('.sample-questions #uiline').css({
                left: '50%',
                transform: 'translateX(-50%)'
            });
            mySwiper2.slideTo(1, 100);
            current = 2; 
        }
    });
    $('.sample-questions #lvl3but').on('click', function() {
        if (current != 3) {
            $(this).addClass('selected');
            if (current == 1) {
                $('.sample-questions #lvl1but').removeClass('selected');
            } else if (current == 2) {
                $('.sample-questions #lvl2but').removeClass('selected');
            }
            $('.sample-questions #uiline').css({
                left: '60%',
                transform: 'translateX(-50%)'
            });
            mySwiper2.slideTo(2, 100);
            current = 3; 
        }
    });
    mySwiper2.on('slideChange', function () {
        if (mySwiper2.activeIndex == 0) {
            if (current == 2) {
                $('.sample-questions #lvl2but').removeClass('selected');
            } else if (current == 3) {
                $('.sample-questions #lvl3but').removeClass('selected');
            }
            $('.sample-questions #lvl1but').addClass('selected');
            $('.sample-questions #uiline').css({
                left: '40%',
                transform: 'translateX(-50%)'
            });
            current = 1;
        } else if (mySwiper2.activeIndex == 1) {
            if (current == 1) {
                $('.sample-questions #lvl1but').removeClass('selected');
            } else if (current == 3) {
                $('.sample-questions #lvl3but').removeClass('selected');
            }
            $('.sample-questions #lvl2but').addClass('selected');
            $('.sample-questions #uiline').css({
                left: '50%',
                transform: 'translateX(-50%)'
            });
            current = 2;
        } else if (mySwiper2.activeIndex == 2) {
            if (current == 1) {
                $('.sample-questions #lvl1but').removeClass('selected');
            } else if (current == 2) {
                $('.sample-questions #lvl2but').removeClass('selected');
            }
            $('.sample-questions #lvl3but').addClass('selected');
            $('.sample-questions #uiline').css({
                left: '60%',
                transform: 'translateX(-50%)'
            });
            current = 3;
        }
    });


});

/* Menu Buttons */
$(document).ready(function() {
    let toggled = 0; 

    function slidetop() {
        $('.menu .swiper-container .words').slideUp(30);
        toggled = 0;
    }
    $('.menu #page2 #banner').hide();
    $('.menu #page2 .contain').hide();

    $('#rapper .menu .swiper-container .words #uno').on('click', async function() {
        if (toggled == 1) {
            await slidetop();
        }
        $('html, body, #rapper').animate({
            scrollTop: $("#rapper #anchor0").offset().top
        }, 1000);
    });
    $('#rapper .menu .swiper-container .words #dos').on('click', async function() {
        if (toggled == 1) {
            await slidetop();
        }
        $('html, body, #rapper').animate({
            scrollTop: $("#rapper #anchor1").offset().top
        }, 1000);
    });
    $('#rapper .menu .swiper-container .words #tres').on('click', async function() {
        if (toggled == 1) {
            await slidetop();
        }
        $('html, body, #rapper').animate({
            scrollTop: $("#rapper #anchor2").offset().top
        }, 1000);
    });
    $('#rapper .menu .swiper-container .words #quatro').on('click', async function() {
        if (toggled == 1) {
            await slidetop();
        }
        $('html, body, #rapper').animate({
            scrollTop: $("#rapper #anchor3").offset().top
        }, 1000);
    });

    $('.menu .swiper-container #menuicon').on('click', function() {
        if (toggled == 0) {
            $('.menu .swiper-container .words').slideDown(100);
            toggled = 1;
        } 
        else {
            $('.menu .swiper-container .words').slideUp(100);
            toggled = 0; 
        }

    })

});


