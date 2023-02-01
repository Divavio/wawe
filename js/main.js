$(function () {
    $('.slider__blog--inner').slick(
        {
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
        }
    );

    $('.menu__btn, nav a').on('click', function () {
        $('.header__menu').toggleClass('header__menu--active');
    })

    var mixer = mixitup('.gallery__content');

    var scroll_pos = 0;
    $(document).scroll(function () {
        minWidth = $(window).width();
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 500, minWidth > 768) {
            $('.header__menu').css('background-color', '#00B2A0');
        } else if (scroll_pos > 210, minWidth < 768) {
            $('.header__menu').css('background-color', '#00B2A0')
        } else {
            $('.menu__link').css('color', '#fff');
        }
    });
});
