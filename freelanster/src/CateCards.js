import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
// import { Pagination, Navigation } from "swiper";
var CateCardsSlider = new Swiper('.catecards-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {

    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

