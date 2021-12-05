$(function() {
    $('.head-menu__burger-black').click(function(event) {
        $('.head-menu__container').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
