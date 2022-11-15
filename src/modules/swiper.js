import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';


const termsSwiper = new Swiper('.terms__swiper', {
	slidesPerView: 1,
	preloadImages: true,
	spaceBetween: 30,
	slidesPerView: 1,
	speed: 1500,
	centeredSlides: true,
	centeredSlidesBounds: true,
	direction: 'horizontal',
	loop: false,
	modules: [Navigation, Pagination],
	pagination: {
		el: '.terms__swiper-pagination',
		clickable: true,
	},
	navigation: {
    nextEl: '.terms__next',
    prevEl: '.terms__prev',
  },
});

const photoSwiper = new Swiper('.photo__swiper', {
	slidesPerView: 1,
	speed: 1500,
	preloadImages: true,
	spaceBetween: 30,
	slidesPerView: 1,
	centeredSlides: true,
	direction: 'horizontal',
	loop: false,
	modules: [Navigation, Pagination, Autoplay],
	pagination: {
		el: '.photo__swiper-pagination',
		clickable: true,
	},
	navigation: {
    nextEl: '.photo__next',
    prevEl: '.photo__prev',
  },
	autoplay: {
		delay: 5000,
	},
});

const footerSwiper = new Swiper('.footer__swiper', {
	slidesPerView: 1,
	speed: 1500,
	preloadImages: true,
	spaceBetween: 30,
	slidesPerView: 1,
	centeredSlides: true,
	direction: 'horizontal',
	loop: false,
	modules: [Navigation, Pagination],
	pagination: {
		el: '.footer__swiper-pagination',
		clickable: true,
	},
	navigation: {
    nextEl: '.footer__next',
    prevEl: '.footer__prev',
  },
});