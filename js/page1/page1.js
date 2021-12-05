$(function() {
    $('#moreBtn').click(function() {
        if ($("#sl2__blockText").css('height') == '490px') {
            closeText();
        } else {
            
            $("#sl2__blockText").css('height', '490px');
            $('.more-btn__img').attr('src', 'img/icons/arrowUp_dark.png');
        }
    });
    $(document).mouseup(function (e) {
        var container = $('#sl2__blockText');
        if (container.has(e.target).length === 0){
            closeText();
        }
    });
    function closeText() {
        $("#sl2__blockText").css('height', '300px');
        $('.more-btn__img').attr('src', 'img/icons/arrowDown_dark.png');
    }
});