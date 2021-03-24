
$(document).ready(function () {
    $('.slider_des').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        nextArrow: $('.right'),
        prevArrow: $('.left')
    });
});

$(".slider_des").on("afterChange", function (event, slick, currentSlide, nextSlide) {
    $(".slide__number").text(`0${currentSlide + 1}/0${slick.slideCount}`);
});

function addSliderAPI(imgList) {
    imgList.forEach((itemImg) => {
        $(`.slider2`).append(
            `<div class="gallery__cel">
           <img class="slider-2-img" src="${itemImg.webformatURL}" alt="photo telephone">
       </div>` )
    })
}

function imgAPI() {
    const link = `https://pixabay.com/api/?key=20835570-260a5d18818fba36f5dd73fba&q=retro`;
    fetch(link)
        .then((response) => {
            let myresult = response.json()
            return myresult;
        })



        .then((result) => {
            addSliderAPI(result.hits);
            $('.slider2').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                cssEase: 'linear',
                nextArrow: $('.right_com'),
                prevArrow: $('.left_com')
            });
        })
        .catch((error) => {
            console.log(error);
        })
}

imgAPI();


$(document).ready(function () { // зaпускaем скрипт пoсле зaгрузки всех элементoв
    /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
    const overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    const open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    const close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    const modal = $('.modal_div'); // все скрытые мoдaльные oкнa

    open_modal.click(function (event) { // лoвим клик пo ссылке с клaссoм open_modal
        event.preventDefault(); // вырубaем стaндaртнoе пoведение
        const div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
        overlay.fadeIn(400, //пoкaзывaем oверлэй
            function () { // пoсле oкoнчaния пoкaзывaния oверлэя
                $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                    .css('display', 'block')
                    .animate({ opacity: 1, top: '50%' }, 200); // плaвнo пoкaзывaем
            });
    });

    close.click(function () { // лoвим клик пo крестику или oверлэю
        modal // все мoдaльные oкнa
            .animate({ opacity: 0, top: '45%' }, 200, // плaвнo прячем
                function () { // пoсле этoгo
                    $(this).css('display', 'none');
                    overlay.fadeOut(400); // прячем пoдлoжку
                }
            );
    });
});


$('#subscribeBtn').click(function (event) {
    $('#modal').toggleClass('activeModal');
})

$('#closeBtn').click(() => $('#modal').toggleClass('activeModal'));

$('.modal').click(function (e) {
    if ($(e.target).is('.modal')) {
        $('#modal').toggleClass('activeModal');
    }
});