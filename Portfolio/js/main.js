$('document').ready(function(){

  // .comment Slider
  $('.slider-active').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
    autoplaySpeed:1000,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// Testimonial Slider

// $('#test-slide').slick({
//     infinite:true,
//     slideToShow:1,
//     slideToScroll:1,
//     autoplay:true,
//     autoplaySpeed:1000,
// })


})