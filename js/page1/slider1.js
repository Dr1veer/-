$(function() {
    let offset = 2110;
    $('.sl1__btn_icon-right').click(function() {
        clearInterval(auto);
        offset += 1017;
        if (offset >= 5085) {
            offset = 0;
        }
        $(".slider1__line").css('left', -offset + 'px');
    });
    $('.sl1__btn_icon-left').click(function() {
        clearInterval(auto);
        offset -= 1017;
        if (offset < 0) {
            offset = 4180;
        }
        $(".slider1__line").css('left', -offset + 'px');
    });
    //autoplayer
    let auto = setInterval( function() {
        offset += 1017;
        if (offset >= 5085) {
            offset = 0;
        }
        $(".slider1__line").css('left', -offset + 'px');
    }, 4000);
});