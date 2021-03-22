
$(document).ready(function () {
    $('.slider_des').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        nextArrow: $(`.right`),
        prevArrow: $('.left')
    });
});
