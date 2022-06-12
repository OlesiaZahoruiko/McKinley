'use strict'


// hamburger-menu
const burger = document.getElementById('burger-btn');
const burgerMenu = document.getElementById('header__list');

burger.addEventListener('click', () => { 
  burgerMenu.classList.toggle('active');
})
  



// Swiper
const reviewsSwiper = document.querySelector('.swiper-reviews');

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
