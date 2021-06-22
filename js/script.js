$('.owl-carousel').owlCarousel({
  loop:true,
  nav:false,
  dots:true,

  // autoplay:true,
  // autoplayTimeout:2000,
  stagePadding:1,
 
  
  dots:true,
  responsive:{
      350:{
          items:1
      },
      500:{
          items:2
      },
      750:{
          items:3
      }

  }
})