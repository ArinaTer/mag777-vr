import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

export const swiperInstance = new Swiper(".viewer__swiper .swiper", {
  spaceBetween: 3,
  navigation: {
    nextEl: ".viewer__swiper .swiper-button-next",
    prevEl: ".viewer__swiper .swiper-button-prev",
  },
});
