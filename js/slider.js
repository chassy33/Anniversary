sliderInt = 1;
sliderNext = 2;

$(document).ready(function () {
    $('.slider>img#1').fadeIn(300);
    startSlider()
})
//starts slider function
function startSlider() {
    count = $('.slider>img').length;


    loop = setInterval(function () {

        if (sliderNext > count) {
            sliderNext = 1;
            sliderInt = 1;
        }

        $('.slider>img').fadeOut(300);
        $('.slider>img#' + sliderNext).fadeIn(300);


        sliderInt = sliderNext;
        sliderNext = sliderNext + 1;
    },3000)
}
//!ends slider function


$('.left').click(function (event) {
  event.preventDefault();
    newSlide = sliderInt - 1;
    showSlide(newSlide);
});

$('.right').click(function (event) {
  event.preventDefault();
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

     sliderInt = id;
    sliderNext = id + 1;
    
    $('.slider>img').fadeOut(300);
    $('.slider>img#' + sliderNext).fadeIn(300);

   
    startSlider();
};

$('.slider>img').hover(
    function () {
        stopLoop()
    },
    function () {
        startSlider();
    });



    //---------slider 2 start function---------------------------------------->

    sliderInt2 = 11;
    sliderNext2 = 12;

    $(document).ready(function () {
        $('.slider2>img#11').fadeIn(300);
        startSlider2()
    })
    //starts slider function
    function startSlider2() {
        count2 = ($('.slider2>img').length)+10;

        loop2 = setInterval(function () {

            if (sliderNext2 > count2) {
                sliderNext2 = 11;
                sliderInt2 = 11;
            }

            $('.slider2>img').fadeOut(300);
            $('.slider2>img#' + sliderNext2).fadeIn(300);



            sliderInt2 = sliderNext2;
            sliderNext2 += 1;
        }, 3000)
    }
    //!ends slider function


    $('.left2').click(function (event) {
      event.preventDefault();
        newSlide2 = sliderInt2 - 1;
        showSlide2(newSlide2);
    });

    $('.right2').click(function (event) {
      event.preventDefault();
        newSlide2 = sliderInt2 + 1;
        showSlide2(newSlide2);
    });

    function stopLoop2() {
        window.clearInterval(loop2);
    };

    function showSlide2(id2) {
        stopLoop2();
        if (id2 > count2) {
            id2 = 11;
        } else if (id2 < 11) {
            id2 = count2;
        }

        $('.slider2>img').fadeOut(300);
        $('.slider2>img#' + sliderNext2).fadeIn(300);

        sliderInt2 = id2;
        sliderNext2 = id2 + 1;
        startSlider2();
    };

    $('.slider2>img').hover(
        function () {
            stopLoop2()
        },
        function () {
            startSlider2();
        });



//<--------------------starts slider 3 function----------------------->


sliderInt3 = 31;
    sliderNext3 = 32;

    $(document).ready(function () {
        $('.slider3>img#31').fadeIn(300);
        startSlider3()
    })
    //starts slider function
    function startSlider3() {
        count3 = ($('.slider3>img').length)+30;

        loop3 = setInterval(function () {

            if (sliderNext3 > count3) {
                sliderNext3 = 31;
                sliderInt3 = 31;
            }

            $('.slider3>img').fadeOut(300);
            $('.slider3>img#' + sliderNext3).fadeIn(300);



            sliderInt3 = sliderNext3;
            sliderNext3 = sliderNext3 + 1;
        }, 3000)
    }
    //!ends slider function


    $('.left3').click(function (event) {
      event.preventDefault();
        newSlide3 = sliderInt3 - 1;
        showSlide3(newSlide3);
    });

    $('.right3').click(function (event) {
      event.preventDefault();
        newSlide3 = sliderInt3 + 1;
        showSlide3(newSlide3);
    });

    function stopLoop3() {
        window.clearInterval(loop3);
    };

    function showSlide3(id3) {
        stopLoop3();
        if (id3 > count3) {
            id3 = 31;
        } else if (id3 < 31) {
            id3 = count3;
        }

        $('.slider3>img').fadeOut(300);
        $('.slider3>img#' + sliderNext3).fadeIn(300);

        sliderInt3 = id3;
        sliderNext3 = id3 + 1;
        startSlider3();
    };

    $('.slider3>img').hover(
        function () {
            stopLoop3()
        },
        function () {
            startSlider3();
        });
