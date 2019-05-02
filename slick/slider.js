$(document).ready(function(){
    $('.slider-back').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 9000,
        mobileFirst: true,
        arrows: false,
        fade: true
    });

});
$(document).ready(function(){
    $('.category-back-slider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 9000,
        arrows: false,
        pauseOnHover: false
    });
});
$(document).ready(function(){
    $('.popular-product-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        mobileFirst: true,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 425,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
        ]
    });
});






