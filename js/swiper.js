// Initalize Swiper
var swiper = new Swiper(".mySwiper", {

  // navigation
   navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
   },
   
    // pagination  
   pagination: {
       el: ".swiper-pagination", 
       clickable: true,
   },
  
   //  autoplay
   autoplay: {
       delay: 1000,
       disableOnInteraction: false,
   }, 

   //  loop
   loop: true,

   // keyboard
   keyboard: {
    enabled: true,
  },

});