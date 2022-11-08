import './index.html';
import './index.scss';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 500);
}

const termsSwiper = new Swiper('.terms__swiper', {
	slidesPerView: 1,
	preloadImages: true,
	spaceBetween: 30,
	slidesPerView: 1,
	centeredSlides: true,
	centeredSlidesBounds: true,
	// centerInsufficientSlides: true,
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