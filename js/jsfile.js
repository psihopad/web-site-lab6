$(document).ready(function() {
  $(".galery__slider").slick({
     slidesToShow: 5,
        slideToScroll:5,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows : true,
        dots: false,
        prevArrow: $('.slider__right_botton'),
        nextArrow: $('.slider__left_botton'),
        responsive: [
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,

        }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            dots: false,
            slidesToScroll: 1
          }
        }
      ]
        })
});