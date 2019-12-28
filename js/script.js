

/************************************
        Events
**********************************/
$(document).ready(function(){
   $("#cards-section").owlCarousel({
       items: 2,
       autoplay: true,
       margin: 20,
       loop: true,
       nav: false,
       smartspeed: 700,
       autoplayHoverPause: true,
       dots: false,
//       navText: ['<i class="lni-chevron-left-circle"></i>', '<i class="lni-chevron-right-circle"></i>']
   });               
});


/************************************
        TESTIMONIAL
**********************************/
$(document).ready(function(){
   $("#testimonial-slider").owlCarousel({
       items: 1,
       autoplay: true,
       margin: 20,
       loop: true,
       nav: false,
       smartspeed: 700,
       autoplayHoverPause: true,
       dots: true,
//       navText: ['<i class="lni-chevron-left-circle"></i>', '<i class="lni-chevron-right-circle"></i>']
   });               
});


