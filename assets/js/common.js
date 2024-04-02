const wrapper = $('.wrap')
let scrollPosition = 0;

$(function() {
    $('.custom-select').each(function() {
        let $select = $(this)
        $select.on('click', function() {
            $select.toggleClass('active')
        }) 
    })
    if($('.btm-fixed').length) {
        var lastScrollTop = 0, delta = 5;
        $(window).scroll(function(){
            var nowScrollTop = $(this).scrollTop();
            var scrollHeight =  $('body').prop('scrollHeight')
            var end = nowScrollTop + $('body').innerHeight() == scrollHeight
            if(!end) {
                if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
                    if (nowScrollTop > lastScrollTop){
                        $('.btm-fixed').removeClass('up').addClass('down')
                    } else if((nowScrollTop <= lastScrollTop)){
                        $('.btm-fixed').removeClass('down').addClass('up')
                    }
                lastScrollTop = nowScrollTop;
                } 
            } else {
                $('.btm-fixed').removeClass('down').addClass('up')
            }
        });
    }
    
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
