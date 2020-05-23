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
            $('.sample-questions #prob').attr('src', 'prob/lvl1.PNG');
            $('.sample-questions #prob').css({
                height: '720px'
            });
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
                left: '702px',
            });
            $('.sample-questions #prob').attr('src', 'prob/lvl2.PNG');
            $('.sample-questions #prob').css({
                height: '500px'
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
            $('.sample-questions #prob').attr('src', 'prob/lvl3.PNG');
            $('.sample-questions #prob').css({
                height: '500px',
                width: '650px',
                'padding-left': '50px'
            });
            current = 3; 
        }
    });

});

/* Menu Buttons */
$(document).ready(function() {
    $('.menu #page2 #banner').hide();
    $('.menu #page2 .contain').hide();


    $('.menu #uno').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#anchor0").offset().top
        }, 1000);
    });
    $('.menu #dos').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#anchor1").offset().top
        }, 1000);
    });
    $('.menu #tres').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#anchor2").offset().top
        }, 1000);
    });
    $('.menu #quatro').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#anchor3").offset().top
        }, 1000);
    });


    /* Swipe button listeners */
    let state = 0; 
    let clickDisabled = false; 

    /* Note, the click is disalbed for 430ns to stop the dom from crashing and causing undefined */
    $('.menu #rightb').on('click', async function() {
        if (clickDisabled == true) {
            return; 
        }
        if (state == 0){
            $('.menu #page2').css({
                visibility: 'visible'
            });
            $('.menu #page1').hide('slide', {direction: 'left', distance: 1100, queue: false}); 
            $('.menu #page2 .contain').show('slide', {direction: 'right', distance: 1400, queue: false});
            $('.menu #page2 #banner').show('slide', {direction: 'right', distance: 1400, queue: false});
            state = 1; 
        } else if (state == 1) {
            $('.menu #page2 .contain').hide('slide', {direction: 'left', distance: 1100, queue: false});
            $('.menu #page2 #banner').hide('slide', {direction: 'left', queue: false});
            $('.menu #page1').show('slide', {direction: 'right', queue: false});
            state = 0; 
        }
        clickDisabled = true;
        setTimeout(function(){clickDisabled = false;}, 430);
    })

    $('.menu #leftb').on('click', function() {
        if (clickDisabled == true) {
            return; 
        }
        if (state == 1) {
            $('.menu #page2 .contain').hide('slide', {direction: 'right', distance: 1100, queue: false});
            $('.menu #page2 #banner').hide('slide', {direction: 'right', queue: false});
            $('.menu #page1').show('slide', {direction: 'left', queue: false}); 
            state = 0; 
        } else if (state == 0) {
            $('.menu #page1').hide('slide', {direction: 'right', queue: false}); 
            $('.menu #page2 .contain').show('slide', {direction: 'left', distance: 1100, queue: false});
            $('.menu #page2 #banner').show('slide', {direction: 'left', queue: false});
            state = 1; 
        }
        clickDisabled = true;
        setTimeout(function(){clickDisabled = false;}, 430);     
    });
});


