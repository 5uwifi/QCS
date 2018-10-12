$(document).ready(function () {
    // var fenpeiScrollTop = $('.code-allocation-wrap').offset().top;
    var teamMemberScrollTop = $('.team-intro-wrap').offset().top;
    var partnerBtnScrollTop = $('.partner-wrap').offset().top;
    // $('.fenpeiBtn').click(function () {
    //     $('html,body').animate({ scrollTop: fenpeiScrollTop }, 500);
    // })
    $('.teamMember').click(function () {
        $('html,body').animate({ scrollTop: teamMemberScrollTop }, 500);
    })
    $('.partnerBtn').click(function () {
        $('html,body').animate({ scrollTop: partnerBtnScrollTop }, 500);
    })
    $('.qqCode-bigwrap').on('click',function () {
        $('.qq-qrcode-wrap').toggle();
    })
    $('.wxCode-bigwrap').on('click',function () {
        $('.wx-qrcode-wrap').toggle();
    })
    $('.db-bigwrap').on('click',function () {
        $('.db-qrcode-wrap').toggle();
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $('#back_btn_top').fadeIn();
        }
        else {
            $('#back_btn_top').fadeOut();
        }
    });
    $('#back_btn_top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 500);
    });
})