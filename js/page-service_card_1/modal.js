$(function() {
    $('.modal-link').click( function() {
        blockScroll();
        $('.modal-order__content').addClass('modal__content--active');
        $('.modal-order').addClass('modal--active');
    });

    $('.modal__close').click( function(e) {
        closeModal();
        e.preventDefault();
    });

    $('.blue_btn2_modal').click( function(e) {
        let form = $('#modal__form');
        e.preventDefault();
        var error = 0;
        input = ['._req1', '._req2', '._req3'];

        for (let index = 0; index < input.length; index++) {
            let elem2 = input[index];
            let elem = $(elem2);

            if (elem.val() != ''){
                elem.removeClass('_error');
            } else {
                elem.addClass('_error');
                error++;
            }
        }

        // validate Email
        let mail = $('#mail');	
        var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

        if (pattern.test(mail.val())) {
            mail.removeClass('_error');
        } else {
            mail.addClass('_error');
            error++;
        }
        
        
        if (error == 0) {
            closeModal();
            blockScroll();
            $('.modal-positive__content').addClass('modal__content--active');
            $('.modal-positive').addClass('modal--active');
        }
    });

    

    $(document).mouseup(function (e) {
        var container = $('.modal__body');
        if (container.has(e.target).length === 0){
            closeModal();
        }
    });

    function closeModal() {
        unBlockScroll();
        $('.modal__content').removeClass('modal__content--active');
        $('.modal').removeClass('modal--active');
    }

    function blockScroll() {
        $('body').css('overflow-y', 'hidden');
    }
    function unBlockScroll() {
        $('body').css('overflow-y', 'scroll');
    }
});