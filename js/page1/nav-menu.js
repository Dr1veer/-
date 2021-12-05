$(function() {
    $('.container__counter a').click(function(){
        var otstupTop=0;
        $('body,html').animate({
            scrollTop: $($(this).attr('href')).offset().top-otstupTop
        }, 1500);
    });
});