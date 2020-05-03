

/************************************
        Events
**********************************/
$(document).ready(function(){
   $("#cards-section").owlCarousel({
       items: 2,
       autoplay: true,
       margin: 20,
       loop: true,
       nav: true,
       smartspeed: 700,
       autoplayHoverPause: true,
       dots: false,
       navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
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

/************************************
        Featured Courses
**********************************/
$(document).ready(function(){
   $("#courses-slider").owlCarousel({
       items: 3,
       autoplay: true,
       margin: 20,
       loop: true,
       nav: true,
       smartspeed: 700,
       autoplayHoverPause: true,
       dots: false,
       navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
   });               
});

/************************************
        Teahers Courses
**********************************/
$(document).ready(function(){
   $("#teachers-slider").owlCarousel({
       items: 3,
       autoplay: true,
       margin: 20,
       loop: true,
       nav: true,
       smartspeed: 700,
       autoplayHoverPause: true,
       dots: false,
       navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
   });               
});

/************************************
        Blog Courses
**********************************/
$(document).ready(function(){
   $("#blog-slider").owlCarousel({
       items: 3,
       autoplay: true,
       margin: 20,
       loop: true,
       nav: true,
       smartspeed: 700,
       autoplayHoverPause: true,
       dots: false,
       navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
   });               
});



