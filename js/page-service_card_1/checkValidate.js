$(function() {
    $('#form__blue_btn').click( function(e) {
        let form = $('#feedback__form');
        e.preventDefault();
        var error = 0;

        input = ['.feedback__form_input1', '.feedback__form_input2', '.feedback__form_input3', '.feedback__form_input4'];
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
        let mail = $('#feedback-mail');	
        var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

        if (pattern.test(mail.val())) {
            mail.removeClass('_error');
        } else {
            mail.addClass('_error');
            error++;
        }


        if (error == 0) {
            location.reload();
        }
    });
});