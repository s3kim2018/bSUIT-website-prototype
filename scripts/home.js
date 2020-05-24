
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  });

/* Sample Questions Section */
$(document).ready(function() { //wait for shizzles to load
    let current = 1;  
    /* Hover Properties */

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
                left: '598px',
            });
            $('.sample-questions #thepimg').attr('src', 'prob/lvl1.png');
            current = 1; 
            $('.sample-questions #thepimg').css({
                height: '720px',
                width: '700px'
            });
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
                left: '702px',
            });
            $('.sample-questions #thepimg').attr('src', 'prob/lvl2.png');
            $('.sample-questions #thepimg').css({
                height: '450px',
                width: '700px'
            });

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
                left: '804px',
            });
            $('.sample-questions #thepimg').attr('src', 'prob/lvl3.png');
            $('.sample-questions #thepimg').css({
                height: '470px',
                width: '680px'
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
    $('#rapper .menu .swiper-container .words #quatro').on('click', function() {
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


