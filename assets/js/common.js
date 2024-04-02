const wrapper = $('.wrap')
let scrollPosition = 0;

$(function() {
    $('.custom-select').each(function() {
        let $select = $(this)
        $select.on('click', function() {
            $select.toggleClass('active')
        }) 
    })
})

function openLayer(layerId) {
    let $layerId = $('#'+ layerId)
    scrollPosition = window.scrollY;
    $layerId.css('display', 'flex');
    $('body').addClass('scroll-block');
    wrapper.scrollTop(scrollPosition);
}

function closeLayer(layerId) {
    let $layerId = $('#'+ layerId)
    $layerId.css('display', 'none');
    $('body').removeClass('scroll-block');
    $(window).scrollTop(scrollPosition);
}
