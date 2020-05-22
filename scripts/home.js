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