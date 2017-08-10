//slider
$(document).ready(function(){
      $('.slider').slider();
    });


//smooth scroll
 smoothScroll.init();


 //collapsible (F.A.Q)
$(document).ready(function(){
      $('.parallax').parallax();
    });

$(document).ready(function(){
    $('.materialboxed').materialbox();
  });

$('.carousel.carousel-slider').carousel({fullWidth: true});

$(document).ready(function(){
                $('.least-gallery').least();
            });

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}