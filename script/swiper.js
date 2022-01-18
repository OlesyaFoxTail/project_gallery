// Swiper
const slider = document.querySelector('.swiper');
let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: 'fade',
});

