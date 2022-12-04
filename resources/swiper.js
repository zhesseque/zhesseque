const swiper = new Swiper('#teamSlider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '#teamSliderNext',
      prevEl: '#teamSliderPrev',
    },
    initialSlide: 1,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 50,
    breakpoints: {
        // when window width is >= 1440px
        300:{
          slidesPerView: 1,
        },
        600:{
          slidesPerView: 1,
        },
        1000:{
          slidesPerView: 3,
          spaceBetween: 10
        },
        1300:{
          slidesPerView: 3,
          spaceBetween: 50
        },
        1600: {
          slidesPerView: 3,
          spaceBetween: 50
        },
    }
});
