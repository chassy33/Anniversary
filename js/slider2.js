sliderInt = 1;
sliderNext = 2;

$(document).ready(function () {
    $('.slider2>img#1').show({marginLeft: '-600px'}, 300);
    startSlider()
})
//starts slider function
function startSlider() {
    count = $('.slider2>img').length;
    console.log(count);

    loop = setInterval(function () {

        if (sliderNext > count) {
            sliderNext = 1;
            sliderInt = 1;
        }

        $('.slider2>img').hide({marginLeft: '-600px'}, 300);
        $('.slider2>img#' + sliderNext).show({marginRight: '0px'}, 300);



        sliderInt = sliderNext;
        sliderNext += 1;
    }, 3000)
}
//!ends slider function


$('.left2').click(function () {
    newSlide = sliderInt - 1;
    showSlide(newSlide);
});

$('.right2').click(function () {
    newSlide = sliderInt + 1;
    showSlide(newSlide);
});

function stopLoop() {
    window.clearInterval(loop);
};

function showSlide(id) {
    stopLoop();
    if (id > count) {
        id = 1;
    } else if (id < 1) {
        id = count;
    }

    $('.slider2>img').fadeOut(300);
    $('.slider2>img#' + sliderNext).fadeIn(300);

    sliderInt = id;
    sliderNext = id + 1;
    startSlider();
};

$('.slider2>img').hover(
    function () {
        stopLoop()
    },
    function () {
        startSlider();
    });

    //slider2
