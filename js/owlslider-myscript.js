$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 100,
        autoplaySpeed: 100,
        autoplayHoverPause:true,
        nav:true,
        loop : true,
        margin: 1,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true,
            },

            600:{
                items:3,
                nav:false
            },

            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });
});