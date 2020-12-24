"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
});
"use strict";

var _Swiper, _Swiper2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//swiper
var mySwiper = new Swiper('.swiper-container', (_Swiper = {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  speed: 1000,
  autoHeight: true
}, _defineProperty(_Swiper, "loop", true), _defineProperty(_Swiper, "autoplay", {
  delay: 2000
}), _defineProperty(_Swiper, "effect", " slide"), _Swiper)); //swiper

var swiper = new Swiper('.swiper-container2', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var mySwiper = new Swiper('.swiper-container3', (_Swiper2 = {
  slidesPerView: 3,
  spaceBetween: 30,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  speed: 1000,
  autoHeight: true
}, _defineProperty(_Swiper2, "loop", true), _defineProperty(_Swiper2, "autoplay", {
  delay: 2000
}), _defineProperty(_Swiper2, "effect", " slide"), _Swiper2)); //swiper
//# sourceMappingURL=all.js.map
