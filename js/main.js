$('#display-btn').on('click', () => {
    $('.wrapper').toggleClass('d-flex')
    if ($('.wrapper').hasClass('d-flex')) {
        $('#display-btn').text('Go Block!')
        $('.r-wrapper').removeClass('d-none')
    } else {
        $('#display-btn').text('Go Flex!')
        $('.r-wrapper').addClass('d-none')
    }
})

$('input[name=justify-content]').on('change', (event) => {
    let flexValue = $(event.target).attr('id')
    $('.wrapper').removeClass('justify-content-start justify-content-end justify-content-center justify-content-between justify-content-around')
    $('.wrapper').addClass(`justify-content-${flexValue}`)
})