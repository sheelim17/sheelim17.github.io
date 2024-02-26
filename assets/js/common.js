$(function() {
    const wrapper = $('.wrap')
    let scrollPosition = 0;
    
    // 약관 팝업 열기 
    $('.open-layer').each(function() {
        let target = $(this).attr('data-target')
        $(this).on('click', function() {
            $(target).css('display', 'block')
        }) 
    })
    // 약관 팝업 닫기
    $('.layer-full').each(function() {
        let cls = $(this).find('.layer-cls')
        cls.each(function() {
            let target = $(this).attr('data-target')
            $(this).on('click', function() {
                $(target).css('display', 'none')
            }) 
        })
    })
     // bottom layer 열기
    $('.open-btm-layer').each(function() {
        let target = $(this).attr('data-target');
        $(this).on('click', function() {
            scrollPosition = window.scrollY;
            $(target).addClass('show')
            $('body').addClass('scroll-block');
            wrapper.scrollTop(scrollPosition);
        }) 
    })
     // bottom layer 닫기
     $('.btm-layer-wrap').each(function() {
        let cls = $(this).find('.layer-cls')
        cls.on('click', function() {
            $(this).parents('.btm-layer-wrap').removeClass('show');
            $('body').removeClass('scroll-block');
            $(window).scrollTop(scrollPosition);
            console.log(scrollPosition)
        });
    })

    $('.pet-item').each(function() {
        let item = $(this)
        let selBtn = item.find('.btn-sel');
        selBtn.on('click', function() {
            item.toggleClass('on')
        }) 
    })

    $('.tooltip').each(function(){
        let self = $(this)
        let btn = $(this).find('.btn-tooltip');
        let clsBtn = $(this).find('.btn-cls')
        btn.on('click', function() {
            self.addClass('show')
        })
        clsBtn.on('click', function() {
            self.removeClass('show')
        })
    })
    
    

})
 // message box 보여주기 위해 임시로 넣어둔 이벤트 입니다. 
function showMessageBox() {
    $('.message-bar').animate({ bottom : '20px'}, 800, function() {
        $( this ).delay(1000).animate( {
          bottom: '-100%'
        }, 1000 );
      } 
    )
}