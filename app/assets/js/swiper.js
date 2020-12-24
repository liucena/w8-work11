//swiper
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed:1000,
    autoHeight:true,
    loop: true,
    
    
    autoplay: {
        delay: 2000,
      },
      effect:" slide",

  })

  //swiper

  var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

var mySwiper = new Swiper('.swiper-container3', {
  slidesPerView: 3,
  spaceBetween: 30,
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed:1000,
  autoHeight:true,
  loop: true,
  
  
  autoplay: {
      delay: 2000,
    },
    effect:" slide",

})

//swiper