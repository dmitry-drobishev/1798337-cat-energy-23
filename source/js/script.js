//main navigation
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.page-header__toggle');

  navMain.classList.remove('main-nav--nojs');
  navToggle.classList.remove('page-header__toggle--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--close')) {
      navMain.classList.remove('main-nav--close');
      navMain.classList.add('main-nav--open');
      navToggle.classList.remove('page-header__toggle--close');
      navToggle.classList.add('page-header__toggle--open');
    } else {
      navMain.classList.add('main-nav--close');
      navMain.classList.remove('main-nav--open');
      navToggle.classList.add('page-header__toggle--close');
      navToggle.classList.remove('page-header__toggle--open');
    }
  });




// const slideBefore = document.querySelector('example__slide--before');
// const slideAfter = document.querySelector('example__slide--after');
// const sliderHandle = document.querySelector('example__slider-handle');
// const buttonBefore = document.querySelector('example__slider-button--before');
// const buttonAfter = document.querySelector('example__slider-button--after');

// buttonBefore.addEventListener('click', function() {
//   if (sliderHandle.classList.contains('example__slider-handle--after')) {
//     slideBefore.classList.add('example__slide--active');
//     slideAfter.classList.remove('example__slide--active');
//     sliderHandle.classList.add('example__slider-handle--before');
//     sliderHandle.classList.remove('example__slider-handle--after');
//   }
// });

// buttonAfter.addEventListener('click', function() {
//   if (sliderHandle.classList.contains('example__slider-handle--before')) {
//     slideBefore.classList.remove('example__slide--active');
//     slideAfter.classList.add('example__slide--active');
//     sliderHandle.classList.remove('example__slider-handle--before');
//     sliderHandle.classList.add('example__slider-handle--after');
//   }
// });
