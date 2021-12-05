$(function() {
    let offset = 2045;
    $('.sl3__btn_icon-right').click(function() {
        clearInterval(auto);
        offset += 1206;
        if (offset >= 4260) {
            offset = 839;
        }
        $(".slider3__line").css('left', -offset + 'px');
        activeImg(offset);
    });
    $('.sl3__btn_icon-left').click(function() {
        clearInterval(auto);
        offset -= 1206;
        if (offset < 839) {
            offset = 3251;
        }
        $(".slider3__line").css('left', -offset + 'px');
        activeImg(offset);
    });

    function activeImg(offset) {
        if (offset == 839) {
            $('.slider3__line img').removeClass('slide--active');
            $('.slider3__line img:nth-child(2)').addClass('slide--active');
        } else if (offset == 2045) {
            $('.slider3__line img').removeClass('slide--active');
            $('.slider3__line img:nth-child(3)').addClass('slide--active');
        } else if (offset == 3251) {
            $('.slider3__line img').removeClass('slide--active');
            $('.slider3__line img:nth-child(4)').addClass('slide--active');
        }
    }

    //autoplayer
    let auto = setInterval( function() {
        offset += 1206;
        if (offset >= 4260) {
            offset = 839;
        }
        $(".slider3__line").css('left', -offset + 'px');
        activeImg(offset);
    }, 3000);
});