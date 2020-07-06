
$('.button').click(function(e) {
    e.preventDefault();
    setContent($(this));
});


$('.button.active').length && setContent($('.button.active'));

function setContent($el) {
    $('.button').removeClass('active');
    $('.container').hide();
    
    $el.addClass('active');
    $($el.data('rel')).show();
}


