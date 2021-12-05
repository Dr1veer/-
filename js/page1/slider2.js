$(function() {
    let offset = 3780;
    $('.sl2__btn_icon-right').click(function() {
        clearInterval(auto);
        offset += 1890;
        if (offset >= 7680) {
            offset = 0;
        }
        $(".slider2__line").css('left', -offset + 'px');
    });
    $('.sl2__btn_icon-left').click(function() {
        clearInterval(auto);
        offset -= 1890;
        if (offset < 0) {
            offset = 7560;
        }
        $(".slider2__line").css('left', -offset + 'px');
    });
    //autoplayer
    let auto = setInterval( function() {
        offset += 1890;
        if (offset >= 7680) {
            offset = 0;
        }
        $(".slider2__line").css('left', -offset + 'px');
    }, 4000);
});

